"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./breadcrumbs.module.css";
import Link from "next/link";
import gsap from "gsap";

const BLOG_BREADCRUMBS_CONTENT = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/blogs",
    label: "Our Blogs - With Sidebar",
  },
];

export function BreadCrumbs() {
  const containerRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        delay: 1,
      });
    });

    return () => context.revert();
  }, []);

  return (
    <ul className={style.container} ref={containerRef}>
      {BLOG_BREADCRUMBS_CONTENT.map((path, i) => {
        return (
          <li key={i} className={style.links}>
            <Link href={path.path}>{path.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
