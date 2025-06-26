import { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function TabDropdownMenu({ label = 'Open Menu', children }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      className="relative block w-full text-left rounded-xl mb-5 border border-gray-300"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 bg-white rounded-xl w-full transition-colors duration-300 ${isOpen ? 'bg-[#EEF2FF] rounded-b-none' : ''
          }`}
      >
        <div
          className={`flex items-center justify-between w-full py-3 ${isOpen ? 'border-b border-gray-300' : ''
            }`}
        >
          <p className="text-base text-dark font-medium">{label}</p>
          <FaChevronDown
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-white rounded-b-xl ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
