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
        <div>
            <div>
                {chat.map((entry, index) => (
                    <div key={index}>
                        {entry.text}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
};