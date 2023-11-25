"use client";
import styles from "./page.module.css";
import { Signature } from "@/components";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.75,
      easing: (x: number) => 1 - (1 - x) * (1 - x),
    });
    function lenisRaf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(lenisRaf);
    }
    requestAnimationFrame(lenisRaf);
  }, []);

  return (
    <main className={styles.main}>
      <Signature rotation="right" />
    </main>
  );
}
