"use client";
import React, {
  ComponentProps,
  PropsWithChildren,
  forwardRef,
  useRef,
} from "react";
import style from "./button.module.css";

export type ButtonProps = {
  variant?: "primary" | "secondary";
} & PropsWithChildren &
  ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...rest }, ref) => {
    const buttonVarClass =
      variant == "primary" ? style.primary : style.secondary;

    const localRef = useRef<HTMLButtonElement | null>(null);
    const btnRef = ref || localRef;
    return (
      <button
        className={`${style.btn} ${buttonVarClass} ${className}`}
        ref={btnRef}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "button";
