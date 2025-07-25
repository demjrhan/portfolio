export default function Landing() {
    return (
        <section
            className="relative w-full h-screen overflow-hidden">

            <div
                className="absolute top-15 left-15 right-15 bottom-15 overflow-hidden grayscale"
                style={{
                    backgroundImage: "url('public/images/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            ></div>

            <h1
                className="absolute  top-20 right-0 transform -translate-x-1/2 font-extrabold leading-none text-white text-center"
                style={{
                    writingMode: "vertical-rl",
                    fontSize: "17vh",
                    lineHeight: "1",
                    margin: "0"
                }}
            >
                WELCOME
            </h1>



            <div className="absolute top-15 left-0 w-full h-[3px] bg-gray-600"></div>
            <div className="absolute top-0 left-15 h-full w-[3px] bg-gray-600"></div>
            <div className="absolute bottom-15 left-0 w-full h-[3px] bg-gray-600"></div>
            <div className="absolute top-0 right-15 h-full w-[3px] bg-gray-600"></div>


            <div className="relative flex flex-row items-center gap-10 py-3 px-20 z-10">
                <a
                    href="#about"
                    className="text-2xl font-semibold text-black transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:drop-shadow-lg">
                    About Me
                </a>
                <a
                    href="#projects"
                    className="text-2xl font-semibold text-black transition transform hover:scale-110 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-300 hover:drop-shadow-lg">
                    Projects
                </a>
            </div>
        </section>
    );
}
