import { useTheme } from "@/context/ThemeContext";
import { FaArrowRight } from "react-icons/fa";
import homeCtaThumb from "../../../../assets/images/cta-thumb-light.png";
import homeCtaThumbDark from "../../../../assets/images/cta-thumb.png";
const HomeCta = () => {
  const { darkMode } = useTheme();
  return (
    <section className="pb-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-5 homeCtaBox dark:shadow-priceShadow border border-transparent dark:border-[#313131]">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-normal">Who It's For</h2>
            <h4 className="text-lg font-normal">Made for founders, creators, and doers.</h4>
            <p className="text-sm text-gray-500 pb-3">
              Whether you're launching a SaaS, personal portfolio, or one-page event site — CoAI.Pro is your fastest path from idea to internet.
            </p>
            <button className="flex items-center justify-center gap-3 w-fit bg-gradient-to-r from-[#3997FF] to-[#F882F2] text-white px-10 py-3 rounded-full">
              Get Started <FaArrowRight />
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={darkMode ? homeCtaThumbDark : homeCtaThumb} alt="thumb" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCta