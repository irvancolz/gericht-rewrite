import React, { ComponentProps, PropsWithChildren } from "react";
import style from "./button.module.css";

export type ButtonProps = {
  variant: "primary" | "secondary";
} & PropsWithChildren &
  ComponentProps<"button">;

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const buttonVarClass = variant == "primary" ? style.primary : style.secondary;
  return (
    <button {...rest} className={`${style.btn} ${buttonVarClass} ${className}`}>
      {children}
    </button>
  );
}
