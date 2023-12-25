"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./hero.module.css";
import { BreadCrumbs } from "@/components";
import gsap from "gsap";
import SplitType from "split-type";

export function BlogHero() {
  const title = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    const target = SplitType.create("[data-animation='heading']", {
      types: "words",
    });

    const ctx = gsap.context(() => {
      gsap.from(target.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={style.container}>
      <div>
        <h1 className={style.title} data-animation="heading">
          Our Blogs
        </h1>
        <BreadCrumbs />
      </div>
    </section>
  );
}
