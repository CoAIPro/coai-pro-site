import { useCanvasStore } from "@/store/useCanvasStore";

const CanvasEditor = () => {
  const { elements, selectedId, setSelectedId } = useCanvasStore();
  return (
    <div className="w-full h-full overflow-auto bg-white relative">
      <div
        id="canvas"
        className="mx-auto relative bg-[#fafafa] border border-gray-200"
        style={{
          width: "100%", // Will be overridden in wrapper
          minHeight: "100vh",
        }}
      >
        {elements.map((el) => (
          <div
            key={el.id}
            className={`absolute cursor-pointer border ${selectedId === el.id ? "border-blue-500" : "border-transparent"
              }`}
            style={{
              top: el.top,
              left: el.left,
              width: el.width,
              height: el.height,
            }}
            onClick={() => setSelectedId(el.id)}
          >
            {/* Render content based on type */}
            {el.type === "text" && (
              <p className="p-2">{el.content || "Editable Text"}</p>
            )}
            {el.type === "image" && (
              <img src={el.src} alt="img" className="w-full h-full object-cover" />
            )}
            {/* Add other types like video, button, etc. */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CanvasEditor