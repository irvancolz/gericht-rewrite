"use client";
import React, {
  ComponentPropsWithoutRef,
  useLayoutEffect,
  useRef,
} from "react";
import style from "./section-title.module.css";
import Image from "next/image";
import { gsap } from "gsap";

export type SectionTitleProps = {
  align: "center" | "left";
  title: string;
  desc: string;
} & ComponentPropsWithoutRef<"div">;

export function SectionTitle({
  title,
  desc,
  align,
  ...rest
}: SectionTitleProps) {
  const alignment = align == "center" ? style.center : style.left;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section_title_content", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section_title_content",
          start: "clamp(bottom 80%)",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${style.container} ${alignment}`}
      {...rest}
    >
      <p className={`${style.title} section_title_content`}>{title}</p>
      <span
        className="section_title_content"
        style={{
          position: "relative",
          width: "32px",
        }}
      >
        <Image src="/assets/svg/spoon.svg" alt="spoon" width={32} height={8} />
      </span>
      <h2 className={`${style.desc} section_title_content`}>{desc}</h2>
    </div>
  );
}
