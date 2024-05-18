import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  variant,
  disabled,
  size = "lg",
  className,
}) => {
  return (
    <button
      type={type}
      className={twMerge(
        "text-white rounded-full font-bold transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-to-r from-custom-pink to-custom-orange hover:from-black hover:to-black",
        variant === "secondary" && "bg-primary-500",
        variant === "primary" &&
          "bg-gradient-to-r from-custom-pink to-custom-orange hover:from-black hover:to-black",
        disabled && "bg-[#D4D4D4]",
        size === "sm" && "py-3 w-full",
        size === "md" && "py-3 w-full md:w-[300px] ",
        size === "lg" && "py-4 w-full md:w-[300px] lg:w-[433px]",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
