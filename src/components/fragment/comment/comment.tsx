"use client";
import React, { FormEvent, useRef, useState } from "react";
import style from "./comment.module.css";
import { Button, Images, Textarea } from "@/components";

export type CommentProps = {
  id: string;
  author: string;
  comment: string;
  date: string;
  replies?: CommentProps[];
};

export function Comment({
  author,
  comment,
  date,
  replies = [],
  id,
}: CommentProps) {
  const [openInput, setOpenInput] = useState<boolean>(false);

  function addReplies(e: FormEvent) {
    e.preventDefault();
  }

  const inputReplyRef = useRef<HTMLTextAreaElement | null>(null);

  function openReplyInput() {
    setOpenInput(true);
    inputReplyRef.current?.focus();
  }

  return (
    <div className={style.container}>
      <Images
        className={style.img}
        alt="comments"
        src={"/assets/png/comments_pic_img_1.png"}
      />
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.author} data-focused={openInput}>
            {author}
          </p>
          <Button variant="secondary" onClick={openReplyInput}>
            Reply
          </Button>
        </div>

        <p className={style.date}>{date}</p>
        <p className={style.comment}>{comment}</p>

        {/* add reply */}
        {openInput && (
          <>
            <Button type="button" variant="secondary">
              Reply To {author}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpenInput(false)}
            >
              Cancel Reply
            </Button>
            <form className={style.reply} onSubmit={addReplies}>
              <Textarea
                required
                className={style.textarea}
                placeholder="Hi there! I love your blog...."
                ref={inputReplyRef}
              />
              <Button type="submit">Submit</Button>
            </form>
          </>
        )}

        {/* replies */}
        {replies.length > 0 && (
          <div className={style.replies_container}>
            {replies.map((comment, i) => (
              <Comment key={i} {...comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
