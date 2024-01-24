"use client";
import Image from "next/image";
import React from "react";
import style from "./footer-center.module.css";
import { Images, SocialMedia, Spoon } from "@/components";

export function FooterCenterContent() {
  return (
    <div className={style.container}>
      <Images
        src={"/assets/svg/gericht-footer.svg"}
        alt="gericht"
        className={style.main_logo}
      />
      <div className={style.tagline}>
        <p className="footer_tagline">
          <span className="taglines">
            &ldquo;The best way to find yourself is to lose yourself in the
          </span>
          <span className="taglines"> service of others.&rdquo;</span>
        </p>
        <Spoon />
        <SocialMedia />
      </div>
    </div>
  );
}
