import { create } from "zustand";

export const useBuilderStore = create((set) => ({
  selectedPreset: null,
  setSelectedPreset: (preset) => set({ selectedPreset: preset }),

  gridData: [],
  setGridData: (grid) => set({ gridData: grid }),

  applyGridPreset: (preset) =>
    set(() => {
      const newGrid = Array.from({ length: preset.rows }).map((_, rowIdx) => ({
        id: `row-${rowIdx + 1}`,
        columns: Array.from({ length: preset.columns }).map(() => ({
          type: "section",
          content: null,
        })),
      }));
      return { gridData: newGrid };
    }),
}));
