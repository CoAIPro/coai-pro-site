import React, { useState } from "react";
import LaunchPad from "../../../../assets/images/templates/LaunchPad.png";
import Delta from "../../../../assets/images/templates/Delta.png";
import Orbit from "../../../../assets/images/templates/Orbit.png";
import Shift from "../../../../assets/images/templates/Shift.png";
import Spark from "../../../../assets/images/templates/Spark.png";
import { FaPlus } from "react-icons/fa6";


const Templates = () => {

    const [activeItem, setActiveItem] = useState("All");

    const items = [
        { id: 1, label: "All" },
        { id: 2, label: "Startup" },
        { id: 3, label: "Personal" },
        { id: 4, label: "Landing" },
        { id: 5, label: "Portfolio" },
        { id: 5, label: "Sectioned" },
    ];

    const cards = [
        { id: 1, title: "LaunchPad", image: LaunchPad, text: "Instant startup identity  logo, tagline, subdomain. Launch in 60 seconds" },
        { id: 2, title: "Delta", image: Delta, text: "Consultant/service business page" },
        { id: 3, title: "Orbit", image: Orbit, text: "Personal site: bio, projects, contact" },
        { id: 4, title: "Shift", image: Shift, text: "Hero + logo-focused layout" },
        { id: 5, title: "Spark", image: Spark, text: "Minimal, clean one-pager" },
    ];

    return (
        <section className="py-10 lg:py-24">

            {/* btns */}
            <div className="bg-white dark:bg-black w-fit mx-auto p-2 rounded-full flex items-center gap-3">
                {
                    items?.map(item =>
                        <button key={item?.id} onClick={() => setActiveItem(item?.label)} className={`${activeItem == item?.label ? "bg-dark text-white" : "bg-transparent"} text-[10px] md:text-sm lg:text-base px-2 py-1 md:px-6 md:py-2 rounded-full duration-300`}>
                            {item?.label}
                        </button>
                    )
                }
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8 lg:pt-16">
                {
                    cards?.map(card =>
                        <div key={card?.id} className="relative p-[2px] rounded-2xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#3997FF] hover:to-[#F882F2]" >
                            <div className="bg-white dark:bg-black p-2 pb-5 rounded-2xl flex flex-col h-full border border-slate-200 group-hover:border-transparent">
                                <img src={card?.image} className="w-full object-cover rounded-2xl" alt={card?.title} />
                                <h3 className="text-secondary text-xl font-bold pt-3 pl-2">{card?.title}</h3>
                                <p className="pt-4 pb-3 text-[#9F9F9F] text-sm lg:text-lg pl-2">{card?.text}</p>
                                <div className="flex-1 flex items-end pl-2">
                                    <button className="text-dark dark:text-white px-5 py-2 bg-transparent hover:bg-gradient-to-r hover:from-[#3997FF] hover:to-[#F882F2] border border-slate-200 hover:text-white hover:border-transparent rounded-full duration-200 shadow-sm hover:shadow-none">
                                        Use {card?.title}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="p-[3px]">
                    <div className="w-full h-72 lg:h-full border border-slate-200 shadow-sm flex flex-col justify-center items-center gap-3 cursor-pointer rounded-2xl">
                        <div className="bg-[#D9D9D9] p-3 rounded-2xl text-2xl">
                            <FaPlus />
                        </div>
                        <p>Start From Scratch</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Templates;