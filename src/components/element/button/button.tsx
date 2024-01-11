"use client";
import React, {
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  forwardRef,
  useRef,
} from "react";
import style from "./button.module.css";
import classNames from "classnames";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  leftIcon?: ReactNode;
  p?: number;
} & PropsWithChildren &
  ComponentProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", leftIcon, children, p, ...rest }, ref) => {
    const buttonVarClass =
      variant == "primary" ? style.primary : style.secondary;

    const localRef = useRef<HTMLButtonElement | null>(null);
    const btnRef = ref || localRef;

    const haveIconClass = leftIcon ? style.with_icon : "";

    const btnClass = classNames(className, buttonVarClass, style.btn);

    return (
      <button
        className={btnClass}
        ref={btnRef}
        style={{
          padding: `${p != null ? p + "px" : ".5rem"}`,
        }}
        {...rest}
      >
        <span className={haveIconClass}>
          {leftIcon && leftIcon}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "button";
