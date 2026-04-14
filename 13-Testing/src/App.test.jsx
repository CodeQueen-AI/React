import { render, screen } from "@testing-library/react";
import App from "./App";

test("button is rendered", () => {
  render(<App />);

  const button = screen.getByText("Click Me");

  expect(button).toBeInTheDocument();
});