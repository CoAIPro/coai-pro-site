import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";


const Plans = () => {

    const plans = [
        {
            title: "Free",
            price: "$0/mo",
            hiddenFees: true,
            note: "For individuals to test personal",
            features: [
                { name: "Name", available: true },
                { name: "Subdomain", available: true },
                { name: "Logo", available: false },
                { name: "Tagline", available: false },
                { name: "Save projects", available: false },
                { name: "Full brand", available: false },
                { name: "Download kit", available: false },
            ],
            button: "Get Started →",
            highlighted: false,
        },
        {
            title: "Pro",
            price: "$19/mo",
            hiddenFees: false,
            note: "For new startup and small work",
            features: [
                { name: "Name", available: true },
                { name: "Subdomain", available: true },
                { name: "Logo", available: true },
                { name: "Tagline", available: true },
                { name: "Save projects", available: true },
                { name: "Full brand", available: false },
                { name: "Download kit", available: false },
            ],
            button: "Get Started →",
            highlighted: true,
        },
        {
            title: "Starter Kit",
            price: "$49 one-time",
            hiddenFees: false,
            note: "For growing businesses",
            features: [
                { name: "Name", available: true },
                { name: "Subdomain", available: true },
                { name: "Logo", available: true },
                { name: "Tagline", available: true },
                { name: "Save projects", available: true },
                { name: "Full brand", available: true },
                { name: "Download kit", available: true },
            ],
            button: "Get Started →",
            highlighted: false,
            badge: "Popular"
        }
    ];


    return (
        <section className="py-10 lg:py-20">
            <h2 className="section-title">Choose a plan & start building your website</h2>
            <p className="section-subtitle">No code. No delays. Just pick a plan and launch with CoAI.Pro</p>

            <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                {
                    plans.map((plan, index) =>
                        <div key={index} className={`h-fit rounded-3xl border border-slate-200 hover:border-primary p-6 shadow-lg transition-all duration-300`}
                        >
                            <div className="flex items-center gap-1">
                                <h3 className="text-xl font-semibold text-[#7F7E7C] text-secondary">{plan.title}</h3>
                                {
                                    plan.badge &&
                                    <span className="text-xs bg-primary text-light rounded-full px-2 py-0.5 mt-1 inline-block">
                                        {plan.badge}
                                    </span>
                                }
                            </div>
                            <div className="flex items-center gap-2">
                                <p
                                    className={`text-xl ${index == 1 ? "lg:text-[32px]" : "lg:text-[26px]"} font-bold font-secondary my-2 ${index === 2
                                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                                        : "text-black"
                                        }`}
                                >
                                    {plan.price}
                                </p>
                                {
                                    !plan.hiddenFees &&
                                    <p className="text-sm text-[#949391]">(No hidden fees)</p>
                                }
                            </div>
                            <p className={`${index == 1 ? "lg:text-lg" : "lg:text-base"} text-sm text-[#7F7E7C] mb-6`}>{plan.note}</p>

                            <button className="button !w-full !justify-center mb-5">
                                Get Started
                                <FaArrowRight />
                            </button>

                            <ul className="text-sm text-left space-y-2 pt-3 border-t border-t-slate-200">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">

                                        {
                                            feature.available ?
                                                <FaCheckCircle className="text-[#8CF000]" /> : <FaCircleXmark className="text-red-600" />
                                        }

                                        <span className={`${index == 1 ? "lg:text-lg" : "lg:text-base"} text-[#949391] pl-3`}>{feature.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
            </div>
        </section>
    );
};

export default Plans;