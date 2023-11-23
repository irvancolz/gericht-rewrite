import React, { ComponentPropsWithoutRef } from "react";
import style from "./section-title.module.css";
import Image from "next/image";

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
  return (
    <div className={`${style.container} ${alignment}`} {...rest}>
      <p className={style.title}>{title}</p>
      <span
        style={{
          position: "relative",
          width: "32px",
        }}
      >
        <Image src="/assets/svg/spoon.svg" alt="spoon" width={32} height={8} />
      </span>
      <h2 className={style.desc}>{desc}</h2>
    </div>
  );
}
