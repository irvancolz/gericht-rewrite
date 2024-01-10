"use client";
import { BlogCard, BlogSidebar, Button } from "@/components";
import React, { useEffect, useState } from "react";
import style from "./blogs_page.module.css";
import { Blog } from "@/utilities/blog_type";
import { getBlogRecord } from "@/utilities/supabase";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    async function getBlog() {
      const resp = await getBlogRecord();
      if (resp) {
        setBlogs(() => [...resp]);
        console.log(resp);
      }
    }
    getBlog();
  }, []);
  return (
    <>
      <div className={`${style.content} container`}>
        <div className="wrapper">
          <div className={style.blogs}>
            {blogs.map((blog, i) => {
              return <BlogCard key={i} {...blog} />;
            })}
          </div>
          <Button className={style.btn}>View More</Button>
        </div>
        <BlogSidebar />
      </div>
    </>
  );
}
