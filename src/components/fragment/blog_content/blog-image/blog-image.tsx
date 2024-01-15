import { Images } from "@/components";
import { getSupabasePublicUrl } from "@/utilities/supabase";
import React from "react";
import style from "./blog-image.module.css";

type BlogImageConfig = {
  variant: "fullwidth" | "square";
};

export type BlogImageProps = {
  content: string;
  props?: BlogImageConfig;
};

export function BlogImage({ content, props }: BlogImageProps) {
  const variant = props ? props.variant : null;
  const variantClass = variant == "fullwidth" ? style.fullwidth : style.square;

  return (
    <Images
      alt="blog image"
      src={getSupabasePublicUrl(content)}
      data-variant={variant || "fullwidth"}
      className={`${style.container} ${variantClass}`}
      style={{
        objectFit: "cover",
      }}
    />
  );
}
