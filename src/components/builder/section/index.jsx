import CheckboxToggle from "@/components/ui/CheckboxToggle";
import DropdownMenu from "@/components/ui/DropdownMenu";
import TabDropdownMenu from "@/components/ui/TabDropdownMenu";
import Typography from "@/components/ui/Typography";
import { layoutOptions } from "@/data/icons";
import { useState } from "react";
import { BiPaint } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineAnimation, MdOutlineImage } from "react-icons/md";
import { PiResizeThin } from "react-icons/pi";
import { RiListSettingsLine } from "react-icons/ri";

const BuilderSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [toggle1, setToggle1] = useState(false)
  const [activeTab, setActiveTab] = useState("pencil");
  const menuItems = [
    { label: 'Fixed Height' },
    { label: 'Fit to screen' },
  ]
  const colors = [
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#FCD34D",
    "#4ADE80",
    "#38BDF8",
    "#C084FC",
    "#FB7185",
    "linear-gradient(45deg, #F87171, #60A5FA)"
  ];

  return (
    <div
      className={`dashboardSidebar transition-all duration-300 ${isOpen ? "active" : ""
        }`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="btn_toggleSidebar">
        <svg
          className={`transition-transform text-xl ${isOpen ? "" : "rotate-180"
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className={`px-4 pb-8 ${isOpen ? "" : "hidden"
        }`}>
        <h2 className="text-xl font-medium pb-6 pt-3">Section</h2>
        <div className="flex border-b border-gray-300">
          <button
            className={`px-4 py-2 text-sm font-medium flex justify-center items-center gap-1 w-full ${activeTab === "pencil" ? "border-b-2 border-primary text-primary" : "text-dark"
              }`}
            onClick={() => setActiveTab("pencil")}
          >
            <HiOutlinePaintBrush className="text-2xl" />
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium flex justify-center items-center gap-1 w-full ${activeTab === "animation" ? "border-b-2 border-primary text-primary" : "text-dark"
              }`}
            onClick={() => setActiveTab("animation")}
          >
            <RiListSettingsLine className="text-2xl" />
          </button>
        </div>
        <div className="mt-5">
          {activeTab === "pencil" && (
            <div className="rounded-lg">
              <TabDropdownMenu label="Size" children={
                <div className="w-full">
                  <div className="flex justify-between items-center gap-5 w-full mt-3">
                    <div className="flex items-center gap-2 max-w-[98px]">
                      <label htmlFor="width">W</label>
                      <input type="number" className="input-sm w-full" id="width" placeholder="1263px" />
                    </div>
                    <div className="flex items-center justify-end gap-2 max-w-[98px]">
                      <label htmlFor="height">H</label>
                      <input type="number" className="input-sm w-full" id="height" placeholder="1263px" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 w-full text-2xl text-dark mt-5">
                    <p className="text-base">Resposnive Behavior</p>
                    <button type="button" className="rounded-full p-1 ">
                      <IoInformationCircleOutline className="text-2xl" />
                    </button>
                  </div>
                  <div className="w-full mt-3">
                    <DropdownMenu label="Responsive Behavior" items={menuItems} />
                  </div>
                </div>
              }>
              </TabDropdownMenu>

              <TabDropdownMenu label="Design" children={
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2 w-full text-2xl text-dark ">
                    <p className="text-base">Background</p>
                    <button type="button" className="rounded-full p-1 ">
                      <IoInformationCircleOutline className="text-2xl" />
                    </button>
                  </div>
                  <div className="w-full mt-3">
                    <p className="text-base pb-3 text-dark">Color</p>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-[28px] h-[28px] rounded-[5px] cursor-pointer border border-gray-300"
                          style={{
                            background: color
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center w-full mt-5 justify-between gap-2">
                    <label htmlFor="height">Opacity</label>
                    <div className="max-w-16">
                      <input type="number" className="input-sm w-full" id="height" placeholder="100%" />
                    </div>
                  </div>
                  <div className="w-full mt-5">
                    <p className="text-base pb-3 text-dark">Media</p>
                    <div className="flex flex-wrap w-full gap-2 relative">
                      <input
                        type="file"
                        id="media"
                        className="hidden"
                      />
                      <label
                        htmlFor="media"
                        className="w-full px-4 py-8 rounded-lg cursor-pointer bg-[#EEF2FF] flex flex-col items-center justify-center text-primary gap-2"
                      >
                        <FiPlusCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">Add Video or Image</span>
                      </label>
                    </div>
                  </div>
                </div>
              }>
              </TabDropdownMenu>

              <TabDropdownMenu label="Typography" children={
                <div className="w-full">
                  <Typography />
                </div>
              }></TabDropdownMenu>

              <TabDropdownMenu
                label="Layout"
              >
                <div className="w-full">
                  <p className="text-sm mb-2 text-dark">Choose Layout</p>
                  <div className="grid grid-cols-3 gap-3">
                    {layoutOptions.map((layout) => (
                      <button
                        key={layout.id}
                        className="p-2 border rounded-lg flex items-center justify-center hover:border-primary transition-all"
                        title={layout.name}
                      >
                        <img src={layout.icon} alt={layout.name} className="w-6 h-6 object-contain" />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm mt-4 mb-2 text-dark">Advanced CSS Grid</p>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">
                    Apply
                  </button>
                </div>
              </TabDropdownMenu>

              <TabDropdownMenu label="Anchor" children={
                <div className="w-full">
                  <CheckboxToggle
                    checked={toggle1}
                    onChange={setToggle1}
                    label="Enable Feature A"
                    showLabel={true}
                    variant="1"
                  />
                </div>
              }></TabDropdownMenu>

              <TabDropdownMenu label="Position" children={
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2 w-full text-2xl text-dark ">
                    <p className="text-base">Position Type</p>
                    <button type="button" className="rounded-full p-1 ">
                      <IoInformationCircleOutline className="text-2xl" />
                    </button>
                  </div>
                  <div className="w-full mt-3">
                    <DropdownMenu label="Default" items={menuItems} />
                  </div>
                </div>
              }></TabDropdownMenu>
            </div>
          )}
          {activeTab === "animation" && (
            <div>
              <h2>Animation</h2>
            </div>
          )}
        </div>

      </div>
      <div className={`pb-8 ${isOpen ? "hidden" : "block"
        }`}>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg px-2">
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <BiPaint className="w-5 h-5" />
            <span className="text-sm font-medium">Design</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 border-t border-gray-200 py-5 px-2">
            <MdOutlineAnimation className="w-5 h-5" />
            <span className="text-sm font-medium">Animation</span>
          </button>
        </div>

        {/* Content For Designing */}
        <div className="flex flex-col items-center rounded-lg px-2">
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <PiResizeThin className="w-5 h-5" />
            <span className="text-sm font-medium">Size</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <CiMobile3 className="w-5 h-5" />
            <span className="text-sm font-medium">Responsive</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <BiPaint className="w-5 h-5" />
            <span className="text-sm font-medium">Design</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineAnimation className="w-5 h-5" />
            <span className="text-sm font-medium">Typography</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Media</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Layout</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Anchor</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 p-5">
            <MdOutlineImage className="w-5 h-5" />
            <span className="text-sm font-medium">Position</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderSection;
