
export default function Landing() {
    return (
        <section className="relative w-full h-screen  overflow-hidden">

            <section className="relative w-full h-screen  overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 z-0"></div>

                <div className="absolute top-0 left-0 w-full h-full z-10 ">
                    <h1 className="accent-gray-500 font-extrabold text-[19.5vw] leading-none whitespace-nowrap text-center">
                        WELCOME
                    </h1>

                    <div className="mt-6 flex flex-col items-center gap-4 pt-35">
                        <a
                            href="#projects"
                            className="text-3xl font-semibold text-black transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:drop-shadow-lg"
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            className="text-3xl font-semibold text-gray-800 transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:drop-shadow-lg"
                        >
                            About Me
                        </a>
                        <a
                            href="#techstack"
                            className="text-3xl font-semibold text-gray-700 transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:drop-shadow-lg"
                        >
                            Tech Stack
                        </a>
                    </div>


                </div>
            </section>
        </section>
    );
}