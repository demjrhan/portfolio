import React, {useRef, useState} from 'react';
import TechStack from "./TechStack.jsx";
import BackgroundBlobs from "./BackgroundGlobes.jsx";


const projects = [
    {
        id: 1,
        category: 'QUALITY ASSURANCE',
        title: 'QA Practice Suite',
        description: 'A hands-on QA portfolio project featuring manual test cases, Jira bug reports, API validation with Postman, and basic Selenium (Java) automation scripts for a sample web app.',
        imageUrl: 'https://i.pinimg.com/1200x/4b/cd/c7/4bcdc7631b0f4b9e31cd5efa3334c999.jpg',
    },
    {
        id: 2,
        category: 'SOCIAL MEDIA',
        title: 'FLY',
        description: 'A social platform where users can share posts, engage with others through reactions, and interact within a moderated community.',
        imageUrl: 'https://i.pinimg.com/736x/56/35/7d/56357d778607f48fa6139a8acbfbd191.jpg',
    },
    {
        id: 3,
        category: 'MEDIA CONTENT STREAMING',
        title: 'Vaultive',
        description: 'A unified platform that brings together movies, documentaries, and short films from multiple streaming services, making it easy for users to discover and watch content in one place.',
        imageUrl: 'https://i.pinimg.com/736x/f1/47/59/f14759a13a81007765f43131226aa3fc.jpg',
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
        <section id="projects" className="relative h-max pt-12 pb-5 items-center">
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
            <TechStack/>
        </section>
    );
}
