export function useAnimationSorting(sortOrder: 'none' | 'asc' | 'desc', time: number) {
    const variantsAnimation = {
        initial: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
            },
        },
        animate: {
            y: -20,
            opacity: 0,
            transition: {
                duration: 0.01,
            },
        },
    };
    const animation = sortOrder !== 'none' && time === 20 ? 'animate' : 'initial';
    return {variantsAnimation, animation}
}
