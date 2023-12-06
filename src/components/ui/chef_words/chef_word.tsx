"use client";
import React, { useEffect, useState } from "react";
import style from "./chef_word.module.css";
import { Carousel, SectionTitle } from "@/components";

const CHEF_WORD_IMAGES = [
  "/assets/png/chef_word_1.png",
  "/assets/png/chef_word_2.png",
];

export function ChefWord() {
  const [activeSlide, setActiveSlide] = useState(1);

  function updateSlide(i: number) {
    if (i > CHEF_WORD_IMAGES.length) {
      setActiveSlide(1);
      return;
    }
    setActiveSlide(i);
  }

  useEffect(() => {
    const time = setInterval(() => {
      updateSlide(activeSlide + 1);
    }, 7000);

    return () => clearInterval(time);
  });

  return (
    <div className={style.container}>
      <div className={style.content_wrapper}>
        <Carousel activeTabs={activeSlide} images={CHEF_WORD_IMAGES} />
        <div className={style.chef_words}>
          <SectionTitle
            align="left"
            desc="What we believe in"
            title={`Chef’s Word`}
          />
          <p className={style.quotes}>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </i>
          </p>
          <p className={style.title}>
            Kevin Luo <br />
            <span>Chef & Founder</span>
          </p>
          <p className={style.name}>Kevin Luo</p>
        </div>
      </div>
    </div>
  );
}
