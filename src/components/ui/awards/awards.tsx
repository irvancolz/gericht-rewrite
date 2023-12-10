import React from "react";
import style from "./awards.module.css";
import { SectionTitle } from "..";
import { AwwardsItem } from "@/components";
import Image from "next/image";

const AWWARDS_CONTENT = [
  {
    imgUrl: "/assets/png/awwards_logo_2.png",
    title: "Bib Gourmond",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: "/assets/png/awwards_logo_1.png",
    title: "Rising Star",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: "/assets/png/awwards_logo_5.png",
    title: "AA Hospitality ",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: "/assets/png/awwards_logo_5.png",
    title: "Outstanding Chef",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export function Awards() {
  return (
    <div className={style.container}>
      <div className={style.content_wrapper}>
        <div className={style.content}>
          <SectionTitle
            align="left"
            title="Awards & recognition"
            desc="Our Laurels"
          />
          <div className={style.awwards}>
            {AWWARDS_CONTENT.map((content, i) => {
              return <AwwardsItem key={i} {...content} />;
            })}
          </div>
        </div>
        <div className={style.images}>
          <Image
            alt="awwards"
            src={"/assets/png/awwards_img_2.png"}
            fill
            sizes="contain"
          />
        </div>
      </div>
    </div>
  );
}
