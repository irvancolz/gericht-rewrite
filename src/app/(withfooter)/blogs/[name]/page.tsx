import React from "react";
import style from "./blog_detail.module.css";
import {
  BlogComment,
  BlogSidebar,
  Button,
  Comment,
  CommentInput,
  Images,
} from "@/components";

export default function BlogDetail() {
  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.blog_detail}>
          <p className={style.date}>16 Apr 2021</p>
          <p className={style.author}>- Annalisa L</p>
        </div>
        <h1 className={style.title}>
          tips for prepping and caring for your grill
        </h1>
        <Images
          className={style.hero_img}
          alt="blog_img"
          src={"/assets/png/blog_detail_hero_img_1.png"}
        />
      </div>
      <div className={style.body}>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            pharetra ut lobortis id. Commodo sit libero lacus a egestas
            penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
            Elementum felis nibh at purus consectetur phasellus lacus,
            pellentesque dictumst. Pellentesque eu malesuada id vitae risus,
            libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus
            leo eget.
          </p>
          <h3>How to prepare your grill</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            pharetra ut lobortis id. Commodo sit libero lacus a egestas
            penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li> Tincidunt pharetra ut lobortis id.</li>
            <li>
              Commodo sit libero lacus a egestas penatibus pretium quis lorem.
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            pharetra ut lobortis id. Commodo sit libero lacus a egestas
            penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
            Elementum felis nibh at purus consectetur phasellus lacus,
            pellentesque dictumst. Pellentesque eu malesuada id vitae risus,
            libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus
            leo eget.
          </p>
          <p>There is no love sincerer than the love of food.</p>
          <h3>How to care for your grill</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin cidunt
            pharetra ut lobortis id. Commodo sit libero lacus a egestas
            penatibus pretium quis lorem.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li> Tincidunt pharetra ut lobortis id.</li>
            <li>
              Commodo sit libero lacus a egestas penatibus pretium quis lorem.
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            pharetra ut lobortis id. Commodo sit libero lacus a egestas
            penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
          </p>
          <div className="footer">
            <nav aria-label="blog tags navigation">
              <ul>
                <li>#Grilling</li>
                <li>#Outdoor</li>
                <li>#Cooking</li>
              </ul>
            </nav>
            <div>
              <Button variant="secondary">Comment</Button>
              <Button variant="secondary">Like</Button>
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
