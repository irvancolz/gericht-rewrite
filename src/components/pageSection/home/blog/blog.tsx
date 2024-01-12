import React from "react";
import style from "./blog.module.css";
import {
  BlogCard,
  BlogCardProps,
  Button,
  SectionTitle,
  Signature,
} from "@/components";
import Link from "next/link";

const BLOGS_CONTENT: BlogCardProps[] = [
  {
    id: 1,
    img: "/assets/png/blogs_img_1.png",
    author: "Annalisa L",
    spoiler:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "16 Apr 2021",
    title: "tips for prepping and caring for your grill",
  },
  {
    id: 2,
    img: "/assets/png/blogs_img_2.png",
    author: "John Micheal",
    spoiler:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "23 May 2021",
    title: "summer cocktails and mocktails",
  },
  {
    id: 3,
    img: "/assets/png/blogs_img_3.png",
    author: "Fred W",
    spoiler:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "06 Aug 2021",
    title: "easy cooking for college students",
  },
];

export function Blog() {
  return (
    <div className={style.container}>
      <Signature className={style.signature} />
      <Signature rotation="right" className={style.signature} />
      <SectionTitle title="Blogs" desc="Gerícht updates" />
      <div className={style.blogs}>
        {BLOGS_CONTENT.map((blog, i) => {
          return <BlogCard key={i} {...blog} />;
        })}
      </div>
      <Button>
        <Link href={"/blog"}>View More</Link>
      </Button>
    </div>
  );
}
