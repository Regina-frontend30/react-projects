import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

type ThemeState = {
    value: "white" | "black"
}

const initialState: ThemeState = {
    value: "white",
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = state.value === "white" ? "black" : "white"
        },
    },
})

export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.value

export default themeSlice.reducer