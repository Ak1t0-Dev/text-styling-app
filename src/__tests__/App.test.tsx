import { render, screen } from "@testing-library/react";
import App from "../App";

it("should have a title of this app", () => {
  render(<App />);
  const element = screen.getByText(/text styling app/i);
  expect(element).toBeInTheDocument();
});
