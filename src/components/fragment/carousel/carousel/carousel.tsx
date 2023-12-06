"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./carousel.module.css";
import Image from "next/image";
import { gsap } from "gsap";

export function Carousel({
  activeTabs = 1,
  images = [],
}: {
  images: string[];
  activeTabs: number;
}) {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(container.current, {
        opacity: 0,
        yPercent: 10,
        duration: 0.5,
        delay: 0.3,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={style.container}>
      {images.map((img, i) => {
        return (
          <span
            key={i}
            className={`${style.img} ${
              activeTabs == i + 1 ? style.show_image : ""
            }`}
          >
            <Image
              alt="hero_carousel_image"
              src={img}
              priority
              fill
              sizes="cover"
            />
          </span>
        );
      })}
    </div>
  );
}
