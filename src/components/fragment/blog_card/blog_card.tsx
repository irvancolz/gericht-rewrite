"use client";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";
import style from "./blog_card.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Images } from "@/components";

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
      <Images
        src={img}
        alt="blog card"
        className={style.img}
        data-animate="content"
      />
      <div className={style.content}>
        <div className={style.header} data-animate="content">
          <p>{created_at}</p>
          <p>-{author}</p>
        </div>
        <Link
          href={`/blog/${id}`}
          className={`${style.link} ${style.title}`}
          data-animate="content"
        >
          {title}
        </Link>
        <p className={style.desc} data-animate="content">
          {content}
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
