import { render, screen } from "@testing-library/react";
import { TextEditor } from "../components/TextEditor/TextEditor";

describe("element check", () => {
  it("should have a bold style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("bold");
    expect(element).toBeInTheDocument();
  });

  it("should have a italic style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("italic");
    expect(element).toBeInTheDocument();
  });

  it("should have a red style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("red");
    expect(element).toBeInTheDocument();
  });

  it("should have a orange style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("orange");
    expect(element).toBeInTheDocument();
  });

  it("should have a yellow style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("yellow");
    expect(element).toBeInTheDocument();
  });

  it("should have a green style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("green");
    expect(element).toBeInTheDocument();
  });

  it("should have a blue style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("blue");
    expect(element).toBeInTheDocument();
  });

  it("should have a purple style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("purple");
    expect(element).toBeInTheDocument();
  });

  it("should have a black style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("black");
    expect(element).toBeInTheDocument();
  });

  it("should have a 8px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("8px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 12px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("12px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 16px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("16px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 20px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("20px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 24px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("24px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 28px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("28px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 32px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("32px");
    expect(element).toBeInTheDocument();
  });

  it("should have a 36px style button", () => {
    render(<TextEditor />);
    const element = screen.getByText("36px");
    expect(element).toBeInTheDocument();
  });

  it("should have a textbox", () => {
    render(<TextEditor />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });

  it("should have a placeholder", () => {
    render(<TextEditor />);
    const element = screen.getByText(/type something/i);
    expect(element).toBeInTheDocument();
  });

  // test uncovered line in cypress
});
