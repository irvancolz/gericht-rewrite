import React from "react";
import style from "./blog_detail.module.css";
import { BlogSidebar, Comment, CommentProps, Images } from "@/components";

const DUMMY_COMMENTS: CommentProps[] = [
  {
    id: "1",
    author: "Nora Martin",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt.",
    date: "01 Dec 2020",
    replies: [
      {
        id: "1",
        author: "Nora Martin",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut eu morbi tincidunt erat egestas quisque ultrices ut. Vel elementum blandit et tellus sit tincidunt nulla non tincidunt.",
        date: "01 Dec 2020",
      },
    ],
  },
];

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
      <div className={style.comments}>
        <h3 className="comment_title">Comments(3)</h3>
        <div>
          {DUMMY_COMMENTS.map((comment, i) => {
            return <Comment key={i} {...comment} />;
          })}
        </div>
      </div>
    </div>
  );
}
