"use client";
import React, { ComponentProps } from "react";
import style from "./option.module.css";
import { useDropdown } from "..";

export type OptionProps = {
  logo?: string;
  label: string;
  value: string;
} & ComponentProps<"li">;

export function Option({ label, value, ...props }: OptionProps) {
  const ctx = useDropdown();

  const changeValue = () => {
    ctx?.toggleListExpand(), ctx?.updateValue(label);
  };

  return (
    <li onClick={changeValue} className={style.container} {...props}>
      <input
        onChange={changeValue}
        onClick={changeValue}
        type="radio"
        id={value}
        checked={ctx?.value == label}
        name={value}
      />

      <label onClick={changeValue} htmlFor={value}>
        {label}
      </label>
    </li>
  );
}
