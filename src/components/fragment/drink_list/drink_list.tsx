import { DrinkDetail, DrinksProps } from "@/components";
import React from "react";
import style from "./drink_list.module.css";

export type DrinkListprops = {
  drinks: DrinksProps[];
  title: string;
};

export function DrinkList({ drinks, title }: DrinkListprops) {
  return (
    <div>
      <h3 className={style.title}>{title}</h3>
      <div className={style.drink_container}>
        {drinks.map((item, i) => (
          <DrinkDetail key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
