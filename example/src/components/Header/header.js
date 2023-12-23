import React, { useRef } from "react";
import styled from "styled-components";
import StyledLink from "../atoms/link";
import ExternalLink from "../atoms/externalLink";
import { AnimatedComponent } from "react-style-text";

const Header = () => {
  const textAreaRef = useRef(null);
  return (
    <NavBar>
      <ForkRibbon
        href="https://github.com/andrew87e/react-style-text"
        target="_blank"
      >
        <img
          width="149"
          height="149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
        />
      </ForkRibbon>
      <StyledH1>
        <AnimatedComponent
            animationname: "fadeInFromTop",
            duration: "1000ms",
            delay: "0ms",
            direction: "normal",
            timing: "ease-in-out",
            iteration: "1",
            fillmode: "none",
        >
          <StyledLink color="#fff" noTransition={true} to="/">
            React-Style-Text
          </StyledLink>
        </AnimatedComponent>
      </StyledH1>

      <AnimatedComponent
        animationProps={{
          animationname: "fadeIn",
          duration: "1000ms",
          delay: "0ms",
          direction: "normal",
          timing: "ease-in-out",
          iteration: "1",
          fillmode: "none",
        }}
      >
        <StyledSubHeader>
          A library for animated texts built with React and CSS Animation.
          <LinkGroupContainer>
            {/* <StyledLink to="/react-style-text/example" color="#0d47a1" margin="0px 30px">More Examples</StyledLink> */}
            <ExternalLink
              href="https://github.com/andrew87e/react-style-text/blob/master/README.md"
              target="_blank"
              color="#5cbd6b"
            >
              Documentation
            </ExternalLink>
          </LinkGroupContainer>
        </StyledSubHeader>
      </AnimatedComponent>
      <AnimatedComponent
          animationname: "fadeInFromBottom",
          duration: "1000ms",
          delay: "0ms",
          direction: "normal",
          timing: "ease-in-out",
          iteration: "1",
          fillmode: "none",
      >
        <InstallInfoBar>
          <StyledCode
            onClick={() => {
              navigator.clipboard.writeText(textAreaRef.current.innerText);
              swal("Copied!", "Code copied to clipboard!", "success", {
                button: "Aww yiss!",
              });
            }}
            ref={textAreaRef}
          >
            npm i react-style-text
          </StyledCode>
        </InstallInfoBar>
      </AnimatedComponent>
    </NavBar>
  );
};

const StyledCode = styled.code`
  text-shadow: 0.5px 0.5px 0px #5cbd6b;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100vw;
  height: 190px;
  padding: 20px 100px;
  // background-color: ${(props) => props.theme.colors.primary};
  background: radial-gradient(at center bottom, #323234, #01030d);
`;

const ForkRibbon = styled.a`
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledH1 = styled.h1`
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -2;
  margin: 0;
`;

const StyledSubHeader = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;
const LinkGroupContainer = styled.div`
  display: inline;
  float: right;
`;

const InstallInfoBar = styled.div`
  width: 100%;
  margin: 5px 0;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 0;
  font-size: 1rem;
  padding: 12px 25px;
  cursor: pointer;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export default Header;
