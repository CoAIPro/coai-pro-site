import { create } from 'zustand';

const useUIStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  activeModal: null,
  setActiveModal: (modal) => set({ activeModal: modal }),
}));

export default useUIStore;
