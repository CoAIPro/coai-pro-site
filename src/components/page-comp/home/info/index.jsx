import { useTheme } from "@/context/ThemeContext";
import { FaArrowRight } from "react-icons/fa";
import previewImg from "../../../../assets/images/info-img.png";
import { features } from "../../../../data/featureCard";

const Info = () => {
    const { darkMode } = useTheme();
    return (
        <section className="container mx-auto py-16 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-28">

            {/* Left content */}
            <div className="flex flex-col justify-between gap-10">
                <h2 className="text-2xl lg:text-4xl">
                    <p>Every site, fast and </p>
                    <p>
                        flawless
                        <span className="text-primary"> — everywhere.</span>
                    </p>
                </h2>
                <div className="space-y-4">
                    {features.map((item) => (
                        <div key={item.id} className={`flex items-center gap-3 p-4 rounded-xl ${item.bgClass}`}>
                            <img src={darkMode ? item?.icon?.dark : item?.icon?.light} className="w-7 object-contain" alt={item?.title || ""} />
                            <div>
                                <h4 className="text-lg font-semibold dark:text-light">{item.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="button !py-4">
                    Let's Create
                    <FaArrowRight />
                </button>
            </div>

            {/* Right image grid */}
            <div className="">
                <img
                    src={previewImg}
                    alt="site preview"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
        </section>
    );
};

export default Info;
