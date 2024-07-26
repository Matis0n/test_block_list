import {BlockState, BlockType} from "../types/types.ts";

export function createNewBlock(color: string): BlockType {
    const id = crypto.randomUUID()
    const time = Math.floor(Math.random() * 20) + 1;
    return {id, color, time}
}

export function sortBlocksByTime(state:BlockState) {
    if (state.sortOrder === 'asc') {
        state.blocks.sort((a, b) => a.time - b.time);
    } else if (state.sortOrder === 'desc') {
        state.blocks.sort((a, b) => b.time - a.time);
    }
}