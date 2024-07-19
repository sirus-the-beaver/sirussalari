import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        setChat([...chat, { sender: 'user', text: message }]);

        try {
            const response = await axios.post('/api/chat', { message });
            setChat([...chat, { sender: 'user', text: message }, { sender: 'bot', text: response.data.choices[0].text.trim() }]);
        } catch (error) {
            console.error(error);
        }

        setMessage('');
    };

    return (
        <div>
            <div>
                {chat.map((entry, index) => (
                    <div key={index} className={`chat-message ${entry.sender}`}>
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