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

export function Select({ values, defaultsValue }: SelectProps) {
  const ctx = useDropdown();

  const [dropdownTrigger, setDropdownTrigger] = useState<HTMLDivElement | null>(
    null
  );
  const [toolTip, setTooltip] = useState<HTMLElement | null>(null);

  useEffect(() => {
    ctx?.updateValue(defaultsValue?.label!!);
  }, []);

  const { attributes, styles, state } = usePopper(dropdownTrigger, toolTip, {
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
    <div ref={setDropdownTrigger} className={style.container}>
      <button className={style.btn} onClick={ctx?.toggleListExpand}>
        <span className="selected-value">{ctx?.value}</span>
      </button>

      <DropdownValues
        ref={setTooltip}
        list={values}
        width={0}
        x={0}
        y={0}
        style={styles.popper}
        {...attributes.popper}
      />
    </div>
  );
}
