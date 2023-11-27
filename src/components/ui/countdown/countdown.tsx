"use client";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import style from "./countdown.module.css";
import { Counter } from "@/components";
import { gsap } from "gsap";

const secondsInMinutes = 60;
const secondsInHour = secondsInMinutes * 60;
const secondsInday = secondsInHour * 24;
const secondsInMonth = secondsInday * 30;

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(31536000);
  const containerRef = useRef(null);

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

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".countdown", {
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.3,
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} className={style.container}>
      <Counter
        label="Months"
        className="countdown"
        time={Math.floor(timeLeft / secondsInMonth)}
      />
      <Counter
        label="Days"
        className="countdown"
        time={Math.floor((timeLeft % secondsInMonth) / secondsInday)}
      />
      <Counter
        label="Hours"
        className="countdown"
        time={Math.floor((timeLeft % secondsInday) / secondsInHour)}
      />
      <Counter
        label="Minutes"
        className="countdown"
        time={Math.floor((timeLeft % secondsInHour) / secondsInMinutes)}
      />
      <Counter
        label="Seconds"
        className="countdown"
        time={timeLeft % secondsInMinutes}
      />
    </div>
  );
}
