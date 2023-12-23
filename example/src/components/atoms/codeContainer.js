import React from 'react'
import styled from 'styled-components'

const CodeContainer = ({
  animationObject,
  animationType,
  duration,
  delay,
  direction,
  timingFunction,
  iterationCount,
  fillMode,
  interval
}) => {
  return (
    <Container>
      <StyledCode>
        {
          animationObject === "object" &&
          `<StyledText
  type="${animationType}"
  duration="${duration}ms"
  delay="${delay}s"
  direction="${direction}"
  timing="${timingFunction}"
  iteration="${iterationCount}"
  fillMode="${fillMode}">
  React-Style-Text
</StyledText>`.trim()
        }

{
  animationObject === "letters" &&
  `Letters.map((letter, index) =>
      <StyledText
        type="${animationType}"
        duration="${duration}ms"
        delay="index * ${interval}ms"
        direction="${direction}"
        timing="${timingFunction}"
        iteration="${iterationCount}"
        fillMode="${fillMode}">
        {letter}
      </StyledText>)`.trim()

}

{
  animationObject === "multiline" &&
  `<StyledText type="typewriter"
  dataText={[
  'Sushi',
  'Pizza',
  'Brötchen',
  'Salat'
]} />`.trim()

}

      </StyledCode>
    </Container>
  )
}

const Container = styled.pre`
  margin: 0;
  display: block;
  position: relative;
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.white};
  word-break: break-all;
  overflow-wrap: break-word;
  background-color: ${props => props.theme.colors.middle};
  border: 2px solid  ${props => props.theme.colors.primary};
  border-radius: 8px;
  overflow: auto;

  ::selection {
    background-color: ${props => props.theme.colors.primary};
  }
`
const StyledCode = styled.code`
  ::selection {
    background-color: ${props => props.theme.colors.primary};
  }
`

export default CodeContainer