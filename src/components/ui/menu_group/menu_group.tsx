"use client";
import React, {
  CSSProperties,
  MouseEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import style from "./menu_group.module.css";
import Link from "next/link";
import { Signature } from "@/components";
import Image from "next/image";
import { gsap } from "gsap";

const MENU_LISTS = [
  {
    photoUrl: "/assets/png/menus_option_1.png",
    name: "Bar Menu",
  },
  {
    photoUrl: "/assets/png/menus_option_2.png",
    name: "Food Menu",
  },
  {
    photoUrl: "/assets/png/menus_option_3.png",
    name: "Desserts Menu",
  },
];

export function MenuGroup() {
  const [blurred, setBlurred] = useState<boolean>(false);
  const imgRef = useRef<HTMLSpanElement | null>(null);
  const menusRef = useRef<HTMLUListElement | null>(null);
  const [menuIdx, setMenuIdx] = useState<number>(0);
  const [yPos, setYPos] = useState<number>(0);
  const [activeMenu, setActiveMenu] = useState<string>(
    "/assets/png/menus_option_2.png"
  );
  const [previewShowed, setPreviewShowed] = useState<boolean>(false);

  function updateModalPosition(e: MouseEvent) {
    setYPos(e.clientY);
    setPreviewShowed(true);
    e.stopPropagation();
  }

  function updateModalImage(url: string) {
    setActiveMenu(url);
    setBlurred(true);
  }

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".menu_links", {
        yPercent: 100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: menusRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    }, menusRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    const saveGap = menuIdx * 100;
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        duration: 0.5,
        top: yPos - saveGap,
        ease: "sine.out",
      });
    });

    return () => ctx.revert();
  }, [menuIdx, yPos]);

  return (
    <div className={style.container}>
      <div
        data-blur={blurred}
        style={
          {
            backgroundImage: `url(${activeMenu})`,
          } as CSSProperties
        }
        className={style.background_image}
      ></div>

      <Signature rotation="right" className={style.signature} />

      <ul
        ref={menusRef}
        className={style.menus}
        onMouseLeave={() => setPreviewShowed(false)}
      >
        {MENU_LISTS.map((menu, i) => {
          return (
            <li
              key={i}
              onMouseEnter={(e) => {
                updateModalPosition(e);
                updateModalImage(menu.photoUrl);
                setMenuIdx(i + 1);
              }}
              onMouseLeave={() => {
                setPreviewShowed(false);
                setBlurred(false);
              }}
              className={`${style.menu_list} menu_links`}
            >
              <span>
                <Link href={"/coming-soon"}>{menu.name}</Link>
              </span>
            </li>
          );
        })}
        <span
          ref={imgRef}
          className={style.images_preview}
          data-show={previewShowed}
        >
          <Image
            alt="menu"
            src={activeMenu}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </span>
      </ul>
    </div>
  );
}
