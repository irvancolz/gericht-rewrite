import Image from "next/image";
import React from "react";
import style from "./footer-center.module.css";

export function FooterCenterContent() {
  return (
    <div className={style.container}>
      <Image
        src={"/assets/svg/gericht-footer.svg"}
        alt="gericht"
        height={83}
        width={289}
      />
      <div className={style.tagline}>
        <p>
          &ldquo;The best way to find yourself is to lose yourself in the
          service of others.&rdquo;
        </p>
        <Image
          src={"/assets/svg/spoon.svg"}
          alt="spoon"
          width={43}
          height={9}
        />
        <span>
          <Image
            src={"/assets/svg/facebook-footer.svg"}
            alt="fb"
            width={24}
            height={24}
          />
          <Image
            src={"/assets/svg/twitter-footer.svg"}
            alt="twitter"
            width={24}
            height={24}
          />
          <Image
            src={"/assets/svg/instagram-footer.svg"}
            alt="ig"
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  );
}
