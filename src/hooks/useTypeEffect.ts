import { useState, useEffect } from 'react';

export const useTypeEffect = (text, speed = 100, callback) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                const currentText = text.slice(0, index + 1);
                setDisplayedText(currentText);
                if (callback) {
                    callback(currentText); // Update the external state via callback
                }
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval); // Clean up on unmount
    }, [text, speed, callback]);

    return displayedText;
};


