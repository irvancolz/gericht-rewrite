import Image from "next/image";
import React, { ComponentProps } from "react";
import style from "./photo_gallery_img.module.css";
import { Images } from "..";

export type PhotoGaleryImgProps = {
  label: string;
  src: string;
} & ComponentProps<"div">;

export function PhotoGaleryImg({ label, src, ...rest }: PhotoGaleryImgProps) {
  return (
    <div className={style.container} {...rest}>
      <Images className={style.img} src={src} alt={label} />
      <span className={style.overlay}>
        <Image
          src={"/assets/svg/instagram-footer.svg"}
          alt="intagram"
          width={24}
          height={24}
        />
      </span>
    </div>
  );
}
