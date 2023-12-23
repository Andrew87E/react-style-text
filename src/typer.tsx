import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface CursorProps {
  cursorcolor?: string;
}

export type TypewriterProps = {
  datatext: string[];
  statictext?: string;
  cursorcolor?: string;
};

/**
 *
 * @name Typewriter
 *
 * @description
 * A typewriter component that takes in an array of strings and types them out one by one.
 *
 * @param datatext - An array of strings to be typed out.
 *
 * @param statictext - A string that is displayed before the typewriter effect.
 *
 * @param cursorcolor - The color of the cursor.
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
    />
  );
};

const Typer: React.FC<TypewriterProps> = ({
  statictext = "",
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

export default Typer;

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
