import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("button in Home component", () => {
  render(<Home />);
  const buttonElement = screen.getByRole("button", { name: /hi/i });
  expect(buttonElement).toBeDefined();
});
