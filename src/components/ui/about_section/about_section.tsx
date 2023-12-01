import { Button, Spoon } from "@/components";
import style from "./about_section.module.css";
import React, { ComponentProps } from "react";

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

  return (
    <div className={`${style.container} ${alignClass}`} {...rest}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <Spoon className={style.spoon_img} orientation={align} />
      </div>
      <p>{content}</p>
      <Button>Know More</Button>
    </div>
  );
}
