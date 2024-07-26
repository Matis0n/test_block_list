import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {decrementTimer, resetTimerBlock} from "../../store/Slices/blockSlice.ts";
import {BlockType} from "../../types/types.ts";
import {useAnimation} from "framer-motion";
import Block from "./Block.tsx";
import AnimationDelete from "../../Animation/AnimationDelete/AnimationDelete.tsx";
import AnimationShuffle from "../../Animation/AnimationShuffle/AnimationShuffle.tsx";
import AnimationSorting from "../../Animation/AnimationSorting/AnimationSorting.tsx";

interface BlockContainerProps {
    block: BlockType
}

const BlockContainer: FC<BlockContainerProps> = ({block}) => {
    const dispatch = useAppDispatch();
    const controls = useAnimation();
    const isShuffling = useAppSelector((state) => state.animation.isShuffling);
    const sortOrder = useAppSelector((state) => state.blocks.sortOrder);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(decrementTimer(block.id));
        }, 1000);
        return () => clearInterval(timer);
    }, [dispatch, block.id]);

    const handleClickResetTimerBlock = () => {
        dispatch(resetTimerBlock(block.id));
    };

    return (
        <>
            <AnimationShuffle isShuffling={isShuffling} controls={controls}/>
            <AnimationDelete id={block.id} time={block.time} controls={controls}>
                <AnimationSorting sortOrder={sortOrder} time={block.time}>
                    <Block
                        id={block.id}
                        color={block.color}
                        time={block.time}
                        handleClickResetTimerBlock={handleClickResetTimerBlock}
                    />
                </AnimationSorting>
            </AnimationDelete>
        </>
    );
}

export default BlockContainer;
