"use client";
import React, { FormEvent } from "react";
import style from "./comment_input.module.css";
import { Button, Checkbox, Input, Textarea } from "@/components";

export function CommentInput() {
  const postComment = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={style.container} id="comment_input">
      <h3 className={style.title}>Post A Comment</h3>
      <form onSubmit={postComment} className={style.form}>
        <Textarea
          className={style.input}
          placeholder="Hello There, My message..."
          required
        />
        <Input
          className={style.input}
          type="text"
          placeholder="First Name"
          required
        />
        <Input
          className={style.input}
          type="text"
          placeholder="Last Name"
          required
        />
        <Checkbox label="Save my name and email in this browser for the next time I comment." />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
