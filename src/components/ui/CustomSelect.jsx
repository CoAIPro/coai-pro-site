import { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function CustomSelect({ options = [], onChange, value }) {
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

  const handleSelect = (option) => {
    onChange && onChange(option)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-[#EEF2FF] text-left rounded-xl text-base font-medium text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || 'Select an option'}
        <FaChevronDown className={`text-sm ml-2 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white mt-2 rounded-xl border border-gray-200 z-10 overflow-auto shadow-[0px_16px_44px_0px_#00000012]">
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => handleSelect(opt)}
              className="text-sm px-4 py-2 cursor-pointer hover:bg-blue-100 hover:text-primary"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// const fruits = ['Apple', 'Banana', 'Cherry']

// function App() {
//   const [selected, setSelected] = useState(fruits[0])

//   return (
//     <CustomSelect
//       options={fruits}
//       value={selected}
//       onChange={setSelected}
//     />
//   )
// }
