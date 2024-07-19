import React from 'react';
import Chatbot from '../components/Chatbot';

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md mx-auto p-6">
                <p className="text-center text-2xl">Welcome to my portfolio site!</p>
            </div>
            <Chatbot />
        </div>
    )
}