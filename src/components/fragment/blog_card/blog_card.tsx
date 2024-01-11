"use client";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";
import style from "./blog_card.module.css";
import Link from "next/link";
import gsap from "gsap";
import { Images, Loader } from "@/components";
import { Blog } from "@/utilities/blog_type";
import { formatDate } from "@/utilities/date";
import { getSupabasePublicUrl } from "@/utilities/supabase";

export type BlogCardProps = Blog &
  Omit<ComponentProps<"article">, "id"> & {
    loading?: boolean;
    loaderVariant?: "dark" | "gray";
  };

export function BlogCard({
  id,
  author,
  created_at,
  spoiler,
  title,
  img,
  loading = false,
  loaderVariant,
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
      {loading ? (
        <>
          <Loader color={loaderVariant} height={300} />
          <Loader color={loaderVariant} height={30} width={240} />
          <Loader color={loaderVariant} height={80} />
        </>
      ) : (
        <>
          <div className={style.img_wrapper}>
            <Images
              src={getSupabasePublicUrl(img)}
              alt="blog card"
              className={style.img}
              data-animate="content"
              style={{ objectFit: "cover" }}
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
        </>
      )}
    </article>
  );
}
