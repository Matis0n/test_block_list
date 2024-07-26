import {ChangeEvent,useState} from 'react';
import {useAppDispatch,useAppSelector} from "../../store/hooks.ts";
import {
    addBlock,
    shuffleBlocks,
    sortBlocks
} from '../../store/Slices/blockSlice.ts';
import {shuffleAnimationActive} from "../../store/Slices/animationSlice.ts";
import BlockList from "./BlockList.tsx";

const BlockListContainer = () => {
    const dispatch = useAppDispatch();
    const sortOrder  = useAppSelector((state) => state.blocks.sortOrder);
    const [color, setColor] = useState<string>('');

    const handleClickAddBlock = () => {
        const formatHexColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        if (color.length === 0) {
            alert('Введите hex цвет ');
            return;
        } else if (!color.match(formatHexColor)) {
            alert('Введите корректный hex цвет');
            return;
        }
        dispatch(addBlock(color));
        setColor('');
    };
    const handleClickSortBlocks = () => {
        dispatch(sortBlocks());
    };
    const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };
    const handleClickShuffleAndAnimationActivatedBlocks = () => {
        dispatch(shuffleAnimationActive());
        dispatch(shuffleBlocks());
    };

    return (
        <>
            <BlockList
                color={color}
                sortOrder={sortOrder}
                handleClickAddBlock={handleClickAddBlock}
                handleClickSortBlocks={handleClickSortBlocks}
                handleChangeColor={handleChangeColor}
                handleClickShuffleAndAnimationActivatedBlocks={handleClickShuffleAndAnimationActivatedBlocks}
            />
        </>
    );
}

export default BlockListContainer;
