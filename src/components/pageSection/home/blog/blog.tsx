import React from "react";
import style from "./blog.module.css";
import { BlogCard, Button, SectionTitle, Signature } from "@/components";
import Link from "next/link";
import { getBlogRecord } from "@/utilities/supabase";

export async function Blog() {
  const blogs = await getBlogRecord();
  return (
    <div className={style.container}>
      <Signature className={style.signature} />
      <Signature rotation="right" className={style.signature} />
      <SectionTitle title="Blogs" desc="Gerícht updates" />
      <div className={style.blogs}>
        {blogs.map((blog, i) => {
          return <BlogCard key={i} {...blog} />;
        })}
      </div>
      <Button>
        <Link href={"/blog"}>View More</Link>
      </Button>
    </div>
  );
}
