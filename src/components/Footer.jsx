import React from "react";
import RotatingFooterText from "./FooterText.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-1">
                <SocialLinks/>
            <RotatingFooterText />
        </footer>
    );
}