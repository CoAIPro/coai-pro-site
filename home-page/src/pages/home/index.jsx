import React from "react";
import Hero from "../../components/page-comp/home/hero";
import HowItWroks from "../../components/page-comp/home/how-it-works";
import Templates from "../../components/page-comp/home/templates";
import Info from "../../components/page-comp/home/info";
import Plans from "../../components/page-comp/home/plans";



const Home = () => {
    return (
        <div className="container">
            <Hero />
            <HowItWroks />
            <Templates />
            <Info />
            <Plans />
        </div>
    );
};

export default Home;