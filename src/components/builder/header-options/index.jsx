import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import { FiMonitor, FiSmartphone, FiTablet } from "react-icons/fi"

const BuilderHeaderOptions = () => {
  const [activeDevice, setActiveDevice] = useState("desktop")
  return (
    <div>
      <div className="flex items-center gap-5">
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
        <button type="button" className="h-9 w-8 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 hover:text-primary">
          <BsThreeDots />
        </button>
      </div>
    </div>
  )
}

export default BuilderHeaderOptions