import React from "react";
import style from "./awwards_item.module.css";
import Image from "next/image";

export type AwwardsItemProps = {
  imgUrl: string;
  title: string;
  desc: string;
};

export function AwwardsItem({ desc, imgUrl, title }: AwwardsItemProps) {
  return (
    <div className={style.container}>
      <span className={style.image}>
        <Image alt="awwards" src={imgUrl} fill />
      </span>
      <div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
}
