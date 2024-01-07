import React from "react";
import style from "./resto_view.module.css";
import { Video, Signature } from "@/components";

const VIDEO_SRC = [
  {
    src: "/assets/video/resto_view.mp4",
    type: "video/mp4",
  },
  {
    src: "/assets/video/resto_view.webm",
    type: "video/webm",
  },
];

export function Restoview() {
  return (
    <div className={style.container}>
      <Video content={VIDEO_SRC} />
      <Signature className={style.signature} />
    </div>
  );
}
