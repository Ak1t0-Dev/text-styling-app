import "./Button.css";

interface ButtonProps {
  inlineStyle: string;
  title: string;
  type: Object;
  onClick: (inlineStyle: string, type: Object) => void;
}

export const Button = ({ inlineStyle, title, type, onClick }: ButtonProps) => {
  return (
    <span className="styleButton" onClick={() => onClick(inlineStyle, type)}>
      {title}
    </span>
  );
};
