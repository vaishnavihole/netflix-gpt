import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        chuck: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.chuck = action.payload;
        },
    },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
