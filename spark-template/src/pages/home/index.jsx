import React from "react";
import Hero from "../../components/page-comp/home/hero";
import About from "../../components/page-comp/home/about";
import Featured from "../../components/page-comp/home/featured";
import Mission from "../../components/page-comp/home/mission";
import Connect from "../../components/page-comp/home/connect";


const Home = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <About />
                <Featured />
                <Mission />
                <Connect />
            </div>
        </div>
    );
};

export default Home;