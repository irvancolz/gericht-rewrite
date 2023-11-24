"use client";
import styles from "./page.module.css";
import { Signature } from "@/components";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({});
    function lenisRaf(time: number) {
      lenis.raf(time);
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
