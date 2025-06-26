import { useState } from 'react'

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border rounded overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 bg-gray-200 text-left font-medium"
      >
        {title}
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  )
}

{/* <Accordion title="Click to Expand">
  <p>This content is dynamic and passed as children.</p>
</Accordion> */}