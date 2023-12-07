import React from "react";
import style from "./testimony.module.css";
import { SectionTitle } from "..";
import { CustomerTestimonies, Signature } from "@/components";
import Image from "next/image";

const TESTIMONIES = [
  {
    name: "Wade Warren",
    job: "Sommelier",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    imgUrl: "/assets/png/customer_testimony_1.png",
  },
  {
    name: "Jane Cooper",
    job: "Chef",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    imgUrl: "/assets/png/customer_testimony_2.png",
  },
  {
    name: "Robert Fox",
    job: "Chef",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    imgUrl: "/assets/png/customer_testimony_3.png",
  },
  {
    name: "Brooklyn Simmons",
    job: "Caterer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    imgUrl: "/assets/png/customer_testimony_4.png",
  },
];

export function Testimony() {
  return (
    <div className={style.container}>
      <section className={style.content_wrapper}>
        <SectionTitle title="Testimony" desc="Happy customers" />
        <div className={style.testimony_container}>
          {TESTIMONIES.map((user, i) => {
            return <CustomerTestimonies key={i} {...user} />;
          })}
        </div>
      </section>
      <Signature className={style.signature} rotation="left" />
    </div>
  );
}
