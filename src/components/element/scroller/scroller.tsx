"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./scroller.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Scroller() {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: -30,
        duration: 1,
      });
    }, ref);

    return ctx.revert();
  }, []);
  return (
    <div ref={ref} className={`${style.container}`}>
      <p>scroller</p>
    </div>
  );
}
