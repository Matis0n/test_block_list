import {createSlice} from '@reduxjs/toolkit';
import {AnimationState} from "../../types/types.ts";


const initialState: AnimationState = {
    isShuffling: false,
};

const animationSlice = createSlice({
    name: 'animation',
    initialState,
    reducers: {
        shuffleAnimationActive: (state) => {
            state.isShuffling = true;
        },
        shuffleAnimationNotActive: (state) => {
            state.isShuffling = false;
        },
    },
});

export const {
    shuffleAnimationActive,
    shuffleAnimationNotActive
} = animationSlice.actions;

export default animationSlice.reducer;
