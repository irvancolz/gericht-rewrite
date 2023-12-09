import React from "react";
import style from "./resto_view.module.css";
import { RestoVideo, Signature } from "@/components";

export function Restoview() {
  return (
    <div className={style.container}>
      <RestoVideo />
      <Signature className={style.signature} />
    </div>
  );
}
