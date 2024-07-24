import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaArrowAltCircleUp } from 'react-icons/fa';

export default function Chatbot() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const chatEnd = useRef(null);

    const sendMessage = async () => {
        // Prevent sending empty messages
        if (!message.trim()) return;

        // Add user message to chat
        const userMessage = { sender: 'user', text: message };
        setChat((prevChat) => [...prevChat, userMessage]);

        try {
            // Send user message to chatbot
            const response = await axios.post('http://localhost:4037/api/chat', { query: message });

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
        if (chatEnd.current) {
            chatEnd.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chat]);

    return (
        <div className="flex flex-col items-center justify-between bg-neutral-900 text-white border border-gray-300 w-full max-w-2xl h-3/4 mb-4">
            <h1 className="text-2xl font-bold mb-4">AISy</h1>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col w-full max-w-2xl h-80 overflow-auto rounded-lg">
                    {chat.map((entry, index) => (
                        <div
                            key={index}
                            className={`flex p-2 mb-2 w-1/2 rounded ${entry.sender === 'user' ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-800 text-white mr-auto'}`}
                        >
                            <div className={`p-2 rounded max-w-xs`}>
                                {entry.text}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEnd} />
                </div>
                <div className="w-full max-w-2xl flex mb-4">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-grow px-2 py-1 border border-gray-300 rounded-r bg-gray-800 text-white text-lg"
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 py-1 bg-blue-500 text-white rounded-r"
                    >
                        <FaArrowAltCircleUp />
                    </button>
                </div>
            </div>
            <p className="text-sm text-gray-500">Please note that the chatbot may make mistakes or provide inaccurate information.</p>
        </div>
    );
};