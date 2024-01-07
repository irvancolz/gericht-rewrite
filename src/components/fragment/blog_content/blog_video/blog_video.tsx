import React from "react";
import style from "./blog_video.module.css";
import { Video, VideoProps } from "@/components";

export function BlogVideo(props: VideoProps) {
  return (
    <div className={style.container}>
      <Video {...props} />
    </div>
  );
}
