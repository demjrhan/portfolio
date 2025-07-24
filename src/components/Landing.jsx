export default function Landing() {
    return (
        <section className="relative w-full h-screen bg-white overflow-hidden">
            <section className="relative w-full h-screen bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 z-0"></div>
                <div
                    className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-50 z-0"/>
                <div
                    className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400 rounded-full filter blur-2xl opacity-40 z-0"/>

                <div className="absolute top-0 left-0 w-full z-10">
                    <h1 className="accent-gray-500 font-extrabold text-[19.5vw] leading-none whitespace-nowrap text-center">
                        WELCOME
                    </h1>
                </div>
            </section>
        </section>
    );
}