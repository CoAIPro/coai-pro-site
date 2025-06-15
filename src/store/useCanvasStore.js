import { nanoid } from "nanoid";
import { create } from "zustand";

export const useCanvasStore = create((set) => ({
  elements: [],

  zoom: 100,
  width: 1440,
  device: "desktop",
  selectedId: null,
  currentPageView: "edit",

  addElement: (type) =>
    set((state) => ({
      elements: [
        ...state.elements,
        {
          id: nanoid(),
          type,
          top: 50,
          left: 50,
          width: 300,
          height: 100,
          content: type === "text" ? "New Text" : null,
          src: type === "image" ? "https://via.placeholder.com/300" : null,
        },
      ],
    })),

  setZoom: (zoom) => set(() => ({ zoom })),
  setDevice: (device) => set(() => ({ device })),
  setWidth: (width) => set(() => ({ width })),
  setSelectedId: (id) => set(() => ({ selectedId: id })),
}));
