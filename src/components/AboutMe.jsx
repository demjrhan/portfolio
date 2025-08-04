export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative w-full bg-black overflow-hidden flex items-center justify-center min-h-[50vh] sm:min-h-[50vh] lg:min-h-[50vh] py-10 px-4"
        >
            <h1 className="absolute bottom-0 right-0 text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] font-extrabold text-white/5 select-none leading-[0.8] text-right">
                YALCIN<br />DEMIRHAN
            </h1>

            <div className="relative flex flex-col items-center text-center max-w-3xl sm:max-w-4xl lg:max-w-5xl px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative z-10 mb-6">
                    Always curious, always learning.
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                    I’m
                    <span
                        className="text-transparent bg-clip-text font-semibold bg-gradient-to-r
                        from-yellow-400 via-yellow-200 to-yellow-500 [text-shadow:1px_1px_2px_rgba(255,215,0,0.5)]"> Demirhan Yalcin</span>
                    , a Computer Science student in my final year at PJATK.
                    Currently exploring <span className="text-white">Android development with Jetpack Compose</span> while also expanding my skills in Quality Assurance, including manual testing, bug reporting, and test automation.
                    I love solving problems, collaborating with others, and learning something new every day.
                </p>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 italic">
                    Located in <span className="text-white font-semibold">Warsaw, Poland</span>
                </p>
            </div>
        </section>
    );
}
