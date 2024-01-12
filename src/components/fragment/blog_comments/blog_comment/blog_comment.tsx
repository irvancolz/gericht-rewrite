import React from "react";
import style from "./blog_comment.module.css";
import { Comment } from "../..";
import { type Comment as Comments } from "@/utilities/blog_type";

export function BlogComment({
  commentTotal,
  comments,
}: {
  commentTotal: number;
  comments: Comments[];
}) {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Comments({commentTotal})</h3>
      <div id="comments_container">
        {comments.map((comment, i) => {
          return <Comment key={i} {...comment} />;
        })}
      </div>
    </div>
  );
}
