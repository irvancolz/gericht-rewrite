"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Option, OptionProps, useDropdown } from "..";
import style from "./values.module.css";

export type DropdownValuesProps = {
  list: OptionProps[];
  x: number;
  y: number;
  width: number;
};

export function DropdownValues({ list, x, y, width }: DropdownValuesProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const ctx = useDropdown();

  useEffect(() => {
    containerRef.current = document.querySelector("#modal_container");
  }, []);

  const isShown = ctx?.listExpanded ? "" : style.hide;

  if (!containerRef.current) return;

  return createPortal(
    <ul
      className={`${style.container} ${isShown}`}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: `${width}px`,
      }}
    >
      {list.map((v, i) => {
        return <Option key={i} label={v.label} value={v.value} />;
      })}
    </ul>,
    containerRef.current!!
  );
}
