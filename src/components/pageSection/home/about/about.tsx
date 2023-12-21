"use client";
import React from "react";
import style from "./about.module.css";
import { AboutSubSection, Images } from "@/components";

export function About() {
  return (
    <div className={style.container}>
      <div className={style.content_wrapper}>
        <AboutSubSection
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin."
          title="About Us"
          align="right"
        />

        <Images
          alt="knive"
          src={"/assets/png/knives_about.png"}
          fill
          className={`${style.img} knive_img`}
        />

        <AboutSubSection
          content="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
          title="Our History"
        />
      </div>
    </div>
  );
}
