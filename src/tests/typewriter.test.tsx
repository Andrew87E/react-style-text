import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Typewriter } from "../index";

/**
 * @jest-environment jsdom
 */

jest.useFakeTimers();

describe("TypewriterComponent", () => {
  it("displays text one letter at a time", async () => {
    const textArray = ["Hello", "World", "Example"];
    render(<Typewriter datatext={textArray} />);

    // Initially, there should be no text
    textArray.forEach((text) => {
      expect(screen.queryByText(text)).toBeNull();
    });
    for (const word of textArray) {
      for (let i = 1; i <= word.length; i++) {
        // Advance timers for each letter
        act(() => {
          jest.advanceTimersByTime(500);
        });

        // Wait for the text to update
        const expectedText = word.substring(0, i);
        await waitFor(() => {
          expect(
            screen.getByText(expectedText, { exact: false })
          ).toBeInTheDocument();
        });
      }
    }
  });

  //   it("eventually displays the full text from the array", async () => {
  //     const textArray = ["Hello", "World"];
  //     render(<Typewriter dataText={textArray} />);

  //     let cumulativeTime = 0;
  //     const typingInterval = 500; // adjust this to match the typing speed of your component
  //     const initialDelay = 500; // adjust if there's an initial delay before typing starts

  //     for (const word of textArray) {
  //       // Advance timers for the whole word, plus any initial delay for the first word
  //       const advanceTime =
  //         word.length * typingInterval +
  //         (cumulativeTime === 0 ? initialDelay : 0);
  //       act(() => {
  //         jest.advanceTimersByTime(advanceTime);
  //       });
  //       cumulativeTime += advanceTime;

  //       // Check if the whole word is displayed
  //       await waitFor(() => {
  //         expect(screen.getByText(word)).toBeInTheDocument();
  //       });
  //     }
  //   });
});
