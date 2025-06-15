import { useCanvasStore } from "@/store/useCanvasStore";
import CanvasEditor from "./CanvasEditor";

const CanvasWrapper = () => {
  const { width, zoom } = useCanvasStore();
  const baseWidth = 1440;
  const zoomScale = zoom / 100;

  return (
    <div className="h-full w-full rounded-xl mt-5 bg-white max-w-[calc(100%-350px)] overflow-auto">
      <div
        className="origin-top transition-all duration-300 relative"
        style={{
          transform: `scale(${zoomScale})`,
          width: `${width}px`,
          minHeight: "80vh",
          transformOrigin: "top left",
        }}
      >
        <div 
          className="absolute top-0 left-0 w-full h-full p-6"
          style={{
            width: `${baseWidth}px`,
            transform: `scale(${width / baseWidth})`,
            transformOrigin: "top left",
          }}
        >
          <CanvasEditor />
        </div>
      </div>
    </div>
  )
}

export default CanvasWrapper