"use client";
import React, { useEffect, useState } from "react";
import style from "./blog_detail.module.css";
import {
  BlogComment,
  BlogContent,
  BlogSidebar,
  Button,
  CommentInput,
  Images,
} from "@/components";
import Link from "next/link";
import {
  Tag,
  type BlogDetail,
  Comment as Comments,
  BlogContent as BlogContentType,
} from "@/utilities/blog_type";
import {
  getBlog,
  getBlogTag,
  getComment,
  getCommentCount,
} from "@/utilities/supabase";
import { useParams } from "next/navigation";
import { formatDate } from "@/utilities/date";
import { getSupabasePublicUrl } from "@/utilities/supabase";

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

export default function BlogDetail() {
  const [data, setData] = useState<BlogDetail | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const { id } = useParams();
  const blog_id = parseInt(id as string);
  const [comments, setComments] = useState<Comments[]>([]);
  const [commentTotal, setComentTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      const [comment, total, tag, data] = await Promise.all([
        getComment(blog_id),
        getCommentCount(blog_id),
        getBlogTag(blog_id),
        getBlog(blog_id),
      ]);
      setComments(() => comment);
      setComentTotal(() => total?.count);
      setData(() => data);
      setTags(() => tag);
      setLoading(false);
    }

    getData();
  }, [blog_id]);

  if (!data) return;

  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.blog_detail}>
          <p className={style.date}>{formatDate(data.created_at)}</p>
          <p className={style.author}>- {data.author}</p>
        </div>
        <h1 className={style.title}>{data.title}</h1>
        <Images
          className={style.hero_img}
          alt="blog_img"
          src={getSupabasePublicUrl(data.img)}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={style.body}>
        <div className={style.content}>
          {(data.content ? data.content : []).map((content, i) => {
            return <BlogContent key={i} {...content} />;
          })}
          <div className={style.footer}>
            <nav aria-label="blog tags navigation">
              <ul className={style.tag_wrapper}>
                {(tags || []).map((tag, i) => {
                  return (
                    <li key={i} className={style.tag}>
                      <Link href={"#"}>#{tag.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className={style.action_btn}>
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
            </div>
          </div>
        </div>
        <BlogSidebar />
      </div>
      <BlogComment commentTotal={commentTotal} comments={comments} />
      <CommentInput updateComments={setComments} comments={comments || []} />
    </div>
  );
}
