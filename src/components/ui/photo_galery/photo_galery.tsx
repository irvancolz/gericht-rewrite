"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./photo_galery.module.css";
import { SectionTitle } from "..";
import { Button, PhotoGaleryImg, PhotoGaleryImgProps } from "@/components";
import { gsap } from "gsap";

const PHOTO_GALLERY_IMG: PhotoGaleryImgProps[] = [
  {
    label: "",
    src: "/assets/png/photo_gallery_img_1.png",
  },
  {
    label: "",
    src: "/assets/png/photo_gallery_img_2.png",
  },
  {
    label: "",
    src: "/assets/png/photo_gallery_img_3.png",
  },
  {
    label: "",
    src: "/assets/png/photo_gallery_img_4.png",
  },
  {
    label: "",
    src: "/assets/png/photo_gallery_img_5.png",
  },
];

export function PhotoGalery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-animation='item']", {
        opacity: 0,
        yPercent: 100,
        duration: 0.4,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "clamp(center center)",
        },
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: "all" });
        },
      });
      // pinned
      gsap.to(containerRef.current, {
        scrollTrigger: {
          scrub: true,
          trigger: containerRef.current,
          start: "clamp(center center)",
          end: "+1000px",
          pin: true,
        },
      });
      // slider
      gsap.to("[data-item='slider']", {
        xPercent: -60,
        scrollTrigger: {
          scrub: true,
          trigger: "[data-item='slider']",
          start: "center center",
          end: "+1000px",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={style.container} ref={containerRef}>
      <div className={style.desc}>
        <SectionTitle desc="Photo Gallery" title="Instagram" align="left" />
        <p data-animation="item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <Button data-animation="item">View More</Button>
      </div>
      <div className={style.slider_wrapper}>
        <div className={style.slider} data-item="slider">
          {PHOTO_GALLERY_IMG.map((img, i) => {
            return <PhotoGaleryImg key={i} {...img} data-item="img" />;
          })}
        </div>
      </div>
    </section>
  );
}
