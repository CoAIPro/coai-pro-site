import HomeCta from '@/components/page-comp/home/cta';
import HowItWroks from '@/components/page-comp/home/how-it-works';
import Templates from '@/components/reuse/templates';
import Hero from '../../components/page-comp/home/hero';
import Info from '../../components/page-comp/home/info';
import Plans from '../../components/page-comp/home/plans';
import { ThemeProvider } from '../../context/ThemeProvider';
const Home = () => {
    return (
        <ThemeProvider>
            <Hero />
            <HowItWroks />
            <Templates />
            <Info />
            <Plans />
            <HomeCta />
        </ThemeProvider>
    )
}

export default Home