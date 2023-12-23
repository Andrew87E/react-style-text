import React from "react";
import styled from "styled-components";
import { AnimatedComponent } from "react-style-text";
import ExternalLink from "../atoms/externalLink";

const Footer = () => {
  const me = "andrew87e";
  const itsaMe = me.split("");

  return (
    <FooterContainer>
      Made with
      <AnimatedComponent
        style={{ margin: "0px 10px", color: "red" }}
        animationProps={{
          animationname: "spin",
          duration: "2000ms",
          delay: "0ms",
          direction: "normal",
          timing: "linear",
          iteration: "infinite",
          fillmode: "none",
        }}
      >
        ❤
      </AnimatedComponent>
      by&nbsp;
      {itsaMe.map((letter, index) => (
        <AnimatedComponent
          key={index}
          animationProps={{
            animationname: "flipIn",
            duration: "2000ms",
            delay: ` ${index * 100}ms`,
            direction: "normal",
            timing: "ease-in-out",
            iteration: "1",
            fillmode: "none",
          }}
        >
          <ExternalLink
            // href="https://github.com/andrew87e"
            target="_blank"
            color="#5cbd6b"
          >
            {letter}
          </ExternalLink>
        </AnimatedComponent>
      ))}
      &nbsp; using React and styled-components 💅🏽
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
  background: radial-gradient(at left top, #000, #01030d);
`;

export default Footer;
