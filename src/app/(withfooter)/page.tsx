"use client";
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
  PhotoGalery,
  Blog,
} from "@/components";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
      <HomeHero />
      <About />
      <Reservation />
      <MenuGroup />
      <Drinks />
      <ChefWord />
      <Testimony />
      <Restoview />
      <Awards />
      <PhotoGalery />
      <Blog />
    </>
  );
}
