"use client";
import React, { useEffect, useState } from "react";
import style from "./blog_comment.module.css";
import { Comment } from "../..";
import { type Comment as Comments } from "@/utilities/blog_type";
import { useParams } from "next/navigation";
import { getComment, getCommentCount } from "@/utilities/supabase";

export function BlogComment() {
  const { id } = useParams();
  const [comments, setComments] = useState<Comments[]>([]);
  const [commentTotal, setComentTotal] = useState<number>(0);
  useEffect(() => {
    async function getInitialComment() {
      const [comment, total] = await Promise.all([
        getComment(parseInt(id as string)),
        getCommentCount(parseInt(id as string)),
      ]);
      setComments(() => comment);
      setComentTotal(() => total?.count);
    }

    getInitialComment();
  }, [id]);
  return (
    <div className={style.container}>
      <h3 className={style.title}>Comments({commentTotal})</h3>
      <div>
        {comments.map((comment, i) => {
          return <Comment key={i} {...comment} />;
        })}
      </div>
    </div>
  );
}
