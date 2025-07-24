import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-4 px-5">
            <div className="mt-4 md:mt-0 flex space-x-6">
                <a
                    href="https://github.com/demjrhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-200 hover:scale-110 hover:text-purple-400"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/demjrhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-200 hover:scale-110 hover:text-blue-200"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}