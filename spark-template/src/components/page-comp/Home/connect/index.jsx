import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Connect = () => {
    return (
        <section className="bg-[#191919] text-light p-5 lg:p-10 flex justify-between items-center gap-x-3 rounded-2xl mb-10 lg:mb-20">
            <div>
                <h2 className="text-[10px] lg:text-xl pb-3">Need Something More Tailored?</h2>
                <p className="max-w-2xl text-[#8F9BB7] text-[8px] lg:text-base">Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</p>
            </div>
            <button className="!w-44 lg:!w-fit !justify-center !px-3 lg:!px-5 button !bg-[#2A2C38] !text-primary text-xs lg:text-base">
                Learn More
                <FaArrowRight className="mt-1" />
            </button>
        </section>
    );
};

export default Connect;