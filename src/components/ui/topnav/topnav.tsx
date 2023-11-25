"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import style from "./topnav.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
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
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(container.current, {
        opacity: 0,
        yPercent: -20,
        duration: 0.3,
        ease: "sine.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={container} className={style.container}>
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
              <Link
                href={item.href}
                style={{
                  fontWeight: 400,
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={style.secondary_nav}>
        <Button className={style.nav_btn} variant="secondary">
          Login / Registration
        </Button>
        <span className={style.separator}></span>
        <Button className={style.nav_btn} variant="secondary">
          Book Table
        </Button>
      </div>
    </nav>
  );
}
