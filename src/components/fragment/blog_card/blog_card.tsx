"use client";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";
import style from "./blog_card.module.css";
import Link from "next/link";
import gsap from "gsap";
import { Images } from "@/components";
import { Blog } from "@/utilities/blog_type";
import { formatDate } from "@/utilities/date";

export type BlogCardProps = Blog & Omit<ComponentProps<"article">, "id">;

export function BlogCard({
  id,
  author,
  created_at,
  spoiler,
  title,
  img,
  ...rest
}: BlogCardProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-animate="content"]', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.4,
        ease: "power1.out",
        scrollTrigger: {
          trigger: '[data-animate="content"]:first-child',
          start: "clamp(center 60%)",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <article className={style.container} ref={contentRef} {...rest}>
      <div className={style.img_wrapper}>
        <Images
          src={img}
          alt="blog card"
          className={style.img}
          data-animate="content"
        />
      </div>
      <div className={style.content}>
        <div className={style.header} data-animate="content">
          <p>{formatDate(created_at)}</p>
          <p>- {author}</p>
        </div>
        <Link
          href={`/blog/${id}`}
          className={`${style.link} ${style.title}`}
          data-animate="content"
        >
          {title}
        </Link>
        <p className={style.desc} data-animate="content">
          {spoiler}
        </p>
        <Link
          href={`/blog/${id}`}
          className={`${style.link}`}
          data-animate="content"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
