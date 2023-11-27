"use client";
import React, { PropsWithoutRef } from "react";
import style from "./counter.module.css";

export type CounterProps = {
  label: string;
  time: number;
};

export function Counter({ label, time }: CounterProps) {
  return (
    <div className={style.container}>
      <p className={style.time}>{time}</p>
      <p className={style.label}>{label}</p>
    </div>
  );
}
