import React from "react";
import style from "./social-media.module.css";
import { Images } from "..";

export function SocialMedia() {
  return (
    <div className={style.container}>
      <Images
        src={"/assets/svg/facebook-footer.svg"}
        alt="fb"
        className={style.img}
      />
      <Images
        src={"/assets/svg/twitter-footer.svg"}
        alt="twitter"
        className={style.img}
      />
      <Images
        src={"/assets/svg/instagram-footer.svg"}
        alt="ig"
        className={style.img}
      />
    </div>
  );
}
