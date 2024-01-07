import React from "react";
import style from "./blog_section_title.module.css";

export type BlogSectionTitleProps = {
  content: string;
};

export function BlogSectionTitle({ content }: BlogSectionTitleProps) {
  return <h3 className={style.title}>{content}</h3>;
}
