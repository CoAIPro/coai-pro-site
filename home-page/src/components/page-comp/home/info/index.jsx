import React from "react";
import { FaArrowRight } from "react-icons/fa";
import aiIcon from "../../../../assets/icons/ai.png";
import fastIcon from "../../../../assets/icons/fast.png";
import modulerIcon from "../../../../assets/icons/moduler.png";
import responsiveIcon from "../../../../assets/icons/responsive.png";
import previewImg from "../../../../assets/images/info-img.png";


const Info = () => {

    const features = [
        {
            id: 1,
            icon: responsiveIcon,
            title: "Fully Responsive",
            desc: "Look perfect on mobile, tablet, and desktop.",
            bg: "bg-[#D1ECFD]",
        },
        {
            id: 2,
            icon: fastIcon,
            title: "Lightning Fast",
            desc: "Optimized code and super-fast load times.",
            bg: "bg-[#D6F4F2]",
        },
        {
            id: 3,
            icon: modulerIcon,
            title: "Modular & Clean",
            desc: "Easily tweak and customize for your brand.",
            bg: "bg-[#EEDCFC]",
        },
        {
            id: 4,
            icon: aiIcon,
            title: "Backed by AI",
            desc: "Smart suggestions and layouts that save time.",
            bg: "bg-[#DFF8E7]",
        },
    ];

    return (
        <section className="container mx-auto py-16 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-28">

            {/* Left content */}
            <div className="flex flex-col justify-between gap-10">
                <h2 className="text-2xl lg:text-4xl">
                    <p>Every site, fast and </p>
                    <p>
                        flawless
                        <span className="text-primary"> — everywhere.</span>
                    </p>
                </h2>

                <div className="space-y-4">
                    {features.map((item) => (
                        <div key={item.id} className={`flex items-center gap-3 p-4 rounded-xl ${item.bg}`}>
                            <img src={item?.icon} className="w-7 object-contain" alt={item?.title || ""} />
                            <div>
                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="button !py-4">
                    Let's Create
                    <FaArrowRight />
                </button>
            </div>

            {/* Right image grid */}
            <div className="">
                <img
                    src={previewImg}
                    alt="site preview"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </section>
    );
};

export default Info;
