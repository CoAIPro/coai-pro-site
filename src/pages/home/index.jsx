import React from 'react'
import Hero from '../../components/page-comp/home/hero'
import HowItWroks from '../../components/page-comp/home/how-it-works'
import Info from '../../components/page-comp/home/info'
import Plans from '../../components/page-comp/home/plans'
import Templates from '../../components/ui/templates'

const Home = () => {
    return (
        <>
            <Hero />
            <HowItWroks />
            <Templates />
            <Info />
            <Plans />
        </>
    )
}

export default Home