import { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function DropdownMenu({ label = 'Open Menu', items = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

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
    <div className="relative block w-full text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 border bg-white rounded w-full flex items-center justify-between ${isOpen ? "bg-[#EEF2FF]" : ""}`}
      >
        {label}
        <FaChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className="right-0 w-full rounded border bg-white shadow z-20 max-h-60 overflow-auto">
          {items.map((item, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                if (item.onClick) item.onClick()
                setIsOpen(false)
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// const menuItems = [
//   { label: 'Profile', onClick: () => alert('Profile clicked') },
//   { label: 'Settings', onClick: () => alert('Settings clicked') },
//   { label: 'Logout', onClick: () => alert('Logout clicked') },
// ]

//   < DropdownMenu label = "User Menu" items = { menuItems } />
