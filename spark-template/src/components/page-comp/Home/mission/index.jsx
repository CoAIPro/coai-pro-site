import React from "react";
import { FaArrowRight } from "react-icons/fa";
import cardImg from "../../../../assets/images/dashboard-card.png";
import peopleImg from "../../../../assets/images/people.png";


const Mission = () => {

    const contents = [
        { id: 1, title: "90%", text: "Requests resolved within 24h" },
        { id: 2, title: "1.2K+", text: "Requests resolved within 24h" },
        { id: 3, title: "2.9Days", text: "Avg .resolution time" },
    ];

    return (
        <section className="py-10 lg:py-20">
            <h2 className="section-title">Our Mission</h2>
            <p className="max-w-5xl mx-auto text-center pb-8">Spark is where bold ideas come to life. Whether you're a student, entrepreneur, or creative mind, Spark gives you a clean space to share, shape, and pitch your next big thing</p>
            <button className="button !bg-[#2A2C38] !text-primary !text-sm mx-auto flex">
                Learn More
                <FaArrowRight className="mt-1" />
            </button>

            <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-8">
                <div className="lg:row-span-3 order-3 lg:order-1">
                    <img src={cardImg} className="w-full h-full object-cover rounded-2xl" alt="card" />
                </div>
                <div className="lg:row-span-2 order-1 lg:order-2 px-16 py-20 bg-[#191919] text-light rounded-2xl flex flex-col justify-between">
                    {
                        contents?.map(content =>
                            <div key={content?.id}>
                                <h3 className="text-xl lg:text-4xl font-secondary font-semibold">{content?.title}</h3>
                                <p className="text-[#8F9BB7] pt-3">{content?.text}</p>
                            </div>
                        )
                    }
                </div>
                <div className="order-2 lg:order-3 bg-[#191919] text-light p-16 rounded-2xl flex flex-col justify-center gap-8">
                    <img src={peopleImg} className="max-w-64 object-contain" alt="people" />
                    <p className="text-[#8F9BB7]">We Already work on these peoples ideas</p>
                </div>
            </div>

        </section>
    );
};

export default Mission;