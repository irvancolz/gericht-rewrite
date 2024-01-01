import React from "react";
import style from "./blog_comment.module.css";
import { CommentProps, Comment } from "../..";

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

export function BlogComment() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Comments(3)</h3>
      <div>
        {DUMMY_COMMENTS.map((comment, i) => {
          return <Comment key={i} {...comment} />;
        })}
      </div>
    </div>
  );
}
