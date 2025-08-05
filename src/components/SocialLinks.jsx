import {FaGithub, FaLinkedin, FaDownload} from "react-icons/fa";

export default function SocialLinks() {
    return (
        <section
            id="about"
            className="relative w-full overflow-hidden flex items-center justify-center min-h-[8vh] py-10 px-4"
        >
            <div className="absolute top-0 left-0 w-screen bg-black text-white py-1 shadow-lg">
                <div className=" mx-auto px-4 flex items-center gap-6">
                    <a
                        href="https://github.com/demjrhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 transition-all duration-300 ease-in-out hover:animate-pulse"
                    >
                        <FaGithub className="text-white" />
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500">
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/in/demjrhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 transition-all duration-300 ease-in-out hover:animate-pulse"
                    >
                        <FaLinkedin className="text-white" />
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500">
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href="/portfolio/files/Demirhan_Yalcin_Resume.pdf"
                        download
                        className="flex items-center gap-1 transition-all duration-300 ease-in-out hover:animate-pulse"
                    >
                        <FaDownload className="text-white" />
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-lime-500">
                            Resume
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
