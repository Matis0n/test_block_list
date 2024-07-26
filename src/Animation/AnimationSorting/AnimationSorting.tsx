import {FC, ReactNode} from "react";
import {motion} from "framer-motion";
import {useAnimationSorting} from "./useAnimationSorting.ts";


interface AnimationSortingProps {
    sortOrder: 'none' | 'asc' | 'desc'
    time: number
    children: ReactNode
}

const AnimationSorting: FC<AnimationSortingProps> = ({sortOrder, time, children}) => {
    const {variantsAnimation, animation} = useAnimationSorting(sortOrder, time)

    return (
        <motion.div variants={variantsAnimation} animate={animation}>
            {children}
        </motion.div>
    );
}

export default AnimationSorting;