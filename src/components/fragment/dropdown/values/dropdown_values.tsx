"use client";
import React, { ComponentProps, forwardRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Option, OptionProps, useDropdown } from "..";
import style from "./values.module.css";

export type DropdownValuesProps = {
  list: OptionProps[];
  x: number;
  y: number;
  width: number;
} & ComponentProps<"ul">;

export const DropdownValues = forwardRef<any, DropdownValuesProps>(
  ({ list, x, y, width }, ref) => {
    const ctx = useDropdown();
    const defaultRef = useRef<HTMLElement | null>(null);

    const containerRef = ref ? ref : defaultRef;
    return (
      <ul
        ref={containerRef}
        className={style.container}
        data-show={ctx?.listExpanded}
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: `${width}px`,
        }}
      >
        {list.map((v, i) => {
          return <Option key={i} label={v.label} value={v.value} />;
        })}
      </ul>
    );
  }
);
DropdownValues.displayName = "dropdown values";
