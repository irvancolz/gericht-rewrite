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
import { Tag, type BlogDetail } from "@/utilities/blog_type";
import { getBlog, getBlogTag } from "@/utilities/supabase";
import { useParams, usePathname } from "next/navigation";
import { formatDate } from "@/utilities/date";
import { getSupabasePublicUrl } from "@/utilities/supabase";

const Icon = ({ src }: { src: string }) => {
  return <Images className={style.icon} src={src} alt="icon" />;
};

export default function BlogDetail() {
  const [data, setData] = useState<BlogDetail | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);

  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const tag = await getBlogTag(parseInt(id as string));
      const data = await getBlog(parseInt(id as string));
      setData(() => data);
      setTags(() => tag);
    }

    getData();
  }, [id]);

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
                {tags.map((tag, i) => {
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
              >
                <a href="#comment_input">Comment</a>
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
      <BlogComment />
      <CommentInput />
    </div>
  );
}
