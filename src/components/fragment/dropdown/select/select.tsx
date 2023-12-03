"use client";
import React, {
  ComponentProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { OptionProps } from "..";
import style from "./select.module.css";
import { useDropdown } from "../dropdown/context";
import { DropdownValues } from "../values";

export type SelectProps = {
  values: OptionProps[];
  defaultsValue?: OptionProps;
} & ComponentProps<"div">;

export function Select({ values, defaultsValue }: SelectProps) {
  const ctx = useDropdown();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [xPos, setXPos] = useState<number>(0);
  const [yPos, setYPos] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    ctx?.updateValue(defaultsValue?.label!!);
  }, []);

  function updateModal() {
    const coord = containerRef.current?.getBoundingClientRect();

    setXPos(coord?.left!!);
    setYPos(coord?.top!! + containerRef.current?.clientHeight!!);
    setWidth(containerRef.current?.clientWidth!!);
    ctx?.toggleListExpand();
  }

  return (
    <div ref={containerRef}>
      <button className={style.btn} onClick={updateModal}>
        <span className="selected-value">{ctx?.value}</span>
      </button>
      <DropdownValues list={values} width={width} x={xPos} y={yPos} />
    </div>
  );
}
