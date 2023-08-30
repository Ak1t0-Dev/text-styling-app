import { EditorState } from "draft-js";
import "./Button.css";

interface ButtonProps {
  editorState: EditorState;
  inlineStyle: string;
  title: string;
  onClick: (inlineStyle: string) => void;
}

export const Button = ({ inlineStyle, title, onClick }: ButtonProps) => {
  return (
    <span className="styleButton" onClick={() => onClick(inlineStyle)}>
      {title}
    </span>
  );
};
