import React, { useState } from "react";
import styled from "styled-components";
import { AnimatedComponent } from "react-style-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCode } from "@fortawesome/free-solid-svg-icons";
import SelectPanel from "../atoms/selectPanel";
import RoundButton from "../atoms/roundButton";
import Modal from "../atoms/modal";

const AnimationTypes = [
  "blur",
  "bounce",
  "effect3D",
  "flash",
  "glowing",
  "jelly",
  "pulse",
  "shadow",
  "spin",
  "swing",

  "fadeIn",
  "fadeInFromLeft",
  "fadeInFromRight",
  "fadeInFromTop",
  "fadeInFromBottom",
  "fadeOut",
  "fadeOutToLeft",
  "fadeOutToRight",
  "fadeOutToTop",
  "fadeOutToBottom",

  "fold",
  "unfold",

  "hangOnLeft",
  "hangOnRight",

  "shakeMix",
  "shakeHorizontal",
  "shakeVertical",
  "squeezeMix",
  "squeezeHorizontal",
  "squeezeVertical",

  "flip",
  "flipIn",
  "flipOut",
  "flipSlowDown",
  "flipFromTop",
  "flipToTop",
  "flipFromBottom",
  "flipToBottom",
  "flipFromLeftToCenter",

  "popIn",
  "popOut",

  "slideInFromLeft",
  "slideInFromRight",
  "slideOutToLeft",
  "slideOutToRight",
  "slideInFromTop",
  "slideInFromBottom",
  "slideOutToTop",
  "slideOutToBottom",

  "rotateSlowDown",
  "rotateIn",
  "rotateOut",

  "zoomIn",
  "zoomOut",
];

const ExamplePage = ({}) => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [animationType, setAnimationType] = useState(selectedItems[0]);
  const [counter, setCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const getModalContent = (selectedItems) => {
    let itemsText = "";

    selectedItems.forEach((element, index) => {
      index === selectedItems.length - 1
        ? (itemsText = itemsText + `"${element}"`)
        : (itemsText = itemsText + `"${element}", `);
    });

    return `
import React, { useState } from 'react'
import {AnimatedComponent} from 'react-style-text'

const AnimationsForChaining = [${itemsText}]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType(selectedItems[animationIndex+1])
  }

  return (
    <AnimatedComponent
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      fillmode="forwards"
      iteration={1}>
      react-style-text
    </AnimatedComponent>
  )
}
`;
  };

  const handleChainAnimation = () => {
    setCounter(counter + 1);
    setAnimationType(selectedItems[counter + 1]);
    getModalContent(selectedItems);
  };

  const handlePlayAnimationChain = () => {
    setCounter(0);
    setAnimationType(selectedItems[0]);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ExampleContainer>
      <div>
        <ExampleText>Choose animations for chaining:</ExampleText>
        <SelectPanel
          items={AnimationTypes}
          onSelectItem={setSelectedItems}
          selectedItems={selectedItems}
        />
      </div>
      <ResultContainer className="resultContainer">
        <ResultField>
          <AnimatedComponent
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="1000ms"
            timing="linear"
            fillmode="forwards"
            iteration={1}
          >
            react-style-text
          </AnimatedComponent>
        </ResultField>
        <ButtonGroupContainer>
          <RoundButton
            title={"play chained animation"}
            margin="0px 10px"
            onClick={handlePlayAnimationChain}
            disabled={selectedItems.length === 0}
          >
            <FontAwesomeIcon icon={faPlay} />
          </RoundButton>
          <RoundButton
            title={"show code"}
            margin="0px 10px"
            onClick={handleModalOpen}
            disabled={selectedItems.length === 0}
          >
            <FontAwesomeIcon icon={faCode} />
          </RoundButton>
        </ButtonGroupContainer>
      </ResultContainer>

      <Modal
        isOpen={isModalOpen}
        onCloseModal={handleModalClose}
        content={getModalContent(selectedItems).trim()}
      />
    </ExampleContainer>
  );
};

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 230px);
  padding: 20px 100px;
`;

const ExampleText = styled.div`
  display: block;
  width: 100%;
  margin: 20px 0px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.middle};
`;

const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 600px;
  min-height: 150px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ResultField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: initial;
  font-size: calc(1rem + 4vmax);
  font-weight: 100;
  letter-spacing: -2;
  color: ${(props) => props.theme.colors.primary};
`;

const ButtonGroupContainer = styled.div`
  position: absolute;
  bottom: 60px;
  right: 100px;
`;

export default ExamplePage;
