import {motion, useInView} from "framer-motion";
import React, {useRef} from "react";

export default function AboutMe(){

    const ref = useRef(null);
    const inView = useInView(ref, {margin: '-50px'});

    return (
        <motion.section
            ref={ref}
            className="relative w-full h-100 bg-black overflow-hidden flex items-center justify-center"
            animate={{scaleY: inView ? 1 : 0}}
            transition={{type: 'spring', stiffness: 80, damping: 12}}
            style={{transformOrigin: 'center'}}
        >
            {/*  content */}
        </motion.section>
    );
}