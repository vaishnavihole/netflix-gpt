import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGotSearch: false,
    },
    
    reducers: {
    toggleGptSearchView: (state) => {
        state.showGotSearch = !state.showGotSearch;
    },
},
})

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;
