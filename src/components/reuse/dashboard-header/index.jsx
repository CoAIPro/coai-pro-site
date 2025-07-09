import BuilderHeaderOptions from "@/components/builder/header-options"
import { useEffect, useRef, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { LuChevronDown, LuEye } from "react-icons/lu"
import { SlActionRedo, SlActionUndo } from "react-icons/sl"

const DashboardHeader = () => {
  const [isPreviewDropdownOpen, setIsPreviewDropdownOpen] = useState(false)
  const [previewOptions, setPreviewOptions] = useState({
    showGrid: false,
    showGuides: false
  })
  const dropdownRef = useRef(null)

  const handlePreviewOptionChange = (option) => {
    setPreviewOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }))
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsPreviewDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleButtonClick = (e) => {
    e.stopPropagation()
    setIsPreviewDropdownOpen(!isPreviewDropdownOpen)
  }

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
            
            <div className="relative" ref={dropdownRef}>
              <button 
                type="button" 
                className="h-9 px-3 rounded-xl border border-gray-300 outline-none active:scale-90 transition-all duration-300 hover:bg-gray-50 flex items-center gap-1"
                onMouseDown={handleButtonClick}
              >
                <LuEye className="text-gray-600 text-lg" />
                <LuChevronDown className={`text-gray-600 text-sm transition-transform duration-200 ${isPreviewDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPreviewDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Preview Options</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={previewOptions.showGrid}
                          onChange={() => handlePreviewOptionChange('showGrid')}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">Show Grid</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={previewOptions.showGuides}
                          onChange={() => handlePreviewOptionChange('showGuides')}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">Show Guides</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button type="button" className="button py-3 px-5">
              Publish Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader