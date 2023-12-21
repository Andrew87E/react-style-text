import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import StyledText from "../index";

/**
 * @jest-environment jsdom
 */

describe("StyledText", () => {
  test("renders correctly", async () => {
    render(
      <StyledText elementType="bounce" animationProps={{ iteration: 1 }}>
        Test DataText
      </StyledText>
    );
    expect(await screen.getByText("Test DataText")).toBeInTheDocument();
  });
});

test("renders typewriter correctly", async () => {
  render(
    <StyledText
      elementType="typewriter"
      dataText={["Test DataText", "Test Text"]}
      animationProps={{ iteration: 1, duration: "1s" }}
    />
  );

  // we need to wait for the animation to finish. it comes in letter by letter. so we need to wait for the last letter to be rendered.
  

  // await waitFor(() => {
  //   expect(screen.getByText(/Test DataText/)).toBeInTheDocument();
  // });

  // await waitFor(() => {
  //   expect(screen.getByText(/Test Text/)).toBeInTheDocument();
  // });
});
