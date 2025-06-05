// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from "react";

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

const HowItWroks = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 variants={itemVariants} className="section-title">How It Works</motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">3 Easy steps to generate you website</motion.p>
        </motion.section>
    );
};

export default HowItWroks;