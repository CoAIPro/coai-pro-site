import { useTheme } from "@/context/ThemeContext";
import { howItWorkData } from "@/data/howItWorkData";



const HowItWroks = () => {
    const { darkMode } = useTheme();
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div>
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle pt-3">3 Easy steps to generate you website</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {
                        howItWorkData.map((item) => (
                            <div key={item.id} className="bg-howWorkGradient dark:bg-darkGradientBg rounded-3xl flex flex-col items-center border border-lightBorder dark:border-darkBorder shadow-card">
                                <div className="w-full p-5">
                                    <h3 className="flex items-center gap-3 bg-white dark:bg-cardDark rounded-lg py-3 px-4 text-base font-medium">
                                        <img src={`${darkMode ? item.titleIcon.dark : item.titleIcon.light}`} alt={item.title} className="w-6 h-6" />
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-pragraphText pt-3">{item.desc}</p>
                                </div>
                                <div className="w-full">
                                    <img src={item.thumb} alt={item.title} className={`${item.id == 3 ? 'max-w-64 w-full mx-auto' : 'w-full h-full object-contain'}`} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </section>
    );
};

export default HowItWroks;