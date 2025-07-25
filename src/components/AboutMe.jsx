import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

export default function AboutMe() {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-10px", amount: 0.3 }); // adjust amount for trigger point
    const [hasOpened, setHasOpened] = useState(false);

    if (inView && !hasOpened) {
        setHasOpened(true);
    }

    return (
        <motion.section
            ref={ref}
            className="relative w-full bg-black overflow-hidden flex items-center justify-center"
            initial={{ height: 0 }}
            animate={{ height: hasOpened ? "40vh" : 0 }}
            transition={{ type: "spring", stiffness: 65, damping: 12 }}
        >
            <h1 className="absolute bottom-0 right-0 text-[19.5vw] font-extrabold text-white/5 select-none leading-[0.8] text-right">
                YALCIN<br />DEMIRHAN
            </h1>
            <div className="relative flex flex-col items-center text-center max-w-4xl px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10 mb-6">
                    Always curious, always learning.
                </h2>

                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    I’m <span className="text-purple-300 font-semibold">Demirhan Yalcin</span>, a Computer Science student in my final year at PJATK.
                    Currently exploring <span className="text-white">Android development with Jetpack Compose</span> and expanding my skills in <span className="text-white">C#, .NET, and SQL</span> for web projects.
                    I love solving problems, collaborating with others, and learning something new every day.
                </p>
            </div>
        </motion.section>
    );
}
