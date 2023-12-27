import {
  BlogCard,
  BlogCardProps,
  BlogHero,
  BlogSidebar,
  Button,
} from "@/components";
import React from "react";
import style from "./blogs_page.module.css";

const BLOG_CONTENT: BlogCardProps[] = [
  {
    id: "1",
    img: "/assets/png/blog_post_img_1.png",
    author: "Annalisa L",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "16 Apr 2021",
    title: "tips for prepping and caring for your grill",
  },
  {
    id: "2",
    img: "/assets/png/blog_post_img_2.png",
    author: "John Micheal",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "23 May 2021",
    title: "summer cocktails and mocktails",
  },
  {
    id: "3",
    img: "/assets/png/blog_post_img_3.png",
    author: "Fred W",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "06 Aug 2021",
    title: "easy cooking for college students",
  },
  {
    id: "4",
    img: "/assets/png/blog_post_img_4.png",
    author: "Kaityln B",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.",
    created_at: "17 June 2018",
    title: "Co-ordination & Teamwork Tips from a sous chef",
  },
];

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <div className={`${style.content} container`}>
        <div className="wrapper">
          <div className={style.blogs}>
            {BLOG_CONTENT.map((blog) => {
              return <BlogCard key={blog.id} {...blog} />;
            })}
          </div>
          <Button className={style.btn}>View More</Button>
        </div>
        <BlogSidebar />
      </div>
    </>
  );
}
