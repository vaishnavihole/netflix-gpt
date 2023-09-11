import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.chuck = action.payload;
        },
        addTrailerVideo: (state, action) => {
          state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
