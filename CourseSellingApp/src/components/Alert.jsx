import React, { useEffect, useState } from 'react';

const Alert = ({ message, type = "success", duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    const alertStyles = {
        success: "text-green-800 border-green-300 bg-green-50",
        error: "text-red-800 border-red-300 bg-red-50",
    };

    return (
        <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center p-4 mb-4 text-sm rounded-lg border ${alertStyles[type]} transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} role="alert">
            <svg className="flex-shrink-0 w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="font-medium">{message}</span>
        </div>
    );
};

export default Alert;
