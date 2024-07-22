import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = { sender: 'user', text: message };
        setChat((prevChat) => [...prevChat, userMessage]);

        try {
            const response = await axios.post('http://localhost:4024/api/chat', { query: message });
            const botMessage = { sender: 'bot', text: response.data.response};
            setChat((prevChat) => [...prevChat, botMessage]);
        } catch (error) {
            console.error(error);
        }
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
                {chat.map((entry, index) => (
                    <div key={index} className="bg-gray-200 p-2 mb-2 rounded">
                        {entry.text}
                    </div>
                ))}
            </div>
            <div className="w-full max-w-md flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-grow px-2 py-1 border border-gray-300 rounded-l"
                />
                <button
                    onClick={sendMessage}
                    className="px-4 py-1 bg-blue-500 text-white rounded-r"
                >
                    Send
                </button>
            </div>
        </div>
    )
};