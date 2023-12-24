import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface CursorProps {
  cursorcolor?: string;
}

export interface TypewriterProps extends React.HTMLAttributes<HTMLElement> {
  datatext: string[];
  statictext?: string;
  cursorcolor?: string;
  typingspeed?: number;
}

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
export const Typewriter: React.FC<TypewriterProps> = (props) => {
  return (
    <Typer
      statictext={props.statictext}
      datatext={props.datatext}
      cursorcolor={props.cursorcolor}
      typingspeed={props.typingspeed || 150}
    />
  );
};

const Typer: React.FC<TypewriterProps> = ({
  statictext,
  datatext,
  cursorcolor,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % datatext.length;
    const fullText = datatext[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );
    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <div>
      {statictext}&nbsp;
      <span>{text}</span>
      <Cursor cursorcolor={cursorcolor}></Cursor>
    </div>
  );
};

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Cursor = styled.span<CursorProps>`
  margin-left: 2px;
  border-left: 3px solid ${(props) => props.cursorcolor};
  animation: ${blink} 0.7s steps(1) infinite;
`;
