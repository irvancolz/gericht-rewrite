"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./email-subs.module.css";
import { SectionTitle, FooterForm } from "@/components";
import { gsap } from "gsap";

export function EmailSubscribtion() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".email_subs_content", {
        opacity: 0,
        yPercent: 30,
        stagger: 0.2,
        scrollTrigger: {
          start: "clamp(top 80%)",
          trigger: ".email_subs_content",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={style.container}>
      <SectionTitle
        align="center"
        title="Newsletter"
        desc="Subscribe to Our Newsletter"
      />
      <p className="email_subs_content">And never miss latest Updates!</p>
      <FooterForm className="email_subs_content" />
    </section>
  );
}
