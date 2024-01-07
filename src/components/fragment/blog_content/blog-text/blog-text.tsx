import React from "react";
import style from "./blog_text.module.css";

export type BlogTextProps = {
  content: string;
};

export function BlogText({ content }: BlogTextProps) {
  return <p className={style.text}>{content}</p>;
}
