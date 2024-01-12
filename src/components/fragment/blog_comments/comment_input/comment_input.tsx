"use client";
import React, { FormEvent, useState } from "react";
import style from "./comment_input.module.css";
import { Button, Checkbox, Comment, Input, Textarea } from "@/components";
import { useUserContext } from "@/components/context";
import { addUser, createComment, updateUser } from "@/utilities/supabase";
import { useParams } from "next/navigation";
import { UserAuth } from "@/utilities/user_type";
import { Comment as Comments } from "@/utilities/blog_type";

export function CommentInput({
  updateComments,
  comments,
}: {
  updateComments: (a: Comments[]) => void;
  comments: Comments[];
}) {
  const userCtx = useUserContext();
  const { id: blogs_id } = useParams();
  const [comment, setComment] = useState<string>("");
  const [first_name, setFirstName] = useState<string>(
    userCtx?.user?.first_name || ""
  );
  const [last_name, setLastName] = useState<string>(
    userCtx?.user?.last_name || ""
  );
  const [validuser, setValiduser] = useState<boolean>(true);
  const [savedPreferences, setSavedPreferences] = useState<boolean>(
    userCtx?.user?.save!!
  );

  const blog_id = parseInt(blogs_id as string);

  const postComment = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!userCtx) return;
      // add warning to unvalidated user
      if (!last_name && !first_name) {
        setValiduser(() => false);
        return;
      }
      // create new user if the browser did not have any saved
      if (!userCtx.user) {
        const newUser = await addUser({ first_name, last_name });
        const userAuth: UserAuth = {
          id: newUser.id,
          role: "user",
          created_at: newUser.created_at,
          first_name: newUser.first_name,
          last_name: newUser.last_name,
          save: savedPreferences,
        };
        userCtx?.updateUser(userAuth);
        const newComment = await createComment({
          comment,
          blog_id,
          author: newUser.id,
        });
        if (!newComment) return;
        updateComments([...comments, newComment]);
        return;
      }

      // also update record in db if the user change their name
      if (
        userCtx.user.first_name != first_name ||
        userCtx.user.last_name != last_name
      ) {
        updateUser({ first_name, last_name, id: userCtx.user.id });
      }
      const newComment = await createComment({
        comment,
        blog_id,
        author: userCtx.user.id,
      });
      if (!newComment) return;
      updateComments([...comments, newComment]);
    } catch (error) {
      console.log(error);
    } finally {
      setComment(() => "");
    }
  };

  return (
    <div className={style.container} id="comment_input">
      <h3 className={style.title}>Post A Comment</h3>
      <form onSubmit={postComment} className={style.form}>
        <Textarea
          className={style.input}
          placeholder="Hello There, My message..."
          value={comment}
          onChange={(e) => setComment(() => e.target.value)}
          required
        />
        {!validuser && (
          <p className={style.err_msg}>
            Please fill your identify / have your data saved
          </p>
        )}
        <Input
          className={style.input}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(() => e.target.value)}
          value={first_name}
          required
        />
        <Input
          className={style.input}
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(() => e.target.value)}
          required
        />
        <Checkbox
          label="Save my name and email in this browser for the next time I comment."
          checked={savedPreferences}
          onChange={(e) => setSavedPreferences(() => e.target.checked)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
