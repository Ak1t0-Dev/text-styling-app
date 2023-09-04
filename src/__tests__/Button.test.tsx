import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button/Button";

describe("Button component check", () => {
  it("should render a button", () => {
    const inlineStyle = "BOLD";
    const title = "bold";
    const type = {};
    const onClick = jest.fn();

    render(
      <Button
        inlineStyle={inlineStyle}
        title={title}
        type={type}
        onClick={onClick}
      />
    );

    const buttonElement = screen.getByText(title);

    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick when no type is provided", () => {
    const inlineStyle = "ITALIC";
    const title = "italic";
    const type = {};
    const onClick = jest.fn();

    render(
      <Button
        inlineStyle={inlineStyle}
        title={title}
        type={type}
        onClick={onClick}
      />
    );

    const buttonElement = screen.getByText(title);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledWith(inlineStyle, type);
  });
});

it("should call onClick when type is provided", () => {
  const inlineStyle = "red";
  const title = "red";
  const type = { color: "red" };
  const onClick = jest.fn();

  render(
    <Button
      inlineStyle={inlineStyle}
      title={title}
      type={type}
      onClick={onClick}
    />
  );

  const buttonElement = screen.getByText(title);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledWith(inlineStyle, type);
});
