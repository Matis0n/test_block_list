import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BlockState} from "../../types/types.ts";
import {createNewBlock, sortBlocksByTime} from "../../blockUtils/blockUtils.ts";

const initialState: BlockState = {
    blocks: [],
    sortOrder: 'none',
};

const blockSlice = createSlice({
    name: 'blocks',
    initialState,
    reducers: {
        randomBlocksByDefault(state) {
            const color = `#${(Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'))}`;
            state.blocks.push(createNewBlock(color));
        },
        addBlock(state, action: PayloadAction<string>) {
            const newBlock = createNewBlock(action.payload);
            const randomIndex = Math.floor(Math.random() * (state.blocks.length + 1));
            state.blocks.splice(randomIndex, 0, newBlock);
        },
        shuffleBlocks(state) {
            state.blocks.sort(() => 0.5 - Math.random());
        },
        sortBlocks(state) {
            if (state.sortOrder === 'none') {
                state.sortOrder = 'asc'
            } else if (state.sortOrder === 'asc') {
                state.sortOrder = 'desc';
            } else {
                state.sortOrder = 'none';
            }
            sortBlocksByTime(state)
        },
        decrementTimer(state, action: PayloadAction<string>) {
            const block = state.blocks.find((block) => block.id === action.payload);
            if (block) {
                block.time -= 1;
            }
        },
        removeBlock(state, action: PayloadAction<string>) {
            state.blocks = state.blocks.filter(b => b.id !== action.payload);
        },
        resetTimerBlock(state, action: PayloadAction<string>) {
            const block = state.blocks.find((block) => block.id === action.payload);
            if (block) {
                block.time = 20;
            }
            if (state.sortOrder !== 'none') {
                sortBlocksByTime(state)
            }
        },
    },
});

export const {
    randomBlocksByDefault,
    addBlock,
    shuffleBlocks,
    sortBlocks,
    decrementTimer,
    removeBlock,
    resetTimerBlock
} = blockSlice.actions;

export default blockSlice.reducer;
