import React, { ReactNode } from "react";
import style from "./blog-sidebar.module.css";

export function BlogSidebarContent({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className={style.section}>
      <h3 className={style.section_title}>{title}</h3>
      {children}
    </section>
  );
}
