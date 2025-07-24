import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// You can adjust this value to match your desired height (in vw or px)
const BOX_HEIGHT = '17vw'; // or '50px' if you prefer fixed px

const texts = [
    'THANK YOU FOR YOUR TIME',
    'SEE YOU NEXT TIME',
];

export default function RotatingText() {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    // Measure the scrolling content width
    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);

    const content = texts.join(' \u00A0\u00A0\u00A0 ') + ' \u00A0\u00A0\u00A0 ';
    const marqueeText = content + content;
    const scrollDuration = texts.length * 20;

    return (
        <section
            className="relative w-full bg-black overflow-hidden"
            style={{ height: BOX_HEIGHT }}
        >
            <div className="absolute inset-0 flex items-center z-10">
                <motion.div
                    ref={containerRef}
                    className="inline-block whitespace-nowrap text-white font-extrabold leading-none"
                    style={{ fontSize: BOX_HEIGHT }}
                    animate={{ x: [0, -width] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear',
                            duration: scrollDuration,
                        },
                    }}
                >
                    {marqueeText}
                </motion.div>
            </div>
        </section>
    );
}