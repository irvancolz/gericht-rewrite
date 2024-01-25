"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./hapy_hours.module.css";
import { Video, VideoSource } from "@/components";
import gsap from "gsap";

const videoSrc: VideoSource[] = [
  {
    src: "assets/video/pexels-ivan-samkov-7704096 (720p).webm",
    type: "video/webm",
  },
  {
    src: "assets/video/pexels-ivan-samkov-7704096 (720p).mp4",
    type: "video/mp4",
  },
];

export function HappyHours() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
        },
      });

      tl.from('[data-animate="true"]', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        // todo : do cleanup
        onComplete: () => {},
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <Video className={styles.video} content={videoSrc} loop autoPlay />
      <div className={styles.content}>
        <h2 className={styles.title} data-animate="true">
          Happy Hours
        </h2>
        <p className={styles.desc} data-animate="true">
          <span>Monday - Friday </span>
          <span>(4:00 Pm - 7:00 pm)</span>
        </p>
      </div>
    </div>
  );
}
