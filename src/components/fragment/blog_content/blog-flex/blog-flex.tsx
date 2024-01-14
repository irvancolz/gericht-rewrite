import React from "react";
import style from "./blog-flex.module.css";
import { BlogContent as BlogContentType } from "@/utilities/blog_type";
import { BlogContent } from "..";

export type BlogFlexProps = {
  content: BlogContentType[];
  props?: any;
};

export function BlogFlex({ content, props }: BlogFlexProps) {
  return (
    <div className={style.container}>
      {content.map((item, i) => (
        <BlogContent key={i} {...item} />
      ))}
    </div>
  );
}
