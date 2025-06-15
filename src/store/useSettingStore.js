import { create } from 'zustand';

const useSettingStore = create((set) => ({
  showGrid: true,
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),

  snapToGrid: false,
  toggleSnap: () => set((state) => ({ snapToGrid: !state.snapToGrid })),
}));

export default useSettingStore;
