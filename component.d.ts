import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
interface AnimationProps {
    animationname: AnimationName;
    byletter?: boolean;
    duration?: string;
    timing?: timing;
    delay?: string;
    iteration?: iteration;
    direction?: direction;
    fillmode?: fillmode;
}
type direction = "normal" | "reverse" | "alternate" | "alternate-reverse";
type fillmode = "none" | "forwards" | "backwards" | "both";
type iteration = "infinite" | number;
type timing = "ease" | "linear" | "ease-in" | "ease-out" | "ease-in-out";
interface AnimatedComponentProps extends AnimationProps {
    children: JSX.Element | JSX.Element[] | ReactNode | string | string[] | number | number[];
    animationProps?: AnimationProps;
}
type AnimationName = keyof typeof Animations;
/**
 *
 * @name AnimatedComponent
 *
 * @description
 * This Component is used to apply animation to any text.
 * Use animationname prop to apply animation.
 *
 * @param animationname - The name of the animation to be applied.
 * @param byletter - If true, the animation will be applied to each letter of the text.
 * @param duration - The duration of the animation.
 * @param timing - The timing function of the animation.
 * @param delay - The delay of the animation.
 * @param iteration - The number of times the animation should be repeated.
 * @param direction - The direction of the animation.
 * @param fillmode - The fillmode of the animation.
 *
 * @param children - The text to be animated.
 *
 * @example
 * import { AnimatedComponent } from "react-typewriter-effect";
 *
 * const App = () => {
 * return (
 * <AnimatedComponent
 * animationname="spin"
 * byletter={true}
 * duration="1s"
 * timing="ease"
 * delay="0s"
 * iteration="infinite"
 * direction="alternate"
 * fillmode="forwards"
 * >
 * Hello World!
 * </AnimatedComponent>
 * );
 * };
 *
 */
export declare const AnimatedComponent: FunctionComponent<PropsWithChildren<AnimatedComponentProps>>;
declare const Animations: {
    blur: import("styled-components").Keyframes;
    bounce: import("styled-components").Keyframes;
    effect3D: import("styled-components").Keyframes;
    flash: import("styled-components").Keyframes;
    float: import("styled-components").Keyframes;
    glowing: import("styled-components").Keyframes;
    jelly: import("styled-components").Keyframes;
    pulse: import("styled-components").Keyframes;
    shadow: import("styled-components").Keyframes;
    spin: import("styled-components").Keyframes;
    swing: import("styled-components").Keyframes;
    fadeIn: import("styled-components").Keyframes;
    fadeInFromLeft: import("styled-components").Keyframes;
    fadeInFromRight: import("styled-components").Keyframes;
    fadeInFromTop: import("styled-components").Keyframes;
    fadeInFromBottom: import("styled-components").Keyframes;
    fadeOut: import("styled-components").Keyframes;
    fadeOutToLeft: import("styled-components").Keyframes;
    fadeOutToRight: import("styled-components").Keyframes;
    fadeOutToTop: import("styled-components").Keyframes;
    fadeOutToBottom: import("styled-components").Keyframes;
    flip: import("styled-components").Keyframes;
    flipIn: import("styled-components").Keyframes;
    flipOut: import("styled-components").Keyframes;
    flipSlowDown: import("styled-components").Keyframes;
    flipFromTop: import("styled-components").Keyframes;
    flipToTop: import("styled-components").Keyframes;
    flipFromBottom: import("styled-components").Keyframes;
    flipToBottom: import("styled-components").Keyframes;
    flipFromLeftToCenter: import("styled-components").Keyframes;
    fold: import("styled-components").Keyframes;
    unfold: import("styled-components").Keyframes;
    hangOnLeft: import("styled-components").Keyframes;
    hangOnRight: import("styled-components").Keyframes;
    rotateSlowDown: import("styled-components").Keyframes;
    rotateCW: import("styled-components").Keyframes;
    rotateCCW: import("styled-components").Keyframes;
    shakeMix: import("styled-components").Keyframes;
    shakeHorizontal: import("styled-components").Keyframes;
    shakeVertical: import("styled-components").Keyframes;
    squeezeMix: import("styled-components").Keyframes;
    squeezeHorizontal: import("styled-components").Keyframes;
    squeezeVertical: import("styled-components").Keyframes;
    slideInFromLeft: import("styled-components").Keyframes;
    slideInFromRight: import("styled-components").Keyframes;
    slideOutToLeft: import("styled-components").Keyframes;
    slideOutToRight: import("styled-components").Keyframes;
    slideInFromTop: import("styled-components").Keyframes;
    slideInFromBottom: import("styled-components").Keyframes;
    slideOutToTop: import("styled-components").Keyframes;
    slideOutToBottom: import("styled-components").Keyframes;
    zoomIn: import("styled-components").Keyframes;
    zoomOut: import("styled-components").Keyframes;
    popIn: import("styled-components").Keyframes;
    popOut: import("styled-components").Keyframes;
};
export {};
