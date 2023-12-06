"use client";
import React, { useEffect, useState } from "react";
import style from "./chef_word.module.css";
import { Carousel, SectionTitle } from "@/components";

const CONTENT = [
  {
    images: "/assets/png/chef_word_1.png",
    name: "Kevin Luo",
    title: "Chef & Founder",
    quotes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
  . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
  sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
  molestie lectus eu. Congue iaculis integer curabitur semper sit
  nunc.`,
  },
  {
    images: "/assets/png/chef_word_2.png",
    name: "Patrick Choi",
    title: "Chef & Founder",
    quotes: `Duis a sapien at leo ullamcorper viverra. Mauris lobortis mattis orci,
    a volutpat justo interdum eu. Aenean vel interdum arcu. Suspendisse
    aliquet eget nisi eget pharetra. Vivamus blandit est quam, ultricies 
    cursus ex vehicula non.`,
  },
];

const CHEF_IMAGES = [
  "/assets/png/chef_word_1.png",
  "/assets/png/chef_word_2.png",
];

const CHEF_QUOTES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
  . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
  sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
  molestie lectus eu. Congue iaculis integer curabitur semper sit
  nunc.`,
  `Duis a sapien at leo ullamcorper viverra. Mauris lobortis mattis orci,
  a volutpat justo interdum eu. Aenean vel interdum arcu. Suspendisse
  aliquet eget nisi eget pharetra. Vivamus blandit est quam, ultricies 
  cursus ex vehicula non.`,
];

export function ChefWord() {
  const [activeSlide, setActiveSlide] = useState(1);

  function updateSlide(i: number) {
    if (i > CONTENT.length - 1) {
      setActiveSlide(0);
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
        <Carousel
          activeTabs={activeSlide}
          images={CONTENT.map((i) => i.images)}
        />
        <div className={style.chef_words}>
          <SectionTitle
            align="left"
            desc="What we believe in"
            title={"Chef`s Word"}
          />
          <p className={style.quotes}>
            <i>{CONTENT[activeSlide].quotes}</i>
          </p>
          <p className={style.title}>
            {CONTENT[activeSlide].name} <br />
            <span> {CONTENT[activeSlide].title}</span>
          </p>
          <p className={style.name}>{CONTENT[activeSlide].name}</p>
        </div>
      </div>
    </div>
  );
}
