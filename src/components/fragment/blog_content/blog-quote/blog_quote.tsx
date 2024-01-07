import React from "react";
import style from "./blog_quote.module.css";

export type BlogQuoteProps = {
  content: string;
};

export function BlogQuote({ content }: BlogQuoteProps) {
  return (
    <blockquote className={style.container}>
      <p className={style.quote}>{content}</p>
    </blockquote>
  );
}
