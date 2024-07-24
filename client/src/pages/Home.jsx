import React from 'react';
import Chatbot from '../components/Chatbot';

export default function Home() {
    return (
        <section className="flex flex-col text-white font-serif justify-center items-center dark:bg-gray-900">
            <div className="max-w-lg mx-auto p-4">
                <p className="text-center">Below is an AI assistant that I named AISy.</p>
                <p className="text-center">AISy integrates advanced natural language processing (NLP) techniques, the OpenAI API, and Retrieval Augmented Generation (RAG) to provide intelligent and contextually relevant responses.</p>
                <p className="text-center">AISy is fine-tuned with personal data to enhance its performance and accuracy.</p>
                <p className="text-center">Here's a breakdown of the key components and their roles:</p>
                <ol className="list-decimal list-inside">
                    <li className="md:text-lg">Data Loading and Environment Setup:
                        <ul className="list-disc list-inside">
                            <li className="md:text-base">AISy loads personal data from a JSON file using a custom function. This data was also used to fine-tune GPT-3.5, improving the chatbot's ability to provide tailored responses.</li>
                        </ul>
                    </li>
                    <li className="md:text-lg">Natural Language Processing (NLP):
                        <ul className="list-disc list-inside">
                            <li className="md:text-base">The <code>natural</code> library handles NLP tasks. It includes a word tokenizer that splits input text into individual words, and the Porter stemmer reduces words to their base form, aiding in text normalization.</li>
                            <li className="md:text-base">A custom function employs a Term Frequency-Inverse Document Frequency (TF-IDF) vectorizer to calculate the similarity between different pieces of text. This helps the chatbot retrieve the most relevant information from the fine-tuned data.</li>
                        </ul>
                    </li>
                    <li className="md:text-lg">Query Processing with Retrieval-Augmented Generation (RAG):
                        <ul className="list-disc list-inside">
                            <li className="md:text-base">Upon receiving a user query, the chatbot preprocesses the text and searches the JSON data for the most relevant context. This involves comparing the query with stored example user messages to find a matching context using cosine similarity.</li>
                            <li className="md:text-base">If relevant context is identified, it is passed to the fine-tuned model along with the query to assist in generating accurate and contextually appropiate responses.</li>
                        </ul>
                    </li>
                    <li className="md:text-lg">Response Generation:
                        <ul className="list-disc list-inside">
                            <li className="md:text-base">AISy sends requests to the fine-tuned model using the OpenAI API. The API is provided with a sequence of messages, including a system message for context setting, any relevant data retrieved from the JSON file, and the user's query. The generated response is then delivered to the user.</li>
                        </ul>
                    </li>
                </ol>
                <hr className="my-4" />
                <p className="text-center">Some examples of questions you may want to ask include:</p>
                <ul className="mb-4 list-disc list-inside">
                    <li className="md:text-base">"How has understanding x86 Assembly improved your grasp of low-level programming concepts?"</li>
                    <li className="md:text-base">"Share your experience with building your first software application."</li>
                    <li className="md:text-base">"Share your thoughts on the future of software engineering."</li>
                    <li className="md:text-base">"Share about the type of music you're interested in."</li>
                </ul>
                <p className="text-center">This sophisticated system leverages NLP, RAG, and a fine-tuned model to deliver personalized and accurate responses, making the chatbot an effective and engaging conversational partner.</p>
            </div>
            <Chatbot className="mt-4" />
        </section>
    )
}