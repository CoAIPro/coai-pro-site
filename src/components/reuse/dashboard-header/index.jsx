import BuilderHeaderOptions from "@/components/builder/header-options"
import { FaCheck } from "react-icons/fa"
import { SlActionRedo, SlActionUndo } from "react-icons/sl"

const DashboardHeader = () => {
  return (
    <div className="bg-white rounded-xl py-3 px-4 pl-8 shadow-[0px_16px_44px_0px_#00000012]">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm">
          <FaCheck className="text-primary" />
          <span>Auto save</span>
        </span>
        <div className="flex items-center gap-5">
          <BuilderHeaderOptions />
          <div className="flex items-center gap-2">
            <button type="button" className="h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 hover:text-primary">
              <SlActionUndo />
            </button>
            <button type="button" className="h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 hover:text-primary">
              <SlActionRedo />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader