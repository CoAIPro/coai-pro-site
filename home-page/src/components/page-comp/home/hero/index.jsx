// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import arrow from "../../../../assets/images/hero-arrow.png";
import line from "../../../../assets/images/lines.png";
import waveImg from "../../../../assets/images/wave.png";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Hero = () => {

    return (
        <motion.section 
            className="pt-12 lg:pt-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                variants={itemVariants}
                className="w-fit mx-auto flex justify-center items-center gap-3 border border-transparent rounded-full bg-gradient-to-r from-[#8BBEF7] to-[#F598F2] bg-clip-border"
            >
                <div className="flex items-center gap-1 bg-light dark:bg-dark rounded-full px-1 py-[3px]">
                    <img src={waveImg} className="w-6 object-contain" alt="wave" />
                    <h3 className="text-xs 2xl:text-sm pr-1">Welcome to CoAI.Pro</h3>
                </div>
            </motion.div>

            <motion.h1 
                variants={itemVariants}
                className="max-w-4xl mx-auto text-center text-3xl lg:text-6xl font-secondary pt-10 lg:pt-16 pb-6 lg:pb-10"
            >
                Build Beautiful Sites <span className="text-primary">Instantly</span> with <span className="text-primary">AI</span> Templates
            </motion.h1>

            <motion.p 
                variants={itemVariants}
                className="max-w-[720px] mx-auto text-center text-sm lg:text-base"
            >
                Explore industry-ready designs or build your own from the ground up — with AI that helps you design, refine, and convert
            </motion.p>

            <motion.div 
                variants={itemVariants}
                className="w-fit mx-auto relative pt-5 lg:pt-10"
            >
                <button className="button mx-auto !px-6 !py-4">
                    Start Free
                    <FaArrowRight />
                </button>

                <div className="hidden lg:block absolute top-14 -right-[200px]">
                    <img src={arrow} className="w-12 object-contain" alt="arrow vector" />
                    <p className="text-[10px] lg:text-xs pt-2 pl-3">No credit card. Launch in 60 sec</p>
                </div>
            </motion.div>

            <motion.img 
                variants={itemVariants}
                src={line} 
                className="w-7 object-contain mx-auto py-6" 
                alt="line" 
            />

        </motion.section>
    );
};

export default Hero;