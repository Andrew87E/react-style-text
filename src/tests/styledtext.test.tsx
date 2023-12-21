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
        data-testid="text"
        animationProps={{ animationname: "bounce" }}
      >
        Test DataText
      </StyledText>
    );
    expect(screen.getByTestId("text")).toBeInTheDocument();
    expect(await screen.getByText("Test DataText")).toBeInTheDocument();
  });
});
