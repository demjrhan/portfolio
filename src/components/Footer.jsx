import React from "react";
import RotatingFooterText from "./FooterText.jsx";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-4 px-5">
            <div className="mt-4 md:mt-0 flex space-x-6">
                <a
                    href="https://github.com/demjrhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:drop-shadow-lg"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/demjrhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:drop-shadow-lg"
                >
                    LinkedIn
                </a>
            </div>
            <RotatingFooterText />
        </footer>
    );
}