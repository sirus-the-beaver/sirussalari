import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function Chatbot() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const chatEnd = useRef(null);
    const isInitialRender = useRef(false);

    const sendMessage = async () => {
        // Prevent sending empty messages
        if (!message.trim()) return;

        // Add user message to chat
        const userMessage = { sender: 'user', text: message };
        setChat((prevChat) => [...prevChat, userMessage]);

        try {
            // Send user message to chatbot
            const response = await axios.post('http://localhost:4046/api/chat', { query: message });

            // Add chatbot response to chat
            const botMessage = { sender: 'bot', text: response.data.response};
            setChat((prevChat) => [...prevChat, botMessage]);
        } catch (error) {
            console.error(error);
        }
        // Clear message input
        setMessage('');
    };

    useEffect(() => {
        // Scroll to the end of the chat
        if (!isInitialRender.current) {
            chatEnd.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            isInitialRender.current = false;
        }

    }, [chat]);

    return (
        <div className="flex flex-col items-center justify-between bg-neutral-900 text-white border border-gray-700 rounded-lg w-full max-w-2xl h-full shadow-lg p-6 mb-4">
            <h1 className="text-3xl font-bold mb-4">AISy</h1>
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-col w-full h-80 overflow-auto rounded-lg bg-gray-800 p-4 mb-4">
                    {chat.map((entry, index) => (
                        <div
                            key={index}
                            className={`flex mb-2 w-auto max-w-full ${entry.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`p-3 rounded-lg ${entry.sender === 'user' ? 'bg-blue-600 text-white self-end' : 'bg-gray-700 text-white self-start'}`}>
                                {entry.text}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEnd} />
                </div>
                <div className="flex items-center w-full">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-grow px-4 py-2 border-none rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                        placeholder="Message AISy"
                        aria-label="Chat input"
                    />
                    <button
                        onClick={sendMessage}
                        className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
                        aria-label="Send message"
                    >
                        <FaArrowAltCircleUp />
                    </button>
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Please note that AISy can make mistakes or provide inaccurate information.</p>
        </div>
    );
};