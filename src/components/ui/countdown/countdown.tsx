"use client";
import React, { useEffect, useState } from "react";
import style from "./countdown.module.css";
import { Counter } from "@/components";

const secondsInMinutes = 60;
const secondsInHour = secondsInMinutes * 60;
const secondsInday = secondsInHour * 24;
const secondsInMonth = secondsInday * 30;
const secondsInyear = secondsInMonth * 12;

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(31536000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((e) => e - 1);
      } else {
        setTimeLeft(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className={style.container}>
      <Counter label="Months" time={Math.floor(timeLeft / secondsInMonth)} />
      <Counter
        label="Days"
        time={Math.floor((timeLeft % secondsInMonth) / secondsInday)}
      />
      <Counter
        label="Hours"
        time={Math.floor((timeLeft % secondsInday) / secondsInHour)}
      />
      <Counter
        label="Minutes"
        time={Math.floor((timeLeft % secondsInHour) / secondsInMinutes)}
      />
      <Counter label="Seconds" time={timeLeft % secondsInMinutes} />
    </div>
  );
}
