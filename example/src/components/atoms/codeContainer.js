import React, { useRef } from "react";
import styled from "styled-components";
import swal from "sweetalert";

const CodeContainer = ({
  animationObject,
  animationType,
  duration,
  delay,
  direction,
  timingFunction,
  iterationCount,
  fillmode,
  interval,
}) => {
  const textAreaRef = useRef(null);
  const objectCode = `
  <AnimatedComponent
    key={index}
    animationProps={{
      animationname: "${animationType}",
      duration: "${duration}ms",
      delay: "${interval}ms",
      direction: "${direction}",
      timing: "${timingFunction}",
      iteration: ${iterationCount},
      fillmode: "${fillmode}",
    }}>
    React-Style-Text
  </AnimatedComponent>
  `.trim();

  const lettersCode = `
  const Letters = "React-Style-Text".split("")
  
  Letters.map((item, index) =>
  <AnimatedComponent
    key={index}
    animationProps={{
      animationname: "${animationType}",
      duration: "${duration}ms",
      delay: "${interval}ms",
      direction: "${direction}",
      timing: "${timingFunction}",
      iteration: ${iterationCount},
      fillmode: "${fillmode}",
    }}>
  {item}
  </AnimatedComponent>)
    `.trim();

  const typewriterCode = `<AnimatedComponent type="typewriter"
    dataText={[
    'Sushi',
    'Pizza',
    'Brötchen',
    'Salat'
  ]} />`.trim();

  return (
    <Container>
      <StyledCode
        onClick={() => {
          navigator.clipboard.writeText(textAreaRef.current.innerText);
          swal("Copied!", "Code copied to clipboard!", "success", {
            button: "Aww yiss!",
          });
        }}
        ref={textAreaRef}
      >
        {animationObject === "object" && objectCode}
        {animationObject === "letters" && lettersCode}
        {animationObject === "multiline" && typewriterCode}
      </StyledCode>
    </Container>
  );
};

const Container = styled.pre`
  margin: 0;
  display: block;
  position: relative;
  padding: 1rem 2rem;
  width: 25vw;
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  word-break: break-all;
  overflow-wrap: break-word;
  background-color: ${(props) => props.theme.colors.middle};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  overflow: scroll;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  ::selection {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
const StyledCode = styled.code`
  ::selection {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export default CodeContainer;
