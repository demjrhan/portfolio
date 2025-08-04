export default function TechStack() {
    const techs = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", size: 45 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#", size: 45 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", size: 45 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", size: 40 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".NET", size: 40 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML", size: 40 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS", size: 40 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg", alt: "JavaFX", size: 40 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", alt: "Oracle SQL", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", alt: "SQLite", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", alt: "Postman", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", alt: "Selenium", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", alt: "Jira", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", alt: "Maven", size: 38 },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", alt: "Swagger", size: 38 },

    ];

    return (
        <div id="techstack" className="relative w-full py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-fixed bg-bottom bg-transparent"></div>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 shadow-md rounded-lg hover:shadow-lg transition-all"
                    >
                        <div className="flex-shrink-0 p-1.5 sm:p-2 bg-white rounded-md shadow-sm">
                            <img
                                src={tech.src}
                                alt={tech.alt}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                            />
                        </div>

                        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                            {tech.alt}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
