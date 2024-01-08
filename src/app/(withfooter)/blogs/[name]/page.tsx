"use client";
import React from "react";
import style from "./blog_detail.module.css";
import {
  BlogComment,
  BlogContent,
  BlogContentProps,
  BlogSidebar,
  Button,
  CommentInput,
  Images,
} from "@/components";
import Link from "next/link";

const BLOG_CONTENT: BlogContentProps[] = [
  {
    type: "text",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
    pharetra ut lobortis id. Commodo sit libero lacus a egestas
    penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
    Elementum felis nibh at purus consectetur phasellus lacus,
    pellentesque dictumst. Pellentesque eu malesuada id vitae risus,
    libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus
    leo eget.`,
  },
  {
    type: "title",
    content: `How to prepare your grill`,
  },

  {
    type: "text",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
    pharetra ut lobortis id. Commodo sit libero lacus a egestas
    penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.`,
  },

  {
    type: "list",
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Tincidunt pharetra ut lobortis id.`,
      `Commodo sit libero lacus a egestas penatibus pretium quis lorem.`,
    ],
  },
  {
    type: "video",
    content: [
      {
        src: "/assets/video/resto_view.mp4",
        type: "video/mp4",
      },
      {
        src: "/assets/video/resto_view.webm",
        type: "video/webm",
      },
    ],
  },
  {
    type: "text",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
    pharetra ut lobortis id. Commodo sit libero lacus a egestas
    penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
    Elementum felis nibh at purus consectetur phasellus lacus,
    pellentesque dictumst. Pellentesque eu malesuada id vitae risus,
    libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus
    leo eget.`,
  },

  {
    type: "qoute",
    content: `There is no love sincerer than the love of food.`,
  },
  {
    type: "title",
    content: `How to care for your grill`,
  },
  {
    type: "text",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin cidunt
    pharetra ut lobortis id. Commodo sit libero lacus a egestas
    penatibus pretium quis lorem.`,
  },
  {
    type: "list",
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Tincidunt pharetra ut lobortis id.`,
      `Commodo sit libero lacus a egestas penatibus pretium quis lorem.`,
    ],
  },

  {
    type: "text",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
    pharetra ut lobortis id. Commodo sit libero lacus a egestas
    penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.`,
  },
];

const BLOG_DATA = {
  date: "16 Apr 2021",
  author: "Annalisa L",
  title: " tips for prepping and caring for your grill",
  hero_img: "/assets/png/blog_detail_hero_img_1.png",
  tags: ["grilling", "outdoor", "cooking"],
  content: BLOG_CONTENT,
};

const Icon = ({ src }: { src: string }) => {
  return <Images className={style.icon} src={src} alt="icon" />;
};

export default function BlogDetail() {
  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.blog_detail}>
          <p className={style.date}>{BLOG_DATA.date}</p>
          <p className={style.author}>- {BLOG_DATA.author}</p>
        </div>
        <h1 className={style.title}>{BLOG_DATA.title}</h1>
        <Images
          className={style.hero_img}
          alt="blog_img"
          src={BLOG_DATA.hero_img}
        />
      </div>
      <div className={style.body}>
        <div className={style.content}>
          {BLOG_DATA.content.map((content, i) => {
            return <BlogContent key={i} {...content} />;
          })}
          <div className={style.footer}>
            <nav aria-label="blog tags navigation">
              <ul className={style.tag_wrapper}>
                {BLOG_DATA.tags.map((tag, i) => {
                  return (
                    <li key={i} className={style.tag}>
                      <Link href={""}>#{tag}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div>
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
