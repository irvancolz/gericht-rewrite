"use client";
import styles from "../page.module.css";
import { About, Drinks, HomeHero, MenuGroup, Reservation } from "@/components";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
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
      <HomeHero />
      <About />
      <Reservation />
      <MenuGroup />
      <Drinks />
    </main>
  );
}
