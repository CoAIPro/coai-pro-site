import { useEffect, useRef, useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import { FiMonitor, FiSmartphone, FiTablet } from "react-icons/fi"
import { LuChevronDown } from "react-icons/lu"

const BuilderHeaderOptions = () => {
  const [activeDevice, setActiveDevice] = useState("desktop")
  const [isWidthDropdownOpen, setIsWidthDropdownOpen] = useState(false)
  const [isZoomDropdownOpen, setIsZoomDropdownOpen] = useState(false)
  const [selectedWidth, setSelectedWidth] = useState("1440px")
  const [selectedZoom, setSelectedZoom] = useState("100%")
  
  const widthDropdownRef = useRef(null)
  const zoomDropdownRef = useRef(null)

  const widthOptions = ["1440px", "1200px", "1000px", "800px", "600px"]
  const zoomOptions = ["25%", "50%", "75%", "100%", "125%", "150%", "200%"]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widthDropdownRef.current && !widthDropdownRef.current.contains(e.target)) {
        setIsWidthDropdownOpen(false)
      }
      if (zoomDropdownRef.current && !zoomDropdownRef.current.contains(e.target)) {
        setIsZoomDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleWidthButtonClick = (e) => {
    e.stopPropagation()
    setIsWidthDropdownOpen(!isWidthDropdownOpen)
    setIsZoomDropdownOpen(false)
  }

  const handleZoomButtonClick = (e) => {
    e.stopPropagation()
    setIsZoomDropdownOpen(!isZoomDropdownOpen)
    setIsWidthDropdownOpen(false)
  }

  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveDevice("desktop")}
            className={`flex items-center justify-center h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 ${
              activeDevice === "desktop" ? "bg-[#EEF2FF] text-primary" : "hover:text-primary"
            }`}
          >
            <FiMonitor />
          </button>
          <button
            type="button"
            onClick={()  => setActiveDevice("tablet")}
            className={`flex items-center justify-center text-center h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 ${
              activeDevice === "tablet" ? "bg-[#EEF2FF] text-primary" : "hover:text-primary"
            }`}
          >
            <FiTablet />
          </button>
          <button
            type="button"
            onClick={() => setActiveDevice("mobile")}
            className={`flex items-center justify-center h-9 w-12 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 ${
              activeDevice === "mobile" ? "bg-[#EEF2FF] text-primary" : "hover:text-primary"
            }`}
          >
            <FiSmartphone />
          </button>
        </div>
        <button type="button" className="h-9 w-8 rounded-xl border-none outline-none text-xl active:scale-90 transition-all duration-300 hover:text-primary">
          <BsThreeDots className="text-2xl" />
        </button>
        
        {/* Website Width Dropdown */}
        <div className="relative" ref={widthDropdownRef}>
          <button 
            type="button" 
            className="h-9 px-3 rounded-xl border border-gray-300 outline-none active:scale-90 transition-all duration-300 hover:bg-gray-50 flex items-center gap-2 text-sm"
            onMouseDown={handleWidthButtonClick}
          >
            <span className="text-gray-700">{selectedWidth}</span>
            <LuChevronDown className={`text-gray-600 text-xs transition-transform duration-200 ${isWidthDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isWidthDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-2">
                {widthOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setSelectedWidth(option)
                      setIsWidthDropdownOpen(false)
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Zoom Percentage Dropdown */}
        <div className="relative" ref={zoomDropdownRef}>
          <button 
            type="button" 
            className="h-9 px-3 rounded-xl border border-gray-300 outline-none active:scale-90 transition-all duration-300 hover:bg-gray-50 flex items-center gap-2 text-sm"
            onMouseDown={handleZoomButtonClick}
          >
            <span className="text-gray-700">{selectedZoom}</span>
            <LuChevronDown className={`text-gray-600 text-xs transition-transform duration-200 ${isZoomDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isZoomDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-20 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-2">
                {zoomOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setSelectedZoom(option)
                      setIsZoomDropdownOpen(false)
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BuilderHeaderOptions