import {useEffect} from "react";
import {useAppDispatch,useAppSelector} from "../../store/hooks.ts";
import {randomBlocksByDefault} from "../../store/Slices/blockSlice.ts";
import BlockContainer from "./BlockContainer.tsx";

const BlockContainerWrapper = () => {
    const dispatch = useAppDispatch();
    const blocks = useAppSelector((state) => state.blocks.blocks);

    useEffect(() => {
        const initialBlocksCount = Math.floor(Math.random() * 10) + 1;
        for (let i = 0; i < initialBlocksCount; i++) {
            dispatch(randomBlocksByDefault());
        }
    }, [dispatch]);

    return (
        <>
            {blocks.map((block) => (
                <BlockContainer key={block.id} block={block}/>
            ))}
        </>
    );
}

export default BlockContainerWrapper;
