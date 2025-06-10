import BuilderSection from "@/components/builder/section";
import DashboardHeader from "@/components/reusuable/dashboard-header";
import { BiPlus } from "react-icons/bi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const CreateNewSite = () => {
  return (
    <div className="relative z-10">
      <DashboardHeader />
      <BuilderSection />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-125px)] pl-5 pr-[350px] pt-16">
        <div className="rounded-lg p-5 w-full">
          <div className="w-full">
            <div className="pb-5">
              <h3 className="device-showcase-title">
                {/* Desktop Icon */}
                <HiOutlineComputerDesktop className="text-xl" />
                <span>Desktop Version</span>
              </h3>
            </div>
            <div className="text-center pb-4">
              <div className="min-h-[400px] space-y-2 border-2 border-[#3749571f] focus-within:border-primary  p-7">
                <textarea
                  className="w-full text-3xl font-bold bg-transparent border-none outline-none resize-none placeholder:text-black"
                  placeholder="Untitled Site"
                  rows={1}
                  style={{ overflow: 'hidden' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />
                <textarea
                  className="w-full text-gray-500 bg-transparent border-none outline-none resize-none placeholder:text-gray-400 h-full"
                  placeholder="Nothing here yet (except this message), but you can fix that by clicking the '+' above to start creating your own templates. Give it a try!"
                  rows={2}
                  style={{ overflow: 'hidden' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                />
              </div>
            </div>
            <button className="btn_add_section" onClick={() => {
              console.log('add section');
            }}>
              <BiPlus />
              Add Section
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNewSite