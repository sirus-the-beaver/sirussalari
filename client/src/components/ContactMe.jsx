import React, { useState } from 'react';
import axios from 'axios';

export default function ContactMe() {
    return (
        <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white font-serif p-4">
            <header>
                <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            </header>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                <p className="text-lg mb-4">You can reach me through the following channels:</p>
                <ul className="list-disc pl-5">
                    <li className="mb-2">
                        <strong>Email:</strong> <a href="mailto:sirus.salari@gmail.com" className="text-blue-400 hover:underline">sirus.salari@gmail.com</a>
                    </li>
                    <li className="mb-2">
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/salari-insite/" target="_blank" rel="noreferrer noopener" className="text-blue-400 hover:underline">linkedin.com/in/salari-insite</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}