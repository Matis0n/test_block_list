import {FC, ReactNode} from "react";
import {motion, AnimationControls} from "framer-motion";
import {useAnimationDelete} from "./useAnimationDelete.ts";

interface AnimationDeleteProps {
    id: string
    time: number
    controls: AnimationControls
    children: ReactNode
}

const AnimationDelete: FC<AnimationDeleteProps> = ({id, time, controls, children}) => {
    useAnimationDelete(id, time, controls)

    return (
        <motion.div
            animate={controls}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}>
            {children}
        </motion.div>
    );
}

export default AnimationDelete;
