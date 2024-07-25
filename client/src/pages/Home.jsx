import React from 'react';
import Chatbot from '../components/Chatbot';

export default function Home() {
    return (
        <section className="flex flex-col items-center min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
            <div className="max-w-2xl mx-auto text-center">
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Welcome to My Portfolio Site</h1>
                    <p className="mt-4 text-lg">Meet AISy, your AI assistant equipped with advanced natural language processing and retrieval-augmented generation techniques.</p>
                </header>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4">
                    <p className="mb-4">AISy integrates the latest in AI technology, including:</p>
                    <ol className="list-decimal list-inside text-left space-y-4">
                        <li>
                            <strong className="text-lg">Data Loading and Environment Setup:</strong>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>AISy loads personal data from a JSON file, which was also used to fine-tune GPT-3.5 for tailored responses.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-lg">Natural Language Processing (NLP):</strong>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>Uses the <code>natural</code> library for word tokenization and stemming.</li>
                                <li>Employs a TF-IDF vectorizer to find the most relevant information from the data.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-lg">Query Processing with Retrieval-Augmented Generation (RAG):</strong>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>Matches user queries with stored data to provide contextually relevant responses.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-lg">Response Generation:</strong>
                            <ul className="list-disc list-inside ml-4 space-y-2">
                                <li>Utilizes the OpenAI API for generating responses from a custom fine-tuned model, ensuring a comprehensive and engaging interaction.</li>
                            </ul>
                        </li>
                    </ol>
                    <hr className="my-8 border-gray-400" />
                    <p className="mb-4">Try asking AISy questions like:</p>
                    <ul className="list-disc list-inside text-left space-y-2">
                        <li>"How has understanding x86 Assembly improved your grasp of low-level programming concepts?"</li>
                        <li>"Share your experience with building your first software application."</li>
                        <li>"What are your thoughts on the future of software engineering?"</li>
                        <li>"Tell me about your favorite music genres."</li>
                    </ul>
                </div>
                <Chatbot className="mt-4" />
            </div>
        </section>
    )
}