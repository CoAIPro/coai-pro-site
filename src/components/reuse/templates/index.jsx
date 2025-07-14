import { cards, templateItemsMenu } from "@/data/templateData";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Templates = () => {

    const [activeItem, setActiveItem] = useState("All");

    return (
        <section className="py-10 lg:pt-14">
           <div className="container mx-auto">
                <div className="flex items-center gap-3 bg-white dark:bg-[#2A2C38] mx-auto p-2 rounded-full w-fit shadow-[0px_26px_36.2px_0px_#3997FF1A]">
                    {
                        templateItemsMenu?.map(item =>
                            <button key={item?.id} onClick={() => setActiveItem(item?.label)} className={`${activeItem == item?.label ? "bg-dark text-white" : "bg-transparent"} text-[10px] md:text-sm lg:text-base px-2 py-1 md:px-6 md:py-2 rounded-full duration-300`}>
                                {item?.label}
                            </button>
                        )
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8 lg:pt-16">
                    {
                        cards?.map(card =>
                            <div key={card?.id} className="relative p-[2px] rounded-2xl transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#3997FF] hover:to-[#F882F2] shadow-[0px_26px_27px_0px_#A791D217]">
                                <div className="bg-white dark:bg-[#2A2C38] p-2 pb-5 rounded-2xl flex flex-col h-full border border-slate-200 dark:border-[#644E6333] group-hover:border-transparent">
                                    <img src={card?.image} className="w-full object-cover rounded-2xl" alt={card?.title} />
                                    <h3 className="text-secondary text-xl font-medium pt-5 pl-2">{card?.title}</h3>
                                    <p className="pt-4 text-[#9F9F9F] text-sm lg:text-lg pl-2">{card?.text}</p>
                                    <div className="flex-1 pl-2 pt-3">
                                        <button className="flex items-center justify-center gap-3 text-dark dark:text-white px-5 py-2 bg-transparent hover:bg-gradient-to-r hover:from-[#3997FF] hover:to-[#F882F2] border border-slate-200 dark:border-black hover:text-white hover:border-transparent rounded-full duration-200 shadow-sm hover:shadow-none dark:bg-black dark:shadow-darkBtn dark:hover:border-none">
                                            Use {card?.title} <FaArrowRight />
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
           </div>

        </section>
    );
};

export default Templates;