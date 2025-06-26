import { useCanvasStore } from "@/store/useCanvasStore";

const BuilderEditor = () => {
  const { elements, selectedId, setSelectedId } = useCanvasStore();
  return (
    <div className="w-full h-full relative rounded-xl">
      <div
        id="canvas"
        className="mx-auto relative"
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuilderEditor