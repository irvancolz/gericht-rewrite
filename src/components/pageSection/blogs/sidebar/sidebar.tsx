"use client";
import React, { useEffect, useState } from "react";
import style from "./sidebar.module.css";
import {
  BlogCard,
  BlogSidebarContent,
  Images,
  Loader,
  SocialMedia,
} from "@/components";
import Link from "next/link";
import { Blog, Tag } from "@/utilities/blog_type";
import {
  Categories,
  getAllCategories,
  getLatestBlog,
  getTags,
} from "@/utilities/supabase";
import { splitArray } from "@/utilities/array";

export function BlogSidebar() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[][]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [latestPost, setLatestpost] = useState<Blog>({} as Blog);

  useEffect(() => {
    async function getInitialData() {
      const [tag, category, post] = await Promise.all([
        getTags(),
        getAllCategories(),
        getLatestBlog(),
      ]);

      const splittedTags = splitArray(tag, 3);
      setTags(() => splittedTags);
      setCategories(() => category);
      setLatestpost(() => post);
      setLoading(() => false);
    }

    getInitialData();
  }, []);

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
          {loading ? (
            <>
              <Loader width={300} height={30} color="gray" />
              <Loader width={300} height={30} color="gray" />
              <Loader width={300} height={30} color="gray" />
            </>
          ) : (
            categories.map((category, i) => {
              return (
                <Link
                  href={`category/${category.name}`}
                  key={i}
                  className={style.categories}
                >
                  <span className={style.category_name}>{category.name}</span>
                  <span className={style.divider}></span>
                  <span>({category.blog[0].count})</span>
                </Link>
              );
            })
          )}
        </div>
      </BlogSidebarContent>
      <BlogSidebarContent title="Our Latest Posts">
        <BlogCard {...latestPost} loaderVariant="gray" />
      </BlogSidebarContent>
      <BlogSidebarContent title="Related Tags">
        {loading ? (
          <>
            <Loader width={300} height={30} color="gray" />
            <Loader width={300} height={30} color="gray" />
            <Loader width={300} height={30} color="gray" />
          </>
        ) : (
          tags.map((row, i) => {
            return (
              <p key={i} className={style.row_tag}>
                {row.map((tag, j) => {
                  return (
                    <Link
                      href={`tag/${tag.name}`}
                      key={j}
                      className={style.tag}
                    >
                      {tag.name}
                    </Link>
                  );
                })}
              </p>
            );
          })
        )}
      </BlogSidebarContent>
      <BlogSidebarContent title="Share">
        <SocialMedia />
      </BlogSidebarContent>
    </div>
  );
}
