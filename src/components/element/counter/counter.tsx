"use client";
import React, { PropsWithoutRef } from "react";
import style from "./counter.module.css";

export type CounterProps = {
  label: string;
  time: number;
  className?: string;
};

export function Counter({ label, time, className }: CounterProps) {
  return (
    <div className={`${style.container} ${className}`}>
      <p className={style.time}>{time}</p>
      <p className={style.label}>{label}</p>
    </div>
  );
}
