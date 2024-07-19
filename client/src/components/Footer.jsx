import React from 'react';

export default function Footer () {
    return (
        <footer>
            <div>
                <p>&copy {new Date().getFullYear()} Sirus Salari. All rights reserved.</p>
                <div>
                    <a href='https://www.linkedin.com/in/salari-insite/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href='https://github.com/sirus-the-beaver' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href='https://scrappedscript.com/' target='_blank' rel='noopener noreferrer'>Blog</a>
                </div>
            </div>
        </footer>
    )
}