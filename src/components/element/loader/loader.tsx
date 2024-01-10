import React from "react";
import style from "./loader.module.css";

declare module "react" {
  // augment CSSProperties here
  interface CSSProperties {
    "--main-col"?: string | number;
    "--height"?: string | number;
    "--width"?: string | number;
  }
}

export type LoaderProps = {
  color?: "dark" | "gray";
  height?: number;
  width?: number;
};

export function Loader({ color = "dark", height, width }: LoaderProps) {
  return (
    <div
      className={style.container}
      style={{
        "--main-col":
          color === "dark"
            ? "var(--med-gray-bg-col)"
            : "var(--dark-gray-bg-col)",
        "--height": height ? height + "px" : "1.5rem",
        "--width": width ? width + "px" : "100%",
      }}
    >
      <div className={style.loader}></div>
    </div>
  );
}
