import {FC} from "react";
import {AnimationControls} from "framer-motion";
import {useAnimationShuffle} from "./useAnimationShuffle.ts";

interface AnimationShuffleProps {
    isShuffling: boolean
    controls: AnimationControls

}

const AnimationShuffle: FC<AnimationShuffleProps> = ({isShuffling, controls}) => {
    useAnimationShuffle(isShuffling, controls)

    return null;
}

export default AnimationShuffle;
