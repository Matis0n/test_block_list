export interface BlockType {
    id: string
    color: string
    time: number
}

export interface BlockState {
    blocks: BlockType[]
    sortOrder: 'none' | 'asc' | 'desc'

}

export interface AnimationState {
    isShuffling: boolean
}