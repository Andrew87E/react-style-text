import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AnimatedComponent } from "../index";

/**
 * @jest-environment jsdom
 */

describe("AnimatedComponent", () => {
  test("renders correctly", async () => {
    render(
      <AnimatedComponent
        animationname="bounce"
        direction="normal"
        fillmode="backwards"
        duration="1s"
        delay="0s"
        iteration="infinite"
        timing="ease"
      >
        Test DataText
      </AnimatedComponent>
    );

    expect(await screen.getByText("Test DataText")).toBeInTheDocument();
  });
});
