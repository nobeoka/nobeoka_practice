import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clips: [],
};

export const clipSlice = createSlice({
    name: "clip",
    initialState,
    reducers: {
        addClip: (state, action) => {
            const newClip = action.payload;
            state.clips.push(newClip);
        },
        deleteClip: (state, action) => {
            const deletingClip = action.payload;
            const currentClip = state.clips;
            const filterClip = currentClip.filter(
                (clip) => clip.publishedAt !== deletingClip.publishedAt
            );
            state.clips = filterClip;
        },
        
    },
});

export const { addClip, deleteClip } = clipSlice.actions;

export default clipSlice.reducer;