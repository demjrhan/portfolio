export default function Landing() {
    return (
        <section
            className="relative w-full h-screen overflow-hidden">

            <h1
                className="absolute  top-[30px] left-[32px] font-extrabold leading-none text-gray-950 text-center"
                style={{
                    fontSize: "19vw",
                    lineHeight: "1",
                    margin: "0"
                }}
            >
                WELCOME
            </h1>
            <div
                className="absolute top-25 left-25 right-25 bottom-25 overflow-hidden">
                <div className="h-full w-full "  style={{
                    backgroundImage: "url('https://i.pinimg.com/1200x/6e/1c/f5/6e1cf59d9cbf88ac95f25ad69b84c0c9.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}></div>
                <div className="absolute top-[-70px] left-[-70px] flex flex-col items-end">
                    <h1
                        className="font-extrabold leading-none text-white text-center"
                        style={{
                            fontSize: "19vw",
                            lineHeight: "1",
                            margin: "0"
                        }}
                    >
                        WELCOME
                    </h1>

                    <div className="flex flex-col items-end gap-5 px-10">
                        <a
                            href="#about"
                            className="text-2xl font-semibold text-white transition transform hover:scale-110"
                        >
                            About Me
                        </a>
                        <a
                            href="#projects"
                            className="text-2xl font-semibold text-white transition transform hover:scale-110"
                        >
                            Projects
                        </a>
                    </div>


                </div>
            </div>




        </section>
    );
}
