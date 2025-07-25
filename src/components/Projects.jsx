import React, {useRef, useState} from 'react';
import {motion} from "framer-motion";


const projects = [
    {
        id: 1,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: 'https://i.pinimg.com/736x/99/d6/c3/99d6c37ea8db11ac8148deede4f67407.jpg',
    },
    {
        id: 2,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: 'https://i.pinimg.com/736x/78/6e/c9/786ec95ec685685e7d3ff3e1140e56ca.jpg',
    },
    {
        id: 3,
        category: 'Category',
        title: 'Title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: 'https://i.pinimg.com/736x/99/d6/c3/99d6c37ea8db11ac8148deede4f67407.jpg',
    },
];

export default function Projects() {

    const [hoveredId, setHoveredId] = useState(null);
    const carouselRef = useRef(null);
    const scroll = (direction) => {
        if (!carouselRef.current) return;
        const cardWidth = 400;
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative h-max py-12 pb-10 items-center">
            <BackgroundBlobs/>

            <div className="ml-auto pl-6 w-full">
                <div className="flex items-center gap-5 mb-5 pl-2">
                    <h2 className="text-5xl font-extrabold ">Projects</h2>
                    <div className="flex space-x-2  pt-1">
                        <button
                            onClick={() => scroll('left')}
                            className="w-8 h-8 bg-white rounded-full shadow hover:shadow-md transition"
                            aria-label="Scroll Left"
                        >◀
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-8 h-8 bg-white rounded-full shadow hover:shadow-md transition"
                            aria-label="Scroll Right"
                        >▶
                        </button>
                    </div>
                </div>

                <div
                    ref={carouselRef}
                    className="flex space-x-8 overflow-x-auto overflow-visible hide-scrollbar pl-2 py-3"
                >
                    {projects.map((a) => {
                        const isOther = hoveredId !== null && hoveredId !== a.id;
                        return (
                            <article
                                key={a.id}
                                onMouseEnter={() => setHoveredId(a.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`
                    flex-none w-96 bg-white rounded-xl
                    transition-transform duration-200
                    hover:shadow-[0_4px_10px_rgba(111,78,55,0.25)]
                    hover:scale-102

                    filter
                    ${isOther ? 'blur-sm' : 'blur-none'}
                  `}
                            >
                                <img
                                    src={a.imageUrl}
                                    alt={a.title}
                                    className="w-full h-44 object-cover rounded-t-xl"
                                />
                                <div className="p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        {a.category}
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-tight">
                                        {a.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-600">
                                        {a.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}

function BackgroundBlobs() {
    const blobTransition = {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 12,
        ease: 'easeInOut',
    };

    return (
        <>
            <motion.div
                className="hidden md:block absolute bottom-[5%] left-[5%] w-[300px] h-[300px] bg-[#6F4E37] rounded-full filter blur-3xl opacity-35 -z-10"
                animate={{
                    x: [0, -30, 20, -15, 0],
                    y: [0, -10, 15, -5, 0],
                    rotate: [0, 15, -10, 5, 0],
                }}
                transition={blobTransition}
            />

            <motion.div
                className="hidden md:block absolute bottom-[5%] left-[5%] w-[300px] h-[300px] bg-[#6F4E37] rounded-full filter blur-3xl opacity-35 -z-10"
                animate={{
                    x: [0, -30, 20, -15, 0],
                    y: [0, -10, 15, -5, 0],
                    rotate: [0, 15, -10, 5, 0],
                }}
                transition={blobTransition}
            />

            <motion.div
                className="hidden md:block absolute top-[10%] right-[30%] w-[350px] h-[350px] bg-yellow-900 rounded-full filter blur-3xl opacity-50 -z-10"
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
                className="hidden md:block absolute bottom-[15%] right-[10%] w-[250px] h-[250px] bg-amber-600 rounded-full filter blur-3xl opacity-25 -z-10"
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
                className="hidden md:block absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-blue-200 rounded-full filter blur-3xl opacity-45 -z-10"
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


