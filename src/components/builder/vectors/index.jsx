import { useState } from "react";
import { shapesData } from "../../../data/shapesData";

const Vectors = () => {
    const [search, setSearch] = useState("");

    const filteredShapes = shapesData.filter((shape) =>
        shape.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleShapeClick = (shape) => {
        console.log("Selected shape:", shape.name);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="🔍 Search shape"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 rounded-xl bg-blue-50 focus:outline-none"
                />
            </div>

            <div className="grid grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
                {filteredShapes.map((shape, index) => {
                    const IconComponent = shape.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => handleShapeClick(shape)}
                            className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
                        >
                            <div className="text-2xl text-gray-600 group-hover:text-primary mb-2">
                                <img src={shape.icon} alt={shape.name} />
                            </div>
                            <span className="text-xs text-gray-500 text-center">
                                {shape.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Vectors;