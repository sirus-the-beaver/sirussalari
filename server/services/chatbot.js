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
    return tokens.map(token => stemmer.stem(token));
}

const calculateSimilarity = (text1, text2) => {
    const vectorizer = new natural.TfIdf();
    vectorizer.addDocument(text1);
    vectorizer.addDocument(text2);
    return vectorizer.tfidf(text2, 0);
}

const processQuery = async (query) => {
    const relevantData = searchJsonData(query);

    const response = await generateResponse(query, relevantData);
    return response;
};

const searchJsonData = (query) => {
    const preprocessedQuery = preprocess(query);

    let bestMatch = null;
    let highestScore = 0;
  
    for (const item of data) {
      const messages = item.messages;
      for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        if (message.role === 'user') {
          const preprocessedMessage = preprocess(message.content);
          const score = calculateSimilarity(preprocessedQuery.join(' '), preprocessedMessage.join(' '));
  
          if (score > highestScore) {
            highestScore = score;
            bestMatch = i;
          }
        }
      }
  
      if (bestMatch !== null) {
        const assistantMessage = messages[bestMatch + 1];
        if (assistantMessage && assistantMessage.role === 'assistant') {
          return assistantMessage.content || 'Sorry, I could not find any relevant information.';
        }
      }
    }
  
    return 'Sorry, I could not find any relevant information.';
};

const generateResponse = async (query, relevantData) => {
    if (!relevantData) return 'Sorry, I could not find any relevant data.';

    const completion = await openai.chat.completions.create({
        messages: [
            {role: "system", content: `Provide a detailed and accurate response based on the context: ${relevantData}. Also, you're name is Sirus, and you're majoring in computer science at Oregon State University.`},
            {role: "user", content: query}
        ],
        model: "ft:gpt-3.5-turbo-0125:personal:personal-website:9nIR8fN9",
    });

    console.log(completion.choices[0].message.content);

    const data = completion.choices[0].message.content;
    return data;
};

export default processQuery;