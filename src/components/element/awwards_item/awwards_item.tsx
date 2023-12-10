"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./awwards_item.module.css";
import Image from "next/image";
import gsap from "gsap";

export type AwwardsItemProps = {
  imgUrl: string;
  title: string;
  desc: string;
};

export function AwwardsItem({ desc, imgUrl, title }: AwwardsItemProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".awwards_item_content", {
        opacity: 0,
        duration: 0.3,
        y: 30,
        stagger: 0.1,
        scrollTrigger: {
          start: "clamp(top 80%)",
          trigger: containerRef.current,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={style.container}>
      <div>
        <h3 className={`awwards_item_content ${style.title}`}>{title}</h3>
        <p className={`awwards_item_content ${style.desc}`}>{desc}</p>
      </div>
      <span className={`awwards_item_content ${style.image}`}>
        <Image alt="awwards" src={imgUrl} fill />
      </span>
    </div>
  );
}
