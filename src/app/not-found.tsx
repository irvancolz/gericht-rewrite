"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./notfound.module.css";
import Image from "next/image";
import { Button, Copyright, Signature } from "@/components";
import Link from "next/link";
import { gsap } from "gsap";

export default function NotFound() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".notfound_content", {
        opacity: 0,
        y: 30,
        ease: "sine.out",
        stagger: 0.2,
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section className={style.container}>
      <div className={style.content_wrapper}>
        <Image
          alt="not found"
          src={"/assets/svg/notfound-ilustration.svg"}
          width={360}
          height={200}
          priority
          className="notfound_content"
        />
        <p className="notfound_content">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Button variant="primary" className="notfound_content">
          <Link href={"/"}>Back To Home</Link>
        </Button>
      </div>
      <Copyright />
      <Signature rotation="right" className={style.signature_left} />
      <Signature className={style.signature_right} />
    </section>
  );
}
