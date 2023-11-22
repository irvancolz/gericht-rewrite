import React from "react";
import style from "./topnav.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

const mainNavLink = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/pages",
    label: "Pages",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/landing",
    label: "Landing",
  },
];

export function Topnav() {
  return (
    <nav className={style.container}>
      <Link href="/">
        <Image
          src="/assets/svg/gericht-header-logo.svg"
          alt="gericht logo"
          width={160}
          height={64}
        />
      </Link>

      <ul className={style.main_nav}>
        {mainNavLink.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>

      <div className={style.secondary_nav}>
        <Button variant="secondary">Login / Registration</Button>
        <span className={style.separator}></span>
        <Button variant="secondary">Book Table</Button>
      </div>
    </nav>
  );
}
