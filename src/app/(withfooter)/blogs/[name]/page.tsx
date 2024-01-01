import React from "react";
import style from "./blog_detail.module.css";
import {
  BlogComment,
  BlogSidebar,
  Comment,
  CommentInput,
  Images,
} from "@/components";

export default function BlogDetail() {
  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.blog_detail}>
          <p className={style.date}>16 Apr 2021</p>
          <p className={style.author}>- Annalisa L</p>
        </div>
        <h1 className={style.title}>
          tips for prepping and caring for your grill
        </h1>
        <Images
          className={style.hero_img}
          alt="blog_img"
          src={"/assets/png/blog_detail_hero_img_1.png"}
        />
      </div>
      <div className={style.body}>
        <p></p>
        <BlogSidebar />
      </div>
      <BlogComment />
      <CommentInput />
    </div>
  );
}
