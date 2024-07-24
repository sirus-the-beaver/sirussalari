import React from 'react';
import Chatbot from '../components/Chatbot';

export default function Home() {
    return (
        <div className="flex flex-col text-white font-serif justify-center items-center dark:bg-gray-900">
            <div className="max-w-lg mx-auto p-4">
                <p className="text-center">Welcome to my portfolio site!</p>
                <p className="text-center">Below is an AI assistant that I named AISy.</p>
                <p className="text-center">This assistant leverages OpenAI's API and a fine-tuned GPT-3.5-turbo model to provide detailed insights about my projects, skills, and interests.</p>
                <p className="text-center">Utilizing the "natural" library for Node.js, user queries are preprocessed and matched to the most relevant data using advanced NLP techniques.</p>
                <p className="text-center">Some examples of questions you may want to ask include:</p>
                <ul className="list-inside">
                    <li>"How has understanding x86 Assembly improved your grasp of low-level programming concepts?"</li>
                    <li>"Share your experience with building your first software application."</li>
                    <li>"Share your thoughts on the future of software engineering."</li>
                    <li>"Share about the type of music you're interested in."</li>
                </ul>
                <p className="text-center">This chatbot is designed to deliver precise and context-aware responses, making your interaction both informative and engaging</p>
                <p className="text-center">Dive in and explore the breadth of my technical and creative pursuits!</p>
            </div>
            <Chatbot />
        </div>
    )
}