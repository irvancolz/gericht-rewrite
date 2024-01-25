"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import style from "./topnav.module.css";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Button, Signature } from "@/components";

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
    label: "Contact Us",
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
  const mainNav = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((e) => !e);
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(container.current, {
        opacity: 0,
        yPercent: -30,
        duration: 0.5,
        ease: "sine.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className={style.header}>
      <nav
        ref={container}
        className={`${style.container} ${
          isMenuOpen ? style.expanded : style.closed
        }`}
      >
        <div>
          <Link href="/" className={style.main_logo}>
            <Image
              src="/assets/svg/gericht-header-logo.svg"
              alt="gericht logo"
              width={160}
              height={64}
              priority
            />
          </Link>
          <Button
            variant="secondary"
            onClick={toggleMenu}
            className={style.menu_btn}
          >
            <Image
              alt="menu_btn"
              src={"/assets/svg/sidebar-logo.svg"}
              height={64}
              width={64}
            />
          </Button>
        </div>

        <ul className={style.main_nav} ref={mainNav}>
          {mainNavLink.map((item, i) => {
            return (
              <li key={i} className={style.navlink}>
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
      <Signature
        className={`${style.signature} signature ${
          isMenuOpen ? "" : style.hidden
        }`}
      />
    </header>
  );
}
