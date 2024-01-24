"use client";
import { Button, Images } from "@/components";
import React from "react";
import style from "./blog_actions.module.css";

const Icon = ({ src }: { src: string }) => {
  return <Images className={style.icon} src={src} alt="icon" />;
};

function scrollToCommentInput() {
  const commentInput = document.getElementById("comment_input");
  const inputRect = commentInput?.getBoundingClientRect();

  if (!inputRect) return;
  const scrollTop = scrollY || document.documentElement.scrollTop;
  scrollTo({
    behavior: "smooth",
    left: 0,
    // brought the entire input element to the screen
    top: inputRect.top + scrollTop,
  });
  const scroll = () => {
    commentInput?.querySelector("textarea")?.focus();
  };
  window.addEventListener("scrollend", scroll);

  setTimeout(() => {
    window.removeEventListener("scrollend", scroll);
  }, 1000);
}

export function BlogActions() {
  return (
    <>
      <Button
        variant="secondary"
        leftIcon={<Icon src={"/assets/svg/chat_bubble.svg"} />}
        onClick={scrollToCommentInput}
      >
        Comment
      </Button>

      <Button
        variant="secondary"
        leftIcon={<Icon src={"/assets/svg/favorite.svg"} />}
      >
        Like
      </Button>
    </>
  );
}
