import {motion} from "framer-motion";
import React from "react";

export default function BackgroundBlobs() {
    const blobTransition = {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 12,
        ease: 'easeInOut',
    };

    return (
        <>
            <motion.div
                className="hidden md:block absolute bottom-[5%] left-[5%] w-[300px] h-[300px] bg-gray-500 rounded-full filter blur-3xl opacity-35 -z-10"
                animate={{
                    x: [0, -30, 20, -15, 0],
                    y: [0, -10, 15, -5, 0],
                    rotate: [0, 15, -10, 5, 0],
                }}
                transition={blobTransition}
            />

            <motion.div
                className="hidden md:block absolute bottom-[5%] left-[5%] w-[300px] h-[300px] bg-gray-500 rounded-full filter blur-3xl opacity-35 -z-10"
                animate={{
                    x: [0, -30, 20, -15, 0],
                    y: [0, -10, 15, -5, 0],
                    rotate: [0, 15, -10, 5, 0],
                }}
                transition={blobTransition}
            />

            <motion.div
                className="hidden md:block absolute top-[10%] right-[30%] w-[350px] h-[350px] bg-gray-500 rounded-full filter blur-3xl opacity-50 -z-10"
                animate={{
                    x: [0, 25, -20, 10, 0],
                    y: [0, 20, -15, 5, 0],
                    rotate: [0, -20, 10, -5, 0],
                }}
                transition={{
                    ...blobTransition,
                    duration: 14,
                }}
            />

            <motion.div
                className="hidden md:block absolute bottom-[15%] right-[10%] w-[250px] h-[250px] bg-gray-500 rounded-full filter blur-3xl opacity-25 -z-10"
                animate={{
                    x: [0, 10, -10, 0],
                    y: [0, 15, -10, 0],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    ...blobTransition,
                    duration: 12,
                }}
            />

            <motion.div
                className="hidden md:block absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-gray-500 rounded-full filter blur-3xl opacity-45 -z-10"
                animate={{
                    x: [0, -15, 15, 0],
                    y: [0, -20, 10, 0],
                    rotate: [0, -15, 15, 0],
                }}
                transition={{
                    ...blobTransition,
                    duration: 16,
                }}
            />
        </>
    );
}