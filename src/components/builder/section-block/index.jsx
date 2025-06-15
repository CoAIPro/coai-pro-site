import { useBuilderStore } from "@/store/builderStore";
import { BiPlus } from "react-icons/bi";

export default function SectionBlock({ rowId, colIndex, section }) {
  const updateSection = useBuilderStore((s) => s.updateSection);

  const handleAdd = () => {
    const dummySection = {
      type: "Hero",
      content: "Welcome to Coai!",
      bg: "#f5f5f5",
    };
    updateSection(rowId, colIndex, dummySection);
  };

  return (
    <div className="border p-4 min-h-[100px] bg-white shadow-sm">
      {section ? (
        <div>
          <button className="btn_add_section" onClick={handleAdd}>
            <BiPlus />
            Add Content
          </button>
        </div>
      ) : (
        <button onClick={handleAdd} className="text-sm text-blue-500">
          + Add Section
        </button>
      )}
    </div>
  );
}