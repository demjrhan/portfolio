import { motion } from "framer-motion";
import React from "react";

export default function BackgroundBlobs() {
    const transition = {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
    };

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Top-Left Blob */}
            <motion.div
                className="absolute top-[5%] left-[5%] w-[350px] h-[350px] bg-gray-700 rounded-full filter blur-[120px] opacity-35 mix-blend-multiply"
                animate={{
                    x: [0, 40, 60, -30, -50, 0],
                    y: [0, -30, 40, 50, -20, 0],
                    scale: [1, 1.05, 0.95, 1.1, 1],
                }}
                transition={{ ...transition, duration: 26 }}
            />

            {/* Top-Right Blob */}
            <motion.div
                className="absolute top-[5%] right-[5%] w-[400px] h-[400px] bg-gray-600 rounded-full filter blur-[130px] opacity-30 mix-blend-multiply"
                animate={{
                    x: [0, -50, -70, 40, 20, 0],
                    y: [0, -40, 20, 60, -30, 0],
                    scale: [1, 1.1, 1, 0.9, 1.05, 1],
                }}
                transition={{ ...transition, duration: 28 }}
            />

            {/* Bottom-Left Blob */}
            <motion.div
                className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-black rounded-full filter blur-[140px] opacity-30 mix-blend-multiply"
                animate={{
                    x: [0, 60, 30, -50, -20, 0],
                    y: [0, 50, 70, -40, -20, 0],
                    scale: [1, 1.05, 1.1, 0.95, 1, 1],
                }}
                transition={{ ...transition, duration: 30 }}
            />

            {/* Bottom-Right Blob */}
            <motion.div
                className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] bg-gray-800 rounded-full filter blur-[120px] opacity-35 mix-blend-multiply"
                animate={{
                    x: [0, -40, -60, 30, 50, 0],
                    y: [0, 60, 40, -50, -30, 0],
                    scale: [1, 1.1, 0.9, 1.05, 1],
                }}
                transition={{ ...transition, duration: 32 }}
            />

            {/* Middle Blob */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-500 rounded-full filter blur-[160px] opacity-25 mix-blend-multiply"
                animate={{
                    x: [0, 30, -40, 50, -30, 0],
                    y: [0, -20, 30, -40, 20, 0],
                    scale: [1, 1.1, 1, 0.95, 1.05, 1],
                }}
                transition={{ ...transition, duration: 34 }}
            />
        </div>
    );
}
