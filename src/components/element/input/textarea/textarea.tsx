import React, { ComponentProps, createRef, forwardRef } from "react";
import style from "./textarea.module.css";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(({ className, ...rest }, ref) => {
  const currentRef = ref ? ref : createRef<HTMLTextAreaElement>();

  return (
    <textarea
      ref={currentRef}
      className={`${style.textarea} ${className}`}
      {...rest}
    ></textarea>
  );
});

Textarea.displayName = "textarea";
