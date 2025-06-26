import Pricing from "@/components/reuse/pricing";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import profile from "../../assets/images/avatar.png";
import topShadow from '../../assets/images/dashboard/top-shadow.svg';
const PricingPage = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-5 bg-white shadow-header px-6 py-4 m-[30px] rounded-2xl relative">
        <div className='absolute -top-20 -right-10 -z-10'>
          <img src={topShadow} alt="shadow" />
        </div>
        <button type="button" className="profile">
          <img src={profile} className="w-10 h-10 rounded-full object-cover" alt="profile" />
          <div className="text-left">
            <h3 className="text-base font-medium leading-none">John Doe</h3>
            <p className="text-xs text-gray-500 font-medium">Profile</p>
          </div>
        </button>
        <div className="horizontal-line"></div>
        <div className="flex items-center gap-2">
          <button type="button" className="bg-transparent text-black text-2xl hover:text-primary transition-colors duration-200">
            <HiOutlineCog6Tooth />
          </button>
        </div>
      </div>
      <div>
        <div className="container mx-auto pt-10">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-black">Choose a plan & start building your website</h2>
            <p className="text-lg font-medium text-primary pt-2">No code. No delays. Just pick a plan and launch with CoAI.Pro</p>
          </div>
          <Pricing />
        </div>
      </div>
    </>
  )
}

export default PricingPage