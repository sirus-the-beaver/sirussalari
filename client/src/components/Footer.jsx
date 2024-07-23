import React from 'react';

export default function Footer () {
    return (
        <footer className="py-4 bg-gray-900 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <p className="text-white text-center">&copy; {new Date().getFullYear()} Sirus Salari. All rights reserved.</p>
                <div className="flex justify-center mt-4">
                    <a href='https://www.linkedin.com/in/salari-insite/' target='_blank' rel='noopener noreferrer' className="text-white mx-2">LinkedIn</a>
                    <a href='https://github.com/sirus-the-beaver' target='_blank' rel='noopener noreferrer' className="text-white mx-2">GitHub</a>
                    <a href='https://scrappedscript.com/' target='_blank' rel='noopener noreferrer' className="text-white mx-2">Blog</a>
                </div>
            </div>
        </footer>
    )
}