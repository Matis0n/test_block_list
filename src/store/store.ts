import {configureStore} from "@reduxjs/toolkit";
import blockSlice from "./Slices/blockSlice.ts";
import animationSlice from "./Slices/animationSlice.ts";


const store = configureStore({
    reducer: {
        blocks: blockSlice,
        animation: animationSlice,
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

