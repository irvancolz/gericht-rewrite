"use client";
import Image from "next/image";
import React from "react";
import style from "./footer-center.module.css";
import { Images, SocialMedia } from "@/components";

export function FooterCenterContent() {
  return (
    <div className={style.container}>
      <Images
        src={"/assets/svg/gericht-footer.svg"}
        alt="gericht"
        height={83}
        width={289}
      />
      <div className={style.tagline}>
        <p className="footer_tagline">
          <span className="taglines">
            &ldquo;The best way to find yourself is to lose yourself in the
          </span>
          <span className="taglines"> service of others.&rdquo;</span>
        </p>
        <Images
          src={"/assets/svg/spoon.svg"}
          alt="spoon"
          width={43}
          height={9}
        />
        <SocialMedia />
      </div>
    </div>
  );
}
