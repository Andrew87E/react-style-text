import React from "react";
import styled from "styled-components";
import { StyledText } from "react-style-text";
import ExternalLink from "../atoms/externalLink";

const Footer = () => {
  return (
    <FooterContainer>
      Made with
      <StyledText
        style={{ margin: "0px 10px", color: "red" }}
        onAnimationEnd={() => console.log("animation ended")}
        animationProps={{
          animationname: "spin",
          duration: "2000ms",
          delay: "0ms",
          direction: "normal",
          timing: "linear",
          iteration: "infinite",
          fillMode: "none",
        }}
      >
        &nbsp;❤&nbsp;
      </StyledText>
      by{" "}
      <ExternalLink
        href="https://github.com/andrew87e"
        target="_blank"
        margin="0px 10px"
        color="#5cbd6b"
      >
        andrew87e
      </ExternalLink>{" "}
      using React and styled-components 💅🏽
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 40px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.middle};
  // background-color: ${(props) => props.theme.colors.secondary};
  background: radial-gradient(at left top, #000, #01030D);
`;

export default Footer;
