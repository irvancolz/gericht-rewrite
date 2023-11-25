import React, { FormEvent } from "react";
import style from "./footer.module.css";
import {
  Copyright,
  EmailSubscribtion,
  FooterCenterContent,
  FooterForm,
  FooterSection,
  SectionTitle,
} from "@/components";

export default function Footer() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <footer className={style.wrapper}>
      <div className={style.container}>
        <EmailSubscribtion />
        <section className={style.address}>
          <FooterSection title="Contact Us">
            <p
              style={{
                marginBottom: "8px",
              }}
            >
              9 W 53rd St, New York, NY 10019, USA
            </p>
            <p>+1 212-344-1230</p>
            <p>+1 212-344-1230</p>
          </FooterSection>

          <FooterCenterContent />

          <FooterSection title="Working Hours">
            <p
              style={{
                marginBottom: "8px",
              }}
            >
              Monday-Friday: <br />
              08:00 am -12:00 am
            </p>
            <p>
              Saturday-Sunday: <br />
              07:00am -11:00 pm
            </p>
          </FooterSection>
        </section>
        <Copyright />
      </div>
    </footer>
  );
}
