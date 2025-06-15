import BuilderHeaderOptions from "@/components/builder/header-options"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Eye } from "lucide-react"
import { FaAngleDown, FaCheck } from "react-icons/fa"
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-16 gap-1.5 rounded-xl bg-[#EEF2FF] border-none outline-none">
                <Eye className="text-md text-primary" />
                <FaAngleDown className="text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Preview
              </DropdownMenuItem>
              <DropdownMenuItem>
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                Export
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="gradient" type="button" size="gradient">
            Publish Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader