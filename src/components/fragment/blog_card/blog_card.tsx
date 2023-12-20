import React, { ComponentProps } from "react";
import style from "./blog_card.module.css";
import Link from "next/link";
import Image from "next/image";

export type BlogCardProps = {
  id: string;
  author: string;
  created_at: string;
  title: string;
  content: string;
  img: string;
} & ComponentProps<"article">;

export function BlogCard({
  id,
  author,
  created_at,
  content,
  title,
  img,
  ...rest
}: BlogCardProps) {
  return (
    <article className={style.container} {...rest}>
      <span className={style.img}>
        <Image src={img} alt="blog card" fill />
      </span>
      <div className={style.content}>
        <div className={style.header}>
          <p>{created_at}</p>
          <p>-{author}</p>
        </div>
        <Link href={`/blog/${id}`} className={`${style.link} ${style.title}`}>
          {title}
        </Link>
        <p className={style.desc}>{content}</p>
        <Link href={`/blog/${id}`} className={`${style.link}`}>
          Read More
        </Link>
      </div>
    </article>
  );
}
