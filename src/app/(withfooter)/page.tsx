"use client";
import styles from "../page.module.css";
import {
  About,
  ChefWord,
  Drinks,
  HomeHero,
  MenuGroup,
  Awards,
  Reservation,
  Restoview,
  Testimony,
} from "@/components";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.75,
      easing: (x: number) => Math.sin((x * Math.PI) / 2),
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
      <ChefWord />
      <Testimony />
      <Restoview />
      <Awards />
    </main>
  );
}
