import { useBuilderStore } from "@/store/builderStore";
import grid1 from "../../../assets/images/grid/grid-1.svg";
import grid3 from "../../../assets/images/grid/grid-3.svg";
import grid4 from "../../../assets/images/grid/grid-4.svg";
import grid5 from "../../../assets/images/grid/grid-5.svg";
import grid6 from "../../../assets/images/grid/grid-6.svg";
import grid7 from "../../../assets/images/grid/grid-7.svg";
import grid8 from "../../../assets/images/grid/grid-8.svg";
import grid9 from "../../../assets/images/grid/grid-9.svg";

const layoutPresets = [
  { id: "1x1", name: "1x1", icon: grid7, columns: 1, rows: 1 },
  { id: "1x2", name: "1x2", icon: grid8, columns: 2, rows: 1 },
  { id: "2x1", name: "2x1", icon: grid1, columns: 1, rows: 2 },
  { id: "2x2", name: "2x2", icon: grid3, columns: 2, rows: 2 },
  { id: "3x1", name: "3x1", icon: grid5, columns: 3, rows: 1 },
  { id: "1x3", name: "1x3", icon: grid6, columns: 1, rows: 3 },
  { id: "3x2", name: "3x2", icon: grid4, columns: 3, rows: 2 },
  { id: "2x3", name: "2x3", icon: grid9, columns: 2, rows: 3 },
]; 

export default function LayoutSelector() {
  const { selectedPreset, setSelectedPreset, applyGridPreset } = useBuilderStore();

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Choose Layout</h4>
      <div className="grid grid-cols-3 gap-3">
        {layoutPresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setSelectedPreset(preset)}
            className={`border p-3 rounded-lg hover:bg-blue-50 transition 
              ${selectedPreset?.id === preset.id ? "border-blue-500 bg-blue-100" : ""}`}
            title={`${preset.columns}x${preset.rows}`}
          >
            <span className="flex items-center justify-center text-sm text-blue-600 font-medium">
              <img src={preset.icon} alt={preset.name} className="w-5 h-5" />
            </span>
          </button>
        ))}
      </div>

      <div className="text-sm text-gray-500">Advanced CSS Grid</div>

      <button
        onClick={() => {
          if (selectedPreset) applyGridPreset(selectedPreset);
        }}
        disabled={!selectedPreset}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        Apply
      </button>
    </div>
  );
}