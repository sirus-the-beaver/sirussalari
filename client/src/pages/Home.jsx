import React from 'react';
import Chatbot from '../components/Chatbot';

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen dark:bg-gray-900">
            <div className="max-w-md mx-auto p-6 dark:bg-gray-800">
                <p className="text-center text-2xl dark:text-white">Welcome to my portfolio site!</p>
            </div>
            <Chatbot />
        </div>
    )
}