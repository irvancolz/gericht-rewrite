import React from "react";
import style from "./email-subs.module.css";
import { SectionTitle, FooterForm } from "@/components";

export function EmailSubscribtion() {
  return (
    <section className={style.container}>
      <SectionTitle
        align="center"
        title="Newsletter"
        desc="Subscribe to Our Newsletter"
      />
      <p>And never miss latest Updates!</p>
      <FooterForm />
    </section>
  );
}
