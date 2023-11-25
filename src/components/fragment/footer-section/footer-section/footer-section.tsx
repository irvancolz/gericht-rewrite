import React, { PropsWithChildren } from "react";
import style from "./footer-section.module.css";
export type FooterSectionProps = {
  title: string;
} & PropsWithChildren;

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className={style.container}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
