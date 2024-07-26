import {useEffect} from "react";
import {AnimationControls} from "framer-motion";
import {useAppDispatch} from "../../store/hooks.ts";
import {removeBlock} from "../../store/Slices/blockSlice.ts";

export function useAnimationDelete(id: string, time: number, controls: AnimationControls) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (time <= 0) {
            controls.start({
                opacity: 0,
                scale: 0,
                transition: {duration: 0.9},
            });
            setTimeout(() => {
                dispatch(removeBlock(id));
            }, 500);
        }
    }, [id, time, controls, dispatch]);
}

