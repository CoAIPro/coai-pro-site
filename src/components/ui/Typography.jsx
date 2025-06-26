
const Typography = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none">
          <option>Poppins</option>
          <option>Inter</option>
          <option>Roboto</option>
          <option>Open Sans</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none">
          <option>Light</option>
          <option selected>Medium</option>
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
        {['left', 'center', 'right'].map((align) => (
          <button
            key={align}
            className="flex-1 border rounded px-2 py-2 flex items-center justify-center text-gray-500 hover:bg-gray-100"
            title={align}
          >
            <span className="material-icons text-sm">
              {align === 'left' && 'format_align_left'}
              {align === 'center' && 'format_align_center'}
              {align === 'right' && 'format_align_right'}
            </span>
          </button>
        ))}
        <button
          className="border rounded px-3 py-2 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          title="Advanced"
        >
          <span className="material-icons text-base">tune</span>
        </button>
      </div>
    </div>
  )
}

export default Typography