import React from "react";
import style from "./copyright.module.css";

export function Copyright() {
  return (
    <p className={style.text}>
      {new Date().getFullYear()} Gericht by Irvan Saharudin . All Rights
      reserved.
    </p>
  );
}
