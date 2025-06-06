import React from "react";
import { FaArrowRight } from "react-icons/fa";


const About = () => {
    return (
        <section className="py-10 lg:py-20">
            <h2 className="section-title">What  is  Sparks?</h2>
            <p className="max-w-5xl mx-auto text-center pb-5 lg:pb-10">Spark is where bold ideas come to life. Whether you're a student, entrepreneur, or creative mind, Spark gives you a clean space to share, shape, and pitch your next big thing</p>
            <button className="button dark:!bg-[#2A2C38] !text-primary mx-auto">
                Learn More
                <FaArrowRight className="mt-[2px]" />
            </button>
        </section>
    );
};

export default About;