import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import { FaAngleDown } from "react-icons/fa"
import { FiMonitor, FiSmartphone, FiTablet } from "react-icons/fi"

const BuilderHeaderOptions = () => {
  const [activeDevice, setActiveDevice] = useState("desktop")
  const [pageSize, setPageSize] = useState("1440px")
  const [zoomLevel, setZoomLevel] = useState("100%")

  const pageSizes = ["1440px", "1280px", "1024px", "768px"]
  const zoomLevels = ["200%", "150%", "125%", "100%", "75%", "50%"]

  return (
    <div>
      <div className="flex items-center gap-5">
        {/* Device Views */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveDevice("desktop")}
            className={`h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 ${
              activeDevice === "desktop" ? "text-primary" : "hover:text-primary"
            }`}
          >
            <FiMonitor />
          </button>
          <button
            type="button"
            onClick={() => setActiveDevice("tablet")}
            className={`h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 ${
              activeDevice === "tablet" ? "text-primary" : "hover:text-primary"
            }`}
          >
            <FiTablet />
          </button>
          <button
            type="button"
            onClick={() => setActiveDevice("mobile")}
            className={`h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 ${
              activeDevice === "mobile" ? "text-primary" : "hover:text-primary"
            }`}
          >
            <FiSmartphone />
          </button>
        </div>
        {/* More Options */}
        <button type="button" className="h-9 w-8 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 hover:text-primary">
          <BsThreeDots />
        </button>
        {/* Page Size Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 w-24 gap-1.5 rounded-xl bg-[#EEF2FF] border-none outline-none">
              {pageSize}
              <FaAngleDown className="text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {pageSizes.map((size) => (
              <DropdownMenuItem key={size} onClick={() => setPageSize(size)}>
                {size}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Zoom Level Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 w-20 gap-1.5 rounded-xl bg-[#EEF2FF] border-none outline-none">
              {zoomLevel}
              <FaAngleDown className="text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {zoomLevels.map((level) => (
              <DropdownMenuItem key={level} onClick={() => setZoomLevel(level)}>
                {level}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default BuilderHeaderOptions