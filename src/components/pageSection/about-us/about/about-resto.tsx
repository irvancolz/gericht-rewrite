import { SectionTitle, Video } from "@/components";
import React from "react";
import style from "./about-resto.module.css";

const VIDEO_SRC = [
  {
    src: "/assets/video/resto_view.mp4",
    type: "video/mp4",
  },
  {
    src: "/assets/video/resto_view.webm",
    type: "video/webm",
  },
];

export function AboutResto() {
  return (
    <section className={`container ${style.container}`}>
      <SectionTitle title="about us" desc="happy hours with us" />
      <p className={style.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et.
      </p>
      <div className={style.video}>
        <Video withToggle content={VIDEO_SRC} />
      </div>
    </section>
  );
}
