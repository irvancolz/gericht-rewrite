"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./home_hero.module.css";
import {
  Button,
  HOME_HERO_IMAGE_SRC,
  HomeHeroCarousel,
  SectionTitle,
} from "@/components";
import { gsap } from "gsap";

export function HomeHero() {
  const container = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1);

  function updateSlide(i: number) {
    if (i > HOME_HERO_IMAGE_SRC.length) {
      setActiveSlide(1);
      return;
    }
    setActiveSlide(i);
  }

  useLayoutEffect(() => {
    const animation = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            duration: 0.5,
          },
        })
        .from(".home_hero_desc", {
          opacity: 0,
          y: 20,
          delay: 0.5,
        })
        .from(
          ".home_hero_btn",
          {
            opacity: 0,
            y: 10,
          },
          "-=0.3"
        );
    }, container);
    return () => animation.revert();
  }, []);

  // if not done the section header will disappear
  useEffect(() => {
    window.scrollTo({ top: 12 });
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      updateSlide(activeSlide + 1);
    }, 7000);

    return () => clearInterval(time);
  });

  return (
    <div className={style.container} ref={container}>
      <div className={style.content_wrapper}>
        <div>
          <SectionTitle
            align="left"
            desc="The key to Fine dining"
            title="Chase the new Flavour"
          />
          <p className={`${style.hero_desc} home_hero_desc`}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <Button variant="primary" className="home_hero_btn">
            Explore Menu
          </Button>
        </div>
        <HomeHeroCarousel activeTabs={activeSlide} />
      </div>
    </div>
  );
}
