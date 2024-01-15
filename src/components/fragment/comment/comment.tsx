"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import style from "./comment.module.css";
import { Button, Images, Textarea } from "@/components";
import { Comment, CommentInput } from "@/utilities/blog_type";
import {
  createComment,
  getCommentReplies,
  getUser,
} from "@/utilities/supabase";
import { User } from "@/utilities/user_type";
import { formatDate } from "@/utilities/date";
import { useUserContext } from "@/components/context";
import { useParams } from "next/navigation";

const MAX_USER_COUNT = 100;

export function Comment({
  author: authorId,
  comment,
  created_at,
  id,
}: Comment) {
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [validuser, setValiduser] = useState<boolean>(true);
  const [author, setAuthor] = useState<User>({} as User);
  const [expandReplies, setExpandReplies] = useState<boolean>(false);
  const { id: blogs_id } = useParams();

  const userCtx = useUserContext();

  async function addReplies(e: FormEvent) {
    e.preventDefault();
    if (!userCtx || !userCtx.user) {
      setValiduser(() => false);
      return;
    }

    const reply: CommentInput = {
      author: userCtx.user.id,
      blog_id: parseInt(blogs_id as string),
      comment: inputReplyRef.current?.value || "",
      parent_id: id,
    };

    const newReply = await createComment(reply);
    if (!newReply) return;

    setReplies((e) => [...e, newReply]);
    setOpenInput(() => false);
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
      if (!user) return;
      setAuthor(() => user);
      setReplies(() => reply);
    }

    getCommentData();
  }, [authorId, id]);

  return (
    <div className={style.container}>
      <Images className={style.img} alt="comments" src={imgUrl} />
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.author} data-focused={openInput}>
            {authorFullName} {userCtx?.user?.id == authorId && ` (You)`}
          </p>
          <Button variant="secondary" onClick={openReplyInput}>
            Reply
          </Button>
        </div>

        <p className={style.date}>{formatDate(created_at)}</p>
        <p className={style.comment}>{comment}</p>
        {/* add reply */}
        <div
          className={style.reply_input_container}
          data-expand={openInput}
          aria-expanded={openInput}
        >
          {openInput && (
            <>
              <Button
                type="button"
                variant="secondary"
                p={0}
                className={style.btn}
              >
                Reply To {authorFullName}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setOpenInput(false)}
                p={0}
                className={style.btn}
              >
                Cancel Reply
              </Button>
              {!validuser && (
                <p className={style.err_msg}>
                  Please fill your identify / have your data saved
                </p>
              )}
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
        </div>
        {/* replies */}

        {!expandReplies && replies.length > 0 && (
          <Button
            variant="secondary"
            p={0}
            className={style.btn}
            onClick={() => setExpandReplies((e) => !e)}
          >
            See Replies
          </Button>
        )}

        <div className={style.replies_container} aria-expanded={expandReplies}>
          {expandReplies && (
            <>
              {replies.map((comment, i) => (
                <Comment key={i} {...comment} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
