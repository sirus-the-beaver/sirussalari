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
    const tokens = tokenizer.tokenize(text.toLowerCase());
    return tokens.map(token => stemmer.stem(token)).join(' ');
}

const calculateSimilarity = (text1, text2) => {
    const vectorizer = new natural.TfIdf();
    vectorizer.addDocument(text1);
    vectorizer.addDocument(text2);

    const docVector1 = vectorizer.documents[0];
    const docVector2 = vectorizer.documents[1];

    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;

    Object.keys(docVector1).forEach(term => {
        dotProduct += (docVector1[term] || 0) * (docVector2[term] || 0);
        magnitude1 += (docVector1[term] || 0) ** 2;
        magnitude2 += (docVector2[term] || 0) ** 2;
    });

    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);

    if (magnitude1 * magnitude2 === 0) {
        return 0;
    }

    return dotProduct / (magnitude1 * magnitude2);
}

const processQuery = async (query) => {
    const relevantData = searchJsonData(query);

    const response = await generateResponse(query, relevantData);
    return response;
};

const searchJsonData = (query) => {
    const preprocessedQuery = preprocess(query);
    console.log(`Preprocessed Query: ${preprocessedQuery}`);

    let bestMatch = null;
    let highestScore = 0;

    data.forEach((item, itemIndex) => {
        item.messages.forEach((message, messageIndex) => {
            if (message.role === 'user') {
                const preprocessedMessage = preprocess(message.content);
                const score = calculateSimilarity(preprocessedQuery, preprocessedMessage);
                console.log(`Score for item ${itemIndex}, message ${messageIndex}: ${score}`);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = { item, index: messageIndex };
                }
            }
        });
    });

    if (bestMatch) {
        const assistantMessage = bestMatch.item.messages[bestMatch.index + 1];
        if (assistantMessage && assistantMessage.role === 'assistant') {
            console.log(`Best Match Found: ${assistantMessage.content}`);
            return assistantMessage.content;
        }
    }

    console.log('No relevant match found');
    return null;
};

const generateResponse = async (query, relevantData) => {
    let messages = [
        { role: "system", content: "You are a knowledgeable assistant. Use the provided context to answer the user query as accurately as possible." }
    ];

    if (relevantData) {
        messages.push({ role: "system", content: `Context: ${relevantData}` });
    }

    messages.push({ role: "user", content: query });

    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "ft:gpt-3.5-turbo-0125:personal:personal-website:9nIR8fN9",
    });

    console.log(completion.choices[0].message.content);

    const data = completion.choices[0].message.content;
    return data;
};

export default processQuery;