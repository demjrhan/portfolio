import React, {useRef, useState, useEffect} from 'react';
import TechStack from "./TechStack.jsx";
import BackgroundBlobs from "./BackgroundGlobes.jsx";

const projects = [{
    id: 1,
    category: 'QUALITY ASSURANCE',
    title: 'QA Practice Suite',
    description: 'A hands-on QA portfolio project featuring manual test cases, Jira bug reports, API validation with Postman, and basic Selenium (Java) automation scripts for a sample web app.',
    imageUrl: 'https://i.pinimg.com/1200x/4b/cd/c7/4bcdc7631b0f4b9e31cd5efa3334c999.jpg',
    details: 'Full details about QA Practice Suite will go here (test plans, automation demo, etc.)',
    features: ['Manual test cases covering core functionality', 'Bug tracking via Jira and structured reporting', 'API validation with Postman', 'Basic Selenium automation scripts for UI testing'],
    tech: ['Java', 'Jira', 'Postman', 'Selenium'],
    github: '',
    screenshots: []
}, {
    id: 2,
    category: 'MEDIA CONTENT STREAMING',
    title: 'Vaultive',
    description: 'A unified platform that brings together movies, documentaries, and short films from multiple streaming services, making it easy for users to discover and watch content in one place.',
    imageUrl: 'https://i.pinimg.com/736x/f1/47/59/f14759a13a81007765f43131226aa3fc.jpg',
    details: 'Built a platform that aggregates movies, documentaries, and short films from services like Netflix, Disney+, and Apple TV into one accessible interface.',
    features: ['Aggregates content from Netflix, Disney+, Apple TV', 'User authentication & secure data handling', 'REST API for smooth client-server communication', 'Frontend designed for responsiveness and ease of use'],
    tech: ['C#', 'ASP.NET', 'SQLite', 'Entity Framework', 'HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/demjrhan/Vaultive',
    screenshots: ['https://github.com/demjrhan/Vaultive/blob/main/Documentation/home.png?raw=true', 'https://github.com/demjrhan/Vaultive/blob/main/Documentation/movies.png?raw=true', 'https://github.com/demjrhan/Vaultive/blob/main/Documentation/streaming_services.png?raw=true', 'https://github.com/demjrhan/Vaultive/blob/main/Documentation/details.png?raw=true', 'https://github.com/demjrhan/Vaultive/blob/main/Documentation/details_review.png?raw=true',]
}, {
    id: 3,
    category: 'SOCIAL MEDIA',
    title: 'FLY',
    description: 'A social platform where users can share posts, engage with others through reactions, and interact within a moderated community.',
    imageUrl: 'https://i.pinimg.com/736x/56/35/7d/56357d778607f48fa6139a8acbfbd191.jpg',
    details: 'Developed a social media platform to enhance user interaction through posting, liking, and browsing shared content, with admin capabilities for management and moderation.',
    features: ['Post creation, likes, and content browsing', 'Admin tools for moderation & user management', 'Authentication, pagination & structured data access', 'Built with C# ASP.NET backend & REST APIs'],
    tech: ['C#', 'ASP.NET', 'SQLite', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'REST API'],
    github: 'https://github.com/demjrhan/FLY',
    screenshots: ['https://github.com/demjrhan/FLY/blob/main/Images/Welcome.png?raw=true', 'https://github.com/demjrhan/FLY/blob/main/Images/AddPost.png?raw=true', 'https://github.com/demjrhan/FLY/blob/main/Images/Admin_Welcome.png?raw=true',]

},

];

export default function Projects() {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";  
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);


    const scroll = (direction) => {
        if (!carouselRef.current) return;
        const cardWidth = 400;
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth',
        });
    };

    return (<section id="projects" className="relative h-max pt-12 pb-5 items-center">
        <BackgroundBlobs/>

        <div className="ml-auto pl-6 w-full">
            <div className="flex items-center gap-5 mb-5 pl-2">
                <h2 className="text-5xl font-extrabold ">Projects</h2>
                <div className="flex space-x-2 pt-1">
                    <button
                        onClick={() => scroll('left')}
                        className="w-8 h-8 bg-white rounded-full shadow hover:shadow-md transition"
                        aria-label="Scroll Left"
                    >
                        ◀
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-8 h-8 bg-white rounded-full shadow hover:shadow-md transition"
                        aria-label="Scroll Right"
                    >
                        ▶
                    </button>
                </div>
            </div>

            <div
                ref={carouselRef}
                className="flex space-x-8 overflow-x-auto overflow-visible hide-scrollbar pl-2 py-3"
            >
                {projects.map((project) => {
                    const isOther = hoveredId !== null && hoveredId !== project.id;
                    return (<article
                        key={project.id}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => setSelectedProject(project)}
                        className={`
                                    flex-none w-80 sm:w-85 md:w-96 bg-white rounded-xl cursor-pointer
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
                    </article>);
                })}
            </div>
        </div>

        {selectedProject && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div
                    className="absolute inset-0"
                    onClick={() => setSelectedProject(null)}
                />

                <div
                    className="relative bg-white rounded-2xl shadow-2xl max-w-6xl h-[90%] overflow-y-auto animate-fadeSlide p-0 z-10 flex flex-col">


                    <div className="p-8 flex flex-col gap-6 flex-1">

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
                                {selectedProject.details}
                            </p>
                        </div>

                        {selectedProject.tech && selectedProject.tech.length > 0 && (<div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech, index) => (<span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                                >
                  {tech}
                </span>))}
                            </div>
                        </div>)}

                    </div>
                    {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (<div
                        className="relative flex-1 flex flex-col items-center justify-center bg-gray-50 rounded-b-2xl p-6">
                        <div className="relative w-full max-w-7xl aspect-video">
                            <img
                                src={selectedProject.screenshots[currentIndex]}
                                alt="Main Screenshot"
                                className="w-full h-full object-cover rounded-xl shadow-lg transition duration-500"
                            />

                        </div>

                        <div className="flex gap-2 mt-4">
                            {selectedProject.screenshots.map((shot, idx) => (<img
                                key={idx}
                                src={shot}
                                alt={`Screenshot ${idx}`}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-16 h-10 rounded-md object-cover cursor-pointer transition 
            ${idx === currentIndex ? 'ring-2 ring-gray-900' : 'opacity-60 hover:opacity-100'}`}
                            />))}
                        </div>
                    </div>)}
                </div>


            </div>)}


        <TechStack/>
    </section>);
}
