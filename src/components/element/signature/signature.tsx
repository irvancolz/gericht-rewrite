import Image from "next/image";
import style from "./signature.module.css";
import React, { ComponentPropsWithoutRef } from "react";

export function Signature({
  rotation = "left",
  className,
}: {
  rotation?: string;
  className?: string;
} & ComponentPropsWithoutRef<"div">) {
  const text = "DELIGHT IN EVERY BITE ".split("");
  return (
    <div
      className={className}
      style={{
        width: "fit-content",
      }}
    >
      <div className={style.container}>
        <p
          className={`${style.text_wrapper} ${
            rotation == "left" ? style.rotate_left : style.rotate_right
          }`}
        >
          {text.map((t, i) => (
            <span
              key={i}
              className={style.text}
              style={{
                rotate: `${(360 / text.length) * i}deg`,
              }}
            >
              {t}
            </span>
          ))}
        </p>
        <Image
          src={"/assets/svg/cross-spoon.svg"}
          alt="signature"
          height={73}
          width={73}
        />
      </div>
    </div>
  );
}
