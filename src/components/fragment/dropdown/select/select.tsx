"use client";
import React, { ComponentProps, useEffect, useRef, useState } from "react";
import { OptionProps } from "..";
import style from "./select.module.css";
import { useDropdown } from "../dropdown/context";
import { DropdownValues } from "../values";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";

export type SelectProps = {
  values: OptionProps[];
  defaultsValue?: OptionProps;
} & ComponentProps<"div">;

export function Select({ values, defaultsValue, className }: SelectProps) {
  const ctx = useDropdown();

  const [toolTip, setTooltip] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const [xPos, setXPos] = useState<number>(0);
  const [YPos, setYPos] = useState<number>(0);
  const [width, setwidth] = useState<number>(0);
  const [dropdownTrigger, setDropdownTrigger] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    ctx?.updateValue(defaultsValue?.label!!);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateModal() {
    ctx?.toggleListExpand();
    const coord = containerRef.current?.getBoundingClientRect();

    setXPos(coord?.left!!);
    setYPos(coord?.top!! + containerRef.current?.clientHeight!!);
    setwidth(containerRef.current?.clientWidth!!);
  }

  // need more research, not working for now
  const { attributes, styles } = usePopper(dropdownTrigger, toolTip, {
    placement: "bottom-start",
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  return (
    <div ref={setDropdownTrigger} className={`${style.container} ${className}`}>
      <button ref={containerRef} className={style.btn} onClick={updateModal}>
        <span className="selected-value">{ctx?.value}</span>
      </button>
      {createPortal(
        <DropdownValues
          ref={setTooltip}
          list={values}
          width={width}
          x={xPos}
          y={YPos}
          {...attributes.popper}
        />,
        document.getElementById("modal_container")!!
      )}
    </div>
  );
}
