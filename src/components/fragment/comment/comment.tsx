"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import style from "./comment.module.css";
import { Button, Images, Textarea } from "@/components";
import { type Comment } from "@/utilities/blog_type";
import { getCommentReplies, getUser } from "@/utilities/supabase";
import { User } from "@/utilities/user_type";

const MAX_USER_COUNT = 100;

export function Comment({ author: authorId, comment, date, id }: Comment) {
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [author, setAuthor] = useState<User>({} as User);

  function addReplies(e: FormEvent) {
    e.preventDefault();
  }

  const inputReplyRef = useRef<HTMLTextAreaElement | null>(null);

  function openReplyInput() {
    setOpenInput(true);
    inputReplyRef.current?.focus();
  }

  const imgUrl = `${process.env.NEXT_PUBLIC_RANDOM_USER_IMG || ""}${
    authorId % MAX_USER_COUNT
  }.jpg`;

  const authorFullName = `${author.first_name} ${author.last_name}`;

  useEffect(() => {
    async function getCommentData() {
      const [user, reply] = await Promise.all([
        getUser(authorId),
        getCommentReplies(id),
      ]);
      setAuthor(() => user);
      setReplies(() => reply);
    }

    getCommentData();
  }, []);

  return (
    <div className={style.container}>
      <Images className={style.img} alt="comments" src={imgUrl} />
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.author} data-focused={openInput}>
            {authorFullName}
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
              Reply To {authorFullName}
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
