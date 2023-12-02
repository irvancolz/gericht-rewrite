"use client";
import { Button, Spoon } from "@/components";
import style from "./about_section.module.css";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export type AboutSubSectionProps = {
  align?: "left" | "right";
  title: string;
  content: string;
} & ComponentProps<"div">;

export function AboutSubSection({
  title,
  content,
  align = "left",
  ...rest
}: AboutSubSectionProps) {
  const alignClass = align == "left" ? style.left : style.right;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about_content", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        y: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${style.container} ${alignClass}`}
      {...rest}
    >
      <div className="about_content">
        <h2 className={`${style.title}`}>{title}</h2>
        <Spoon className={style.spoon_img} orientation={align} />
      </div>
      <p className="about_content">{content}</p>
      <Button className="about_content">Know More</Button>
    </div>
  );
}
