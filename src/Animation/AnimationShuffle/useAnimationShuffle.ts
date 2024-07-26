import {useEffect} from "react";
import {AnimationControls} from "framer-motion";
import {useAppDispatch} from "../../store/hooks.ts";
import {shuffleAnimationNotActive} from "../../store/Slices/animationSlice.ts";


export function useAnimationShuffle(isShuffling: boolean, controls: AnimationControls){
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isShuffling) {
            controls.start({
                x: [-90, 90, -90, 90, -50, 50, 0],
                y: [10, -10, 10, -10, 20, -20, 0],
                transition: {duration: 1},
            });
            dispatch(shuffleAnimationNotActive());
        }
    }, [isShuffling, controls, dispatch]);
}
