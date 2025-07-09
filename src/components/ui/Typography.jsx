import { useState } from "react"
import { LuAlignCenter, LuAlignLeft, LuAlignRight } from "react-icons/lu"
import { VscSettings } from "react-icons/vsc"
import CustomSelect from "./CustomSelect"

const Typography = () => {
  const fruits = ['Apple', 'Banana', 'Cherry']
  const [selected, setSelected] = useState(fruits[0])
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <CustomSelect
          options={fruits}
          value={selected}
          onChange={setSelected}
        />
        <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none">
          <option>Poppins</option>
          <option>Inter</option>
          <option>Roboto</option>
          <option>Open Sans</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none" defaultValue="Medium">
          <option>Light</option>
          <option>Medium</option>
          <option>Bold</option>
        </select>
        <select className="w-20 border rounded px-3 py-2 text-sm focus:outline-none">
          {Array.from({ length: 40 }, (_, i) => i + 8).map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center border rounded w-full overflow-hidden">
          <div className="px-2 text-gray-400 border-r text-sm">L</div>
          <input
            type="text"
            placeholder="px"
            className="w-full px-2 py-2 text-sm focus:outline-none"
            defaultValue="1263px"
          />
        </div>
        <div className="flex items-center border rounded w-full overflow-hidden">
          <div className="px-2 text-gray-400 border-r text-sm">R</div>
          <input
            type="text"
            placeholder="px"
            className="w-full px-2 py-2 text-sm focus:outline-none"
            defaultValue="1263px"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center justify-between py-2 px-3 gap-2 border border-gray-300 rounded">
          <button type="button">
            <LuAlignLeft className="text-gray-500 text-xl" />
          </button>
          <button type="button">
            <LuAlignCenter className="text-gray-500 text-xl" />
          </button>
          <button type="button">
            <LuAlignRight className="text-gray-500 text-xl" />
          </button>
        </div>
        <dir className="flex items-center border border-gray-300 w-11 py-2 px-3">
          <button type="button" className="w-full">
            <VscSettings className="text-gray-500 text-xl" />
          </button>
       </dir>
      </div>
    </div>
  )
}

export default Typography