import { create } from "zustand";

const useBuilderStore = create((set) => ({
  elements: [],
  addElement: (el) => set((state) => ({ elements: [...state.elements, el] })),
  updateElement: (id, newProps) =>
    set((state) => ({
      elements: state.elements.map((el) =>
        el.id === id ? { ...el, ...newProps } : el
      ),
    })),
  removeElement: (id) =>
    set((state) => ({
      elements: state.elements.filter((el) => el.id !== id),
    })),
  resetElements: () => set({ elements: [] }),
}));

export default useBuilderStore;