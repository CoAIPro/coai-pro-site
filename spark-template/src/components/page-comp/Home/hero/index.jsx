import React from "react";
import dashboardImg from "../../../../assets/images/dashbaord.jpg";


const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="container">
                <div className="relative z-10">

                    {/* content */}
                    <div className="flex flex-col items-center py-8 lg:py-20">
                        <h1 className="text-2xl lg:text-7xl font-secondary">Clean. Simple. <span className="text-primary font-bold">Focused</span></h1>
                        <p className="text-base lg:text-4xl py-4 lg:py-10 max-w-[900px] mx-auto text-center">Present your idea with clarityPresent your idea with clarity</p>
                        <div className="space-x-3">
                            <button className="bg-dark bg-gradient-to-b from-dark to-primary/20 dark:bg-[#2A2C38] dark:bg-gradient-to-b dark:from-[#2A2C38] dark:to-[#2A2C38] text-light px-5 py-2 rounded-full">
                                Get Started
                            </button>
                            <button>
                                How Its Work?
                            </button>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-5 lg:mx-auto">
                        <img src={dashboardImg} className="w-full h-full object-contain" alt="dashboard" />
                    </div>

                </div>
            </div>

            {/* blurred circle overlay */}
            <div className="absolute -bottom-[110%] lg:-bottom-[100%] inset-0 flex justify-center items-end -z-10">
                <div className="w-screen h-[480px] md:h-[800px] lg:w-[1200px] lg:h-[1200px] bg-primary rounded-full blur-[40px] lg:blur-[70px] opacity-90"></div>
            </div>

        </section>
    );
};

export default Hero;

