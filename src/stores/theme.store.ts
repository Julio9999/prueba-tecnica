import { create, StateCreator } from "zustand";
import { PaletteMode } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";

interface ThemeStore {
  mode: PaletteMode;
  theme: Theme;
  toggleColorMode: () => void;
}


const storeApi: StateCreator<ThemeStore> = ((set) => ({
  mode: "light",
  theme: createTheme({ palette: { mode: "light" } }),
  toggleColorMode: () =>
    set((state) => {
      const newMode: PaletteMode = state.mode === "light" ? "dark" : "light";
      return {
        mode: newMode,
        theme: createTheme({ palette: { mode: newMode } }),
      };
    }),
}));

export const useThemeStore = create<ThemeStore>()(
    storeApi
)
