"use client";
import React, {
  CSSProperties,
  ComponentPropsWithoutRef,
  useLayoutEffect,
  useRef,
} from "react";
import style from "./section-title.module.css";
import Image from "next/image";
import { gsap } from "gsap";

export type SectionTitleProps = {
  align?: "center" | "left";
  title: string;
  desc: string;
  size?: "md" | "lg";
} & ComponentPropsWithoutRef<"div">;

export function SectionTitle({
  title,
  desc,
  align = "center",
  size = "md",
  ...rest
}: SectionTitleProps) {
  const alignment = align == "center" ? style.center : style.left;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section_title_content", {
        opacity: 0,
        yPercent: 100,
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
      <h2
        style={
          {
            "--fs": size == "lg" ? "6rem" : "4rem",
            "--line-h": size == "lg" ? "7rem" : "5rem",
          } as CSSProperties
        }
        className={`${style.desc} section_title_content`}
      >
        {desc}
      </h2>
    </div>
  );
}
