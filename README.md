# react-style-text

[![Tests](https://github.com/Andrew87E/react-style-text/actions/workflows/test.yml/badge.svg)](https://github.com/Andrew87E/react-style-text/actions/workflows/test.yml)
[![Release](https://github.com/Andrew87E/react-style-text/actions/workflows/release.yml/badge.svg)](https://github.com/Andrew87E/react-style-text/actions/workflows/release.yml)
[![npm version](https://badge.fury.io/js/react-style-text.svg)](https://badge.fury.io/js/react-style-text)

<!-- [![npm](https://img.shields.io/npm/dt/react-style-text.svg)](https://www.npmjs.com/package/react-style-text) -->

[![npm](https://img.shields.io/npm/l/react-style-text.svg)](https://www.npmjs.com/package/react-style-text)

React Component to show animated text and objects, built with [styled-components](https://www.styled-components.com/).

The Component provides regular animation for common object and some animation effects especially for typography like letters and multi-line text.

<!-- **View [Demo and Playground](https://yidaoj.github.io/react-style-text/)** -->

## Installation

Install via npm:

```
npm i react-style-text
```

Install via yarn:

```
yarn add react-style-text
```

## Usage

To use react-style-text in your react project, wrap the content with a `StyledText` component and customize the animation with relevant properties.

```jsx
import React from "react";
import { StyledText } from "react-style-text";

const MyAnimatedTypo = () => {
  return (
    <StyledText
    animationProps={{
      animationname="animation_type"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none"
    }}
    >
      Content...
    </StyledText>
  );
};
```

### Available properties

|    Property     | Corresponding Animation Property |     Data Type     | Default Value | Property Unit |
| :-------------: | :------------------------------: | :---------------: | :-----------: | :-----------: |
| `animationname` |         `animation-name`         |     `String`      |   "bounce"    |       -       |
|   `duration`    |       `animation-duration`       |     `String`      |     "1s"      |  `s` or `ms`  |
|     `delay`     |        `animation-delay`         |     `String`      |     "0s"      |  `s` or `ms`  |
|   `direction`   |      `animation-direction`       |     `String`      |  "alternate"  |       -       |
|    `timing`     |   `animation-timing-function`    |     `String`      |    "ease"     |       -       |
|   `iteration`   |   `animation-iteration-count`    | `Number` `String` |  "infinite"   |       -       |
|   `fillMode`    |      `animation-fill-mode`       |     `String`      |    "none"     |       -       |

### Available animations

- For entity object and letters

  | Common effects | Fade             | Flip                 | Slide             |
  | :------------- | :--------------- | :------------------- | :---------------- |
  | blur           | fadeIn           | flip                 | slideInFromLeft   |
  | bounce         | fadeInFromLeft   | flipIn               | slideInFromRight  |
  | effect3D       | fadeInFromRight  | flipOut              | slideOutToLeft    |
  | flash          | fadeInFromTop    | flipSlowDown         | slideOutToRight   |
  | float          | fadeInFromBottom | flipFromTop          | slideInFromTop    |
  | glowing        | fadeOut          | flipToTop            | slideInFromBottom |
  | jelly          | fadeOutToLeft    | flipFromBottom       | slideOutToTop     |
  | pulse          | fadeOutToRight   | flipToBottom         | slideOutToBottom  |
  | shadow         | fadeOutToTop     | flipFromLeftToCenter |                   |
  | spin           | fadeOutToBottom  |                      |                   |
  | swing          |                  |                      |                   |

&nbsp;

| Fold   | Hang        | Zoom    | Pop    |
| :----- | :---------- | :------ | :----- |
| fold   | hangOnLeft  | zoomIn  | popIn  |
| unfold | hangOnRight | zoomOut | popOut |

&nbsp;

| Rotate         | Shake           | Squeeze           |
| -------------- | --------------- | ----------------- |
| rotateSlowDown | shakeMix        | squeezeMix        |
| rotateCW       | shakeHorizontal | squeezeHorizontal |
| rotateACW      | shakeVertical   | squeezeVertical   |

- For multiline texts

  - `typewriter`

## Chain Animation

A string array of animation names used to wrap the animations you want to chain.

```jsx
import React, { useState } from "react";
import {StyledText} from "react-style-text";

const AnimationsForChaining = [
  "swing",
  "flipSlowDown",
  "fadeOutToBottom",
  "jelly",
];

const AnimationChain = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setCounter(animationIndex + 1);
    setAnimationType(selectedItems[animationIndex + 1]);
  };

  return (
    <StyledText
      onAnimationEnd={handleChainAnimation}
      animationProps={{
      type={animationType}
      duration="1000ms"
      timing="linear"
      iteration={1}
    }}
    >
      StyledText
    </StyledText>
  );
};
```

## Typewriter Animation

A string array of animation names used to wrap the animations you want to chain.

```jsx

import React, { useState } from "react";
import { Typewriter } from "react-style-text";

const MyTypewriter = () => {
  const [text, setText] = useState<string[]>(["Hello World!", "Hello React!"]);

  return (
    <Typewriter
      dataText={text}
      cursorColor="green"
      heading="Example Text"
    />
  );
};
```

## [License](https://github.com/Andrew87E/Horiseon-Marketing/blob/main/LICENSE)

MIT © [Andrew Edwards](https://github.com/andrew87e)
