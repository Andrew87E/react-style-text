import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StyledText } from "../index";

/**
 * @jest-environment jsdom
 */

describe("StyledText", () => {
  test("renders correctly", async () => {
    render(
      <StyledText
        animationname="bounce"
        direction="normal"
        fillmode="backwards"
        duration="1s"
        delay="0s"
        iteration="infinite"
        timing="ease"
        
      >
        Test DataText
      </StyledText>
    );

    expect(await screen.getByText("Test DataText")).toBeInTheDocument();
  });
});
