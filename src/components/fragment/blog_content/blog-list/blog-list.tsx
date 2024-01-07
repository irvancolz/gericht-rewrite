import React from "react";
import style from "./blog_list.module.css";
import { BlogContentProps } from "..";

export type BlogListProps = {
  content: string[];
};

export function BlogList({ content }: BlogListProps) {
  return (
    <ul className={style.container}>
      {content.map((item, idx) => {
        return (
          <li key={idx} className={style.list}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
