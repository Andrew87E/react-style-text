import React from "react";
import { AnimatedComponent, Typewriter } from "react-style-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faCode } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Select from "../atoms/selectMenu";
import RoundButton from "../atoms/roundButton";
import RangeController from "../atoms/rangeController";
import Checkbox from "../atoms/checkbox";
import CodeContainer from "../atoms/codeContainer";
import {
  TimingFunctionItems,
  DirectionItems,
  FillModeItems,
  AnimationTypes,
} from "./static";

const Text = "react-style-text";
const Letters = Text.split("");
const borderColor = "#000";

const Playground = () => {
  const [counter, setCounter] = React.useState(0);
  const [animationObject, setAnimationObject] = React.useState("object");
  const [animationType, setAnimationType] = React.useState("fadeIn");
  const [isIterationDisabled, setIsIterationDisabled] = React.useState(false);
  const [duration, setDuration] = React.useState(1000);
  const [delay, setDelay] = React.useState(0);
  const [interval, setInterval] = React.useState(100);
  const [iterationCount, setIterationCount] = React.useState(1);
  const [timingFunction, setTimingFunction] = React.useState("ease");
  const [direction, setDirection] = React.useState("normal");
  const [fillmode, setFillMode] = React.useState("none");
  const [initialAnimationFinished, setInitialAnimationFinished] =
    React.useState(false);
  const [secondaryAnimationFinished, setSecondaryAnimationFinished] =
    React.useState(false);

  const handleIterationDisable = () => {
    setIsIterationDisabled(!isIterationDisabled);
    if (isIterationDisabled) {
      setIterationCount(5);
    } else {
      setIterationCount("infinite");
    }
  };

  const handleSelectType = (event) => {
    setAnimationType(event.target.value);
  };

  const handleReplay = () => {
    setCounter(counter + 1);
  };

  return (
    <PlaygroundContainer>
      <AnimatedComponent
        onAnimationEnd={() => setInitialAnimationFinished(true)}
        animationProps={{
          animationname: "fadeInFromLeft",
          duration: "1000ms",
          delay: "0ms",
          direction: "normal",
          timing: "ease-in-out",
          iteration: "1",
          fillmode: "none",
        }}
      >
        <FormContainer className="playground_form">
          {/* when initialAnimationFinished is true we want to play this animation */}

          <StyledForm>
            <Select
              items={["object", "letters", "multiline"]}
              label="presences"
              handleSelect={(event) => setAnimationObject(event.target.value)}
            />
            <RangeController
              label="duration"
              initialValue={duration}
              min={500}
              max={2000}
              step={100}
              unit="ms"
              onChange={(event) => setDuration(event.target.value)}
            />
            {animationObject === "object" && (
              <RangeController
                label="delay"
                initialValue={0}
                min={0}
                max={20}
                step={1}
                unit="s"
                onChange={(event) => setDelay(event.target.value)}
              />
            )}

            {animationObject === "letters" && (
              <RangeController
                label="delay of each letter"
                initialValue={100}
                min={100}
                max={2000}
                step={100}
                unit="ms"
                onChange={(event) => setInterval(event.target.value)}
              />
            )}

            <RowContainer>
              <RangeController
                label="iteration"
                disabled={isIterationDisabled}
                min={1}
                max={20}
                step={1}
                unit=""
                initialValue={iterationCount}
                optionalValue={isIterationDisabled ? "infinite" : undefined}
                onChange={(event) => setIterationCount(event.target.value)}
              />
              <Checkbox label="infinite" onClick={handleIterationDisable} />
            </RowContainer>
            <Select
              items={TimingFunctionItems}
              label="timing-function"
              handleSelect={(event) => setTimingFunction(event.target.value)}
            />
            <Select
              items={DirectionItems}
              label="direction"
              handleSelect={(event) => setDirection(event.target.value)}
            />
            <Select
              items={FillModeItems}
              label="fill-mode"
              handleSelect={(event) => setFillMode(event.target.value)}
            />
          </StyledForm>

          {initialAnimationFinished && (
            <AnimatedComponent
              onAnimationEnd={() => setSecondaryAnimationFinished(true)}
              animationProps={{
                animationname: "unfold",
                duration: "1000ms",
                delay: "0ms",
                direction: "normal",
                timing: "ease-in-out",
                iteration: "1",
                fillmode: "none",
              }}
            >
              <div style={{ display: "flex" }}>
                {secondaryAnimationFinished &&
                  "Click to copy code".split("").map((letter, index) => (
                    <AnimatedComponent
                      key={index}
                      style={{ cursor: "pointer", color: "#fff" }}
                      animationProps={{
                        animationname: "fadeIn",
                        duration: "1000ms",
                        delay: `${index * 10}ms`,
                        direction: "normal",
                        timing: "linear",
                        iteration: 1,
                        fillmode: "forwards",
                      }}
                    >
                      {letter}
                    </AnimatedComponent>
                  ))}
              </div>
              <CodeContainer
                animationObject={animationObject}
                animationType={animationType}
                duration={duration}
                delay={delay}
                direction={direction}
                timingFunction={timingFunction}
                iterationCount={iterationCount}
                fillmode={fillmode}
                interval={interval}
              />
            </AnimatedComponent>
          )}
        </FormContainer>
      </AnimatedComponent>

      <ResultContainer className="resultContainer">
        <ResultField>
          {animationObject === "object" && (
            <AnimatedComponent
              key={counter}
              animationProps={{
                animationname: animationType,
                duration: `${duration}ms`,
                delay: `${interval}ms`,
                direction: direction,
                timing: timingFunction,
                iteration: iterationCount,
                fillmode: fillmode,
              }}
            >
              {Text}
            </AnimatedComponent>
          )}

          {animationObject === "letters" && (
            <LettersContainer key={counter}>
              {Letters.map((item, index) => (
                <AnimatedComponent
                  key={index}
                  animationProps={{
                    animationname: animationType,
                    duration: `${duration}ms`,
                    delay: `${index * interval}ms`,
                    direction: direction,
                    timing: timingFunction,
                    iteration: iterationCount,
                    fillmode: fillmode,
                  }}
                >
                  {item}
                </AnimatedComponent>
              ))}
            </LettersContainer>
          )}

          {animationObject === "multiline" && (
            <Typewriter
              key={counter}
              heading="Eat what you love:"
              dataText={["Sushi", "Pizza", "Brötchen", "Salat"]}
              cursorColor="#2196f3"
            />
          )}
        </ResultField>

        <EffectController>
          <AnimatedComponent
            animationProps={{
              animationname: "slideInFromTop",
              duration: "3000ms",
              delay: "0ms",
              direction: "normal",
              timing: "ease-in-out",
              iteration: "1",
              fillmode: "none",
            }}
          >
            <Select
              hasOptGroup={animationObject !== "multiline"}
              items={
                animationObject === "multiline"
                  ? ["typewriter"]
                  : AnimationTypes
              }
              width="400px"
              height="45px"
              fontSize="1.25rem"
              handleSelect={handleSelectType}
            />
          </AnimatedComponent>
          {secondaryAnimationFinished ? (
            <AnimatedComponent
              animationProps={{
                animationname: "rotateSlowDown",
                duration: "3000ms",
                delay: "0ms",
                direction: "normal",
                timing: "ease-in-out",
                iteration: "1",
                fillmode: "none",
              }}
            >
              <RoundButton title={"replay animation"} onClick={handleReplay}>
                <FontAwesomeIcon icon={faRedo} />
              </RoundButton>
            </AnimatedComponent>
          ) : (
            <div style={{ width: "95px" }} />
          )}
        </EffectController>
      </ResultContainer>
    </PlaygroundContainer>
  );
};

const PlaygroundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0 5rem;
  height: calc(100vh - 230px);
  background: radial-gradient(at center top, #323234, #01030d);
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  min-width: 300px;
  height: calc(80vh);
  z-index: 10;
  align-self: flex-start;

  @media (min-width: 1080px) {
    margin-left: 150px;
  }
`;
const StyledForm = styled.form`
  position: relative;
  width: 25vw;
  border-radius: 3px;
  margin-bottom: 5rem;
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ResultContainer = styled.div`
  display: flex;
  height: 100%;
  width: calc(100vw - 400px);
  min-width: 600px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ResultField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 500px;
  background-color: initial;
  font-size: calc(0.6rem + 4vmax);
  font-weight: 100;
  letter-spacing: -2;
  color: ${(props) => props.theme.colors.primary};
  text-border: 1px solid ${(props) => props.theme.colors.primary};
  text-shadow: 1px 1px 0 ${borderColor}, -1px 1px 0 ${borderColor},
    1px -1px 0 ${borderColor}, -1px -1px 0 ${borderColor},
    0px 1px 0 ${borderColor}, 0px -1px 0 ${borderColor},
    -1px 0px 0 ${borderColor}, 1px 0px 0 ${borderColor},
    2px 2px 0 ${borderColor}, -2px 2px 0 ${borderColor},
    2px -2px 0 ${borderColor}, -2px -2px 0 ${borderColor},
    0px 2px 0 ${borderColor}, 0px -2px 0 ${borderColor},
    -2px 0px 0 ${borderColor}, 2px 0px 0 ${borderColor},
    1px 2px 0 ${borderColor}, -1px 2px 0 ${borderColor},
    1px -2px 0 ${borderColor}, -1px -2px 0 ${borderColor},
    2px 1px 0 ${borderColor}, -2px 1px 0 ${borderColor},
    2px -1px 0 ${borderColor}, -2px -1px 0 ${borderColor};
`;
const LettersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EffectController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Playground;
