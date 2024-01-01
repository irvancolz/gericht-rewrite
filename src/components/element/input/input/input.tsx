import React, { ComponentProps, createRef, forwardRef } from "react";
import style from "./input.module.css";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...rest }, ref) => {
    const currentRef = ref ? ref : createRef<HTMLInputElement>();

    return (
      <input
        className={`${style.input} ${className}`}
        ref={currentRef}
        {...rest}
      />
    );
  }
);

Input.displayName = "input";
