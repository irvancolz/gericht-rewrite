"use client";
import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import style from "./chef_word.module.css";
import { Carousel, SectionTitle } from "@/components";
import { gsap } from "gsap";
import Splitting from "splitting";

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

export function ChefWord() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [quotes, setQuotes] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLParagraphElement | null>(null);

  function updateSlide(i: number) {
    if (i > CONTENT.length - 1) {
      setActiveSlide(0);
      return;
    }
    setActiveSlide(i);
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          // markers: true,
          toggleActions: "play none nore reverse",
          start: "top 40%",
          trigger: containerRef.current,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const animaton = gsap.context(() => {
      gsap.from(".chef_words_content", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.1,
      });
    }, containerRef);

    return () => animaton.revert();
  }, [activeSlide]);

  useEffect(() => {
    const time = setInterval(() => {
      updateSlide(activeSlide + 1);
    }, 7000);

    return () => clearInterval(time);
  });

  return (
    <div ref={containerRef} className={style.container}>
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
          <p
            className={`${style.quotes} chef_words_content`}
            ref={quotesRef}
            data-splitting="true"
          >
            <i>{CONTENT[activeSlide].quotes}</i>
          </p>
          <p className={style.title}>
            <span className="chef_words_content">
              {CONTENT[activeSlide].name}
            </span>
            <br />
            <span className="chef_words_content">
              {CONTENT[activeSlide].title}
            </span>
          </p>
          <p className={`${style.name} chef_words_content`}>
            {CONTENT[activeSlide].name}
          </p>
        </div>
      </div>
    </div>
  );
}
