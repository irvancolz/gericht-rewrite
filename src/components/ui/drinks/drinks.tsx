import React from "react";
import style from "./drinks.module.css";
import { SectionTitle } from "..";
import { Button, DrinkList, DrinksProps, Images } from "@/components";
import Link from "next/link";
import Image from "next/image";

const BEERS: DrinksProps[] = [
  {
    name: "Chapel Hill Shiraz",
    ingredients: ["AU", "Bottle"],
    price: 56,
  },
  {
    name: "Catena Malbec",
    ingredients: ["AR", "Bottle"],
    price: 59,
  },
  {
    name: "La Vieille Rosé",
    ingredients: ["FR", "750 ml"],
    price: 44,
  },
  {
    name: "Rhino Pale Ale",
    ingredients: ["CA ", "750 ml"],
    price: 31,
  },
  {
    name: "Irish Guinness",
    ingredients: ["IE", "750 ml"],
    price: 26,
  },
];

const COOKTAILS: DrinksProps[] = [
  {
    name: "Aperol Spritz",
    price: 20,
    ingredients: ["Aperol", "Villa Marchesi prosecco", "soda", "30ml"],
  },
  {
    name: "Dark 'N' Stormy",
    price: 16,
    ingredients: ["Dark rum", "Ginger beer", "Slice of lime."],
  },
  {
    name: "Daiquiri",
    price: 10,
    ingredients: ["Rum", "Citrus juice", "Sugar"],
  },
  {
    name: "Old Fashioned",
    price: 31,
    ingredients: ["Bourbon", " Brown sugar", "Angostura Bitters"],
  },
  {
    name: "Negroni",
    price: 26,
    ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
  },
];

export function Drinks() {
  return (
    <div className={style.container}>
      <section className={style.content_wrapper}>
        <SectionTitle
          title="Menu that fits you palatte"
          desc="Today’s Special"
        />

        <div className={style.menu_wrapper}>
          <DrinkList title="Wine & Beer" drinks={BEERS} />
          <Images
            alt="drinks"
            src={"/assets/png/drinks_bg.png"}
            className={style.image}
          />
          <DrinkList title="Cocktails" drinks={COOKTAILS} />
        </div>

        <Button className={style.button}>
          <Link href={"/coming-soon"}>View More</Link>
        </Button>
      </section>
    </div>
  );
}
