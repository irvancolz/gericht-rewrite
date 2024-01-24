import React, { CSSProperties, ComponentProps } from "react";
import style from "./text.module.css";

export type TextProps = {
  align?: "center" | "right" | "left";
  color?: string;
} & ComponentProps<"p">;

export function Text({
  children,
  align,
  color,
  className = "",
  ...rest
}: TextProps) {
  return (
    <p
      className={`${style.text} ${className}`}
      style={
        {
          "--align": align,
          "--col": color,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </p>
  );
}
