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
      <StyledText animationProps={{ animationname: "bounce" }}>
        Test DataText
      </StyledText>
    );
    expect(await screen.getByText("Test DataText")).toBeInTheDocument();
  });
});
