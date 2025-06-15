 
import { useBuilderStore } from "@/store/builderStore";
import SectionBlock from "../section-block";

export default function GridCanvas() {
  const gridData = useBuilderStore((s) => s.gridData);

  return (
    <div className="space-y-4 mt-4 w-full">
      {gridData.map((row) => (
        <div
          key={row.id}
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${row.columns.length}, 1fr)`,
          }}
        >
          {row.columns.map((col, colIndex) => (
            <SectionBlock
              key={colIndex}
              rowId={row.id}
              colIndex={colIndex}
              section={col}
            />
          ))}
        </div>
      ))}
    </div>
  );
}