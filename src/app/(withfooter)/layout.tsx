"use client";
import Footer from "@/components/ui/footer/footer";
import React, { ReactNode } from "react";
import styles from "../page.module.css";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (x: number) => Math.sin((x * Math.PI) / 2),
    });

    function lenisRaf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(lenisRaf);
    }

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    requestAnimationFrame(lenisRaf);
  }, []);
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
