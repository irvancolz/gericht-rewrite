import React from "react";
import Image from "next/image";
import style from "./spoon.module.css";

export function Spoon({
  className,
  orientation = "right",
}: {
  className?: string;
  orientation?: "left" | "right";
}) {
  const orientationClass = orientation == "right" ? style.right : style.left;

  return (
    <span
      style={{
        display: "block",
        width: "fit-content",
      }}
      className={className}
    >
      <div className={`${style.container} ${orientationClass}`}>
        <Image alt="spoon" src={"/assets/svg/spoon.svg"} fill />
      </div>
    </span>
  );
}
