import React, {useRef, useState} from 'react';
import TechStack from "./TechStack.jsx";
import BackgroundBlobs from "./BackgroundGlobes.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [{
    id: 1,
    category: 'QUALITY ASSURANCE',
    title: 'QA Practice Suite',
    description: 'A hands-on QA portfolio built to properly document my learning journey. After not maintaining past repositories, I’ve now started structuring my work professionally. Currently focused on manual testing with Jira, updating the repository daily with test cases, bug reports, and progress. Automation and API testing will follow.',
    imageUrl: '/images/1.jpg',
    tech: ['Java', 'Jira', 'Postman', 'Selenium', 'Swagger'],
    github: 'https://github.com/demjrhan/QA'
}, {
    id: 2,
    category: 'MEDIA CONTENT STREAMING',
    title: 'Vaultive',
    description: 'A unified platform that brings together movies, documentaries, and short films from multiple streaming services, making it easy for users to discover and watch content in one place.',
    imageUrl: '/images/2.jpg',
    tech: ['C#', 'ASP.NET', 'SQLite', 'Entity Framework', 'HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/demjrhan/Vaultive'
}, {
    id: 3,
    category: 'SOCIAL MEDIA',
    title: 'FLY',
    description: 'A social platform where users can share posts, engage with others through reactions, and interact within a moderated community.',
    imageUrl: '/images/3.jpg',
    tech: ['C#', 'ASP.NET', 'SQLite', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'REST API'],
    github: 'https://github.com/demjrhan/FLY'
},
    {
        id: 4,
        category: 'DATABASE DESIGN',
        title: 'BOXING CLUB',
        description: 'Relational database design using Microsoft SQL Server and Oracle SQL. Includes complex stored procedures and triggers to enforce business logic, automate workflows, and ensure data integrity.',
        imageUrl: '/images/4.jpg',
        tech: ['Microsoft SQL Server', 'Oracle SQL'],
        github: 'https://github.com/demjrhan/BOXING-CLUB'
    }];

export default function Projects() {
    const [hoveredId, setHoveredId] = useState(null);
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (!carouselRef.current) return;
        const card = carouselRef.current.querySelector("article");
        if (!card) return;
        const cardWidth = card.offsetWidth + 32;
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth'
        });
    };

    const handleClick = (project) => {
        if (project.github) {
            window.open(project.github, '_blank');
        }
    };

    return (
        <section id="projects" className="relative h-max  pb-5 items-center">
            <BackgroundBlobs/>
            <SocialLinks/>
            <div className="absolute top-10 right-4 text-sm px-1 py-1 z-10 font-semibold text-black">
                Thumbnails do not reflect the actual projects.
            </div>

            <div className="ml-auto pl-6 pt-8 w-full">
                <div className="flex items-center gap-5 mb-5 pl-2">
                    <h2 className="text-5xl font-extrabold">Projects</h2>
                    <div className="flex space-x-2 pt-1">
                        <button
                            onClick={() => scroll('left')}
                            className="w-9 h-9 rounded-full backdrop-blur-md bg-white/70 border border-gray-200 shadow-md hover:bg-white hover:scale-105 transition-all flex items-center justify-center"
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-9 h-9 rounded-full backdrop-blur-md bg-white/70 border border-gray-200 shadow-md hover:bg-white hover:scale-105 transition-all flex items-center justify-center"
                            aria-label="Scroll Right"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>
                <div
                    ref={carouselRef}
                    className="flex space-x-8 overflow-x-auto overflow-visible hide-scrollbar pl-2 py-3"
                >
                    {projects.map((project) => {
                        const isOther = hoveredId !== null && hoveredId !== project.id;
                        return (
                            <article
                                key={project.id}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleClick(project)}
                                className={`
                                    flex-none w-75 sm:w-72 md:w-80 lg:w-96 bg-white rounded-xl cursor-pointer
                                    transition-transform duration-200
                                    hover:shadow-[0_4px_10px_rgba(111,78,55,0.25)]
                                    hover:scale-102
                                    filter
                                    ${isOther ? 'blur-sm' : 'blur-none'}
                                `}
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-44 object-cover rounded-t-xl"
                                />
                                <div className="p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        {project.category}
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-600">
                                        {project.description}
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
