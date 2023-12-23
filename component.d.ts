import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
interface AnimationProps {
    animationname: AnimationName;
    byletter?: boolean;
    duration?: string;
    timing?: string;
    delay?: string;
    iteration?: number;
    direction?: string;
    fillmode?: string;
}
interface StyledTextProps {
    children: JSX.Element | JSX.Element[] | ReactNode | string | string[] | number | number[];
    animationProps?: AnimationProps;
}
export type TypewriterProps = {
    datatext: string[];
    statictext?: string;
    cursorcolor?: string;
};
type AnimationName = keyof typeof Animations;
/**
 *
 * @name StyledText
 *
 * @description
 * This Component is used to apply animation to any text.
 * Use animationname prop to apply animation.
 *
 *
 *
 */
export declare const StyledText: FunctionComponent<PropsWithChildren<StyledTextProps>>;
/**
 *
 *
 *
 */
export declare const Typewriter: React.FC<TypewriterProps>;
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
    rotateACW: import("styled-components").Keyframes;
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
