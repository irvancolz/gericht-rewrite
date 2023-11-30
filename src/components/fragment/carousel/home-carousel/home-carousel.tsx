"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./home_hero_carousel.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "@/components";

export const HOME_HERO_IMAGE_SRC = [
  "/assets/png/home_hero_1.png",
  "/assets/png/home_hero_2.png",
  "/assets/png/home_hero_3.png",
];

export function HomeHeroCarousel({
  activeTabs = 1,
  setActiveTabs,
}: {
  activeTabs: number;
  setActiveTabs: (i: number) => void;
}) {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(container.current, {
        opacity: 0,
        yPercent: 10,
        duration: 0.5,
        delay: 0.3,
      }).from(".carousel_btn", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={style.container}>
      {HOME_HERO_IMAGE_SRC.map((img, i) => {
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
      <div className={style.navigation}>
        {HOME_HERO_IMAGE_SRC.map((src, i) => {
          return (
            <button
              key={i}
              className={`${style.nav_btn} carousel_btn`}
              data-active={activeTabs == i + 1}
              onClick={() => setActiveTabs(i + 1)}
            >
              {`0${i + 1}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}
