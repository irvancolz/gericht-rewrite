import React from "react";
import style from "./sidebar.module.css";
import {
  BlogCard,
  BlogCardProps,
  BlogSidebarContent,
  Images,
  SocialMedia,
} from "@/components";
import Link from "next/link";

const DUMMY_POST: BlogCardProps = {
  id: "2",
  img: "/assets/png/blog_post_img_2.png",
  author: "John Micheal",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
  created_at: "23 May 2021",
  title: "summer cocktails and mocktails",
};

const RELATED_TAGS: string[][] = [
  ["Grilling", "Cooking", "Baking"],
  ["Cuisines", "Chef", "Alcohol Mixing"],
];

const CATEGORIES: { name: string; count: number }[] = [
  {
    name: "Photography",
    count: 1,
  },
  {
    name: "Baking",
    count: 2,
  },
  {
    name: "Cooking Tips",
    count: 6,
  },
];

export function BlogSidebar() {
  return (
    <div className={style.container}>
      <BlogSidebarContent title="Search page">
        <div className={style.input_wrapper}>
          <input
            type="text"
            placeholder="type something"
            className={style.search_input}
          />

          <Images
            src={"/assets/svg/search.svg"}
            alt="search"
            className={style.img}
          />
        </div>
      </BlogSidebarContent>
      <BlogSidebarContent title="All categories">
        <div className={style.category_wrapper}>
          {CATEGORIES.map((category, i) => {
            return (
              <Link href={""} key={i} className={style.categories}>
                <span className={style.category_name}>{category.name}</span>
                <span className={style.divider}></span>
                <span>({category.count})</span>
              </Link>
            );
          })}
        </div>
      </BlogSidebarContent>
      <BlogSidebarContent title="Our Latest Posts">
        <BlogCard {...DUMMY_POST} />
      </BlogSidebarContent>
      <BlogSidebarContent title="Related Tags">
        {RELATED_TAGS.map((row, i) => {
          return (
            <p key={i} className={style.row_tag}>
              {row.map((tag, j) => {
                return (
                  <Link href={""} key={j} className={style.tag}>
                    {tag}
                  </Link>
                );
              })}
            </p>
          );
        })}
      </BlogSidebarContent>
      <BlogSidebarContent title="Share">
        <SocialMedia />
      </BlogSidebarContent>
    </div>
  );
}
