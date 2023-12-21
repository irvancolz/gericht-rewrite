"use client";
import React, { ComponentProps, useLayoutEffect, useRef } from "react";
import style from "./drinks_detail.module.css";
import gsap from "gsap";

export type DrinksProps = {
  name: string;
  price: number;
  ingredients: string[];
} & ComponentProps<"div">;

export function DrinkDetail({
  name,
  ingredients,
  price,
  ...props
}: DrinksProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.from(".drinks_detail", {
        opacity: 0,
        y: 30,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".drinks_detail",
          start: "top 90%",
        },
      });
      gsap.from(".drink_ingredients", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".drinks_detail",
          start: "top 90%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={style.container} {...props}>
      <div className={`${style.name_wrapper} drinks_detail`}>
        <p className={style.name}>{name}</p>
        <span></span>
        <p className={style.price}>${price}</p>
      </div>
      <div className={style.ingredients}>
        {ingredients.map((item, i) => {
          return (
            <>
              <p className="drink_ingredients">{item}</p>
              {i != ingredients.length - 1 && (
                <span className={`${style.separator} drink_ingredients`}></span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
