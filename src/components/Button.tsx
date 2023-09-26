import { ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
