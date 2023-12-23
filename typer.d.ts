import React from "react";
export type TypewriterProps = {
    datatext: string[];
    statictext?: string;
    cursorcolor?: string;
    typingspeed?: number;
};
/**
 *
 * @name Typewriter
 *
 * @description
 * A typewriter component that takes in an array of strings and types them out one by one.
 *
 * @prop datatext - An array of strings to be typed out.
 *
 * @prop statictext - A string that is displayed before the typewriter effect. Default is an empty string.
 *
 * @prop cursorcolor - The color of the cursor.
 *
 * @prop typingspeed - The speed at which the text is typed out in milliseconds. Default is 150ms
 *
 * @example
 * import { Typewriter } from "react-typewriter-effect";
 *
 * const App = () => {
 * return (
 * <Typewriter
 * datatext={["Hello World!", "Hello World Again!"]}
 * statictext="This is a "
 * cursorcolor="red"
 * typingspeed={150}
 * />
 * );
 * };
 *
 *
 */
export declare const Typewriter: React.FC<TypewriterProps>;
