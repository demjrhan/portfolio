import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BOX_HEIGHT = '17vw';

const texts = [
    'CODE',
    '✸',
    'DESIGN',
    '✸',
    'DELIVER',
    '✸',
    'LET\'S BUILD SOMETHING GREAT',
];

export default function RotatingFooterText() {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    const updateWidth = () => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2);
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const content = texts.join(' \u00A0\u00A0\u00A0 ') + ' \u00A0\u00A0\u00A0 ';

    return (
        <section className="relative w-full my-2 bg-black overflow-hidden" style={{ height: BOX_HEIGHT }}>
            <div className="absolute inset-0 flex items-center z-10">
                <div
                    className="marquee whitespace-nowrap text-white font-extrabold leading-none"
                    style={{ fontSize: BOX_HEIGHT }}
                >
                    {Array(2).fill(content).join('')}
                </div>
            </div>
        </section>

    );
}
