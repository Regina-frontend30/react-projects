import { FC, ButtonHTMLAttributes } from "react";
import { Loader } from "../Loader";
import "./Button.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  kind?: "primary" | "secondary";
}

export const Button: FC<IButtonProps> = ({
  isLoading,
  isDisabled = isLoading,
  children,
  kind = "primary",
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      className="button"
      data-kind={kind}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};