import React from "react";
import style from "./coming-soon.module.css";
import { Button, Copyright, Countdown, Signature } from "@/components";
import Link from "next/link";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <>
      <section className={style.container}>
        <div className={style.content_wrapper}>
          <div>
            <h1 className={style.title}>Coming Soon</h1>
            <Image
              alt="not found"
              src={"/assets/svg/spoon.svg"}
              width={60}
              height={14}
              priority
              className="spoon"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            feugiat orci tristique bibendum sollicitudin at aliquam. Nulla
            varius augue eu orci vel.
          </p>
          <Countdown />
          <Button variant="primary" className="notfound_content">
            <Link href={"/"}>Back To Home</Link>
          </Button>
        </div>
        <Signature className={style.signature_right} />
        <Signature className={style.signature_left} />
      </section>
      <Copyright />
    </>
  );
}
