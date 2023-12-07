"use client";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import style from "./testimonies.module.css";
import gsap from "gsap";

export type Testimonies = {
  imgUrl: string;
  testimony: string;
  name: string;
  job: string;
} & ComponentProps<"div">;

export function CustomerTestimonies({
  imgUrl,
  job,
  name,
  testimony,
  ...props
}: Testimonies) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonies_content", {
        opacity: 0,
        yPercent: 50,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={style.testimonies} {...props}>
      <span className={`${style.image} testimonies_content`}>
        <Image alt="customer" src={imgUrl} fill />
      </span>
      <div>
        <p className={`${style.comment} testimonies_content`}>
          <i>{testimony}</i>
        </p>
        <p className={`${style.name} testimonies_content`}>{name}</p>
        <p className={`${style.job} testimonies_content`}>{job}</p>
      </div>
    </div>
  );
}
