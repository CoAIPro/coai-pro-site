import React from "react";
import EcoChargeImg from "../../../../assets/images/featured/EcoCharge.png";
import MindMeldImg from "../../../../assets/images/featured/MindMeld.png";
import StudySyncImg from "../../../../assets/images/featured/StudySync.png";
import ByteBitesImg from "../../../../assets/images/featured/ByteBites.png";
import SkillHatchImg from "../../../../assets/images/featured/SkillHatch.png";
import CrowdFundrImg from "../../../../assets/images/featured/CrowdFundr.png";
import { FaArrowRight } from "react-icons/fa";


const Featured = () => {


    const cards = [
        {id: 1, title: "EcoCharge", icon: EcoChargeImg, text: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",},
        {id: 2, title: "MindMeld", icon: MindMeldImg, text: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",},
        {id: 3, title: "StudySync", icon: StudySyncImg, text: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",},
        {id: 4, title: "ByteBites", icon: ByteBitesImg, text: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",},
        {id: 5, title: "SkillHatch", icon: SkillHatchImg, text: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",},
        {id: 6, title: "CrowdFundr", icon: CrowdFundrImg, text: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",},
    ];


    return (
        <section>
            <h1 className="section-title">Featured Sparks</h1>
            <p className="max-w-[1330px] mx-auto text-center">Spark is where bold ideas come to life. Whether you're a student, entrepreneur, or creative mind, Spark gives you a clean space to share, shape, and pitch your next big thing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 pt-7 lg:pt-14">
                {
                    cards?.map(card =>
                        <div key={card?.id} className="bg-[#191919] p-10 rounded-2xl text-light">
                            <img src={card?.icon} className="max-w-20 object-contain" alt="icon" />
                            <h2 className="text-xl lg:text-2xl font-semibold font-secondary pt-7">{card?.title}</h2>
                            <p className="text-[#8F9BB7] pt-3 pb-7">{card?.text}</p>
                            <button className="button !bg-[#2A2C38] !text-primary !text-sm">
                                Learn More
                                <FaArrowRight className="mt-1" />
                            </button>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Featured;