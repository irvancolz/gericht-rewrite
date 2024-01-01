import React, { ComponentProps } from "react";
import style from "./checkbox.module.css";

export type CheckboxProps = {
  label: string;
} & ComponentProps<"input">;

export function Checkbox({ label, className = "", ...rest }: CheckboxProps) {
  return (
    <label className={style.container}>
      <input
        type="checkbox"
        className={`${style.checkbox} ${className}`}
        {...rest}
      />
      {label}
    </label>
  );
}
