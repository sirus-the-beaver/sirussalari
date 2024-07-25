import loadData from '../utils/dataLoader.js';
import OpenAI from 'openai';
import natural from 'natural';
import dotenv from 'dotenv';

dotenv.config();
const data = loadData();
const openai = new OpenAI({ apiKey: `${process.env.OPENAI_API_KEY}` });
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

const preprocess = (text) => {
    // Lowercase, tokenize, and stem the text
    const tokens = tokenizer.tokenize(text.toLowerCase());
    return tokens.map(token => stemmer.stem(token)).join(' ');
}

const calculateSimilarity = (text1, text2) => {
    // Calculate the cosine similarity between two texts
    const vectorizer = new natural.TfIdf();
    vectorizer.addDocument(text1);
    vectorizer.addDocument(text2);

    // Get the document vectors
    const docVector1 = vectorizer.documents[0];
    const docVector2 = vectorizer.documents[1];

    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;

    // Calculate the dot product and magnitudes
    Object.keys(docVector1).forEach(term => {
        dotProduct += (docVector1[term] || 0) * (docVector2[term] || 0);
        magnitude1 += (docVector1[term] || 0) ** 2;
        magnitude2 += (docVector2[term] || 0) ** 2;
    });

    // Normalize the magnitudes 
    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);

    if (magnitude1 * magnitude2 === 0) {
        return 0;
    }

    return dotProduct / (magnitude1 * magnitude2);
}

const processQuery = async (query) => {
    // Search the JSON data for the most relevant context
    const relevantData = searchJsonData(query);

    // Generate a response using the OpenAI chat model
    const response = await generateResponse(query, relevantData);
    return response;
};

const searchJsonData = (query) => {
    // Preprocess the query and search the JSON data for the most relevant context
    const preprocessedQuery = preprocess(query);

    let bestMatch = null;
    let highestScore = 0;

    // Iterate through the JSON data and calculate the similarity between the query and user messages
    data.forEach((item, itemIndex) => {
        item.messages.forEach((message, messageIndex) => {
            if (message.role === 'user') {
                const preprocessedMessage = preprocess(message.content);
                const score = calculateSimilarity(preprocessedQuery, preprocessedMessage);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = { item, index: messageIndex };
                }
            }
        });
    });

    // If a relevant match is found, return the context
    if (bestMatch) {
        const assistantMessage = bestMatch.item.messages[bestMatch.index + 1];
        if (assistantMessage && assistantMessage.role === 'assistant') {
            return assistantMessage.content;
        }
    }

    // If no relevant match is found, return null
    return null;
};

const generateResponse = async (query, relevantData) => {
    let messages = [
        { role: "system", content: "You are a knowledgeable assistant. Use the provided context to answer the user query as accurately as possible." }
    ];

    // Add the relevant context to the messages
    if (relevantData) {
        messages.push({ role: "system", content: `Context: ${relevantData}` });
    }

    messages.push({ role: "user", content: query });

    const completion = await openai.chat.completions.create({
        messages: messages,
        model: `${process.env.MODEL}`,
    });
    
    const data = completion.choices[0].message.content;
    return data;
};

export default processQuery;