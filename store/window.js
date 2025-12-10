import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants/dataConstants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex++; // 直接使用并递增，确保新窗口在最上层
        win.data = data ?? win.data;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

