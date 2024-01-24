import { BlogCard, BlogSidebar, Button, Loader } from "@/components";
import React, { useEffect, useState } from "react";
import style from "./blogs_page.module.css";
import { Blog } from "@/utilities/blog_type";
import { getBlogRecord } from "@/utilities/supabase";

export default async function BlogsPage() {
  const blogs = await getBlogRecord();
  return (
    <>
      <div className={`${style.content} container`}>
        <div className="wrapper">
          <div className={style.blogs}>
            {blogs.map((blog, i) => {
              return <BlogCard loaderVariant="dark" key={i} {...blog} />;
            })}
          </div>
          <Button className={style.btn}>View More</Button>
        </div>
        <BlogSidebar />
      </div>
    </>
  );
}

const CardLoader = () => {
  return (
    <div>
      <Loader width={350} height={400} color="dark" />
      <Loader width={250} height={20} color="dark" />
      <Loader width={350} height={50} color="dark" />
    </div>
  );
};
const Loading = () => {
  return (
    <div className={style.loader_container}>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </div>
  );
};
