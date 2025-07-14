import HomeCta from '@/components/page-comp/home/cta';
import HowItWroks from '@/components/page-comp/home/how-it-works';
import Templates from '@/components/reuse/templates';
import Hero from '../../components/page-comp/home/hero';
import Info from '../../components/page-comp/home/info';
import Plans from '../../components/page-comp/home/plans';
const Home = () => {
    return (
        <>
            <Hero />
            <HowItWroks />
            <Templates />
            <Info />
            <Plans />
            <HomeCta />
        </>
    )
}

export default Home