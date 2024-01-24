"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./breadcrumbs.module.css";
import Link from "next/link";
import gsap from "gsap";

export type BreadcrumbsProps = {
  paths: { path: string; label: string }[];
};

export function BreadCrumbs({ paths = [] }: BreadcrumbsProps) {
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
      {paths.map((path, i) => {
        return (
          <li key={i} className={style.links}>
            <Link href={path.path}>{path.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
