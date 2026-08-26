import { createSlice } from "@reduxjs/toolkit";

export interface Ipreferences {
    darkMode: boolean;
}

const initialState: Ipreferences = {
    darkMode: false
}

const preferenceSlice = createSlice({
    name: "preferences",
    initialState: initialState,
    reducers: {
        toogleDarkMode : (state) => {
            state.darkMode = !state.darkMode
        }
    }
});

export const {toogleDarkMode} = preferenceSlice.actions;

export default preferenceSlice.reducer