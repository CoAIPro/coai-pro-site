import { FaArrowRight } from "react-icons/fa"

const HomeCta = () => {
  return (
    <section className="py-10 lg:py-24">
      <div className="container mx-auto">
        <div className="homeCtaBox">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Who It's For</h2>
            <h4 className="text-lg font-bold">Made for founders, creators, and doers.</h4>
            <p className="text-sm text-gray-500">
              Whether you're launching a SaaS, personal portfolio, or one-page event site — CoAI.Pro is your fastest path from idea to internet.
            </p>
            <button className="flex items-center justify-center gap-3 w-fit bg-gradient-to-r from-[#3997FF] to-[#F882F2] text-white px-10 py-3 rounded-full">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCta