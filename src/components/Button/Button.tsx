import { EditorState } from "draft-js";
import React from "react";

interface ButtonProps {
  editorState: EditorState;
  inlineStyle: string;
  title: string;
  onClick: (inlineStyle: string) => void;
}

export const Button = ({ inlineStyle, title, onClick }: ButtonProps) => {
  return <button onClick={() => onClick(inlineStyle)}>{title}</button>;
};
