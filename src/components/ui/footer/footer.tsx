import React, { FormEvent } from "react";
import style from "./footer.module.css";
import { Button, SectionTitle } from "@/components";
import Image from "next/image";

export default function Footer() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <footer className={style.wrapper}>
      <div className={style.container}>
        <section className={style.subscribe_email}>
          <SectionTitle
            align="center"
            title="Newsletter"
            desc="Subscribe to Our Newsletter"
          />
          <p>And never miss latest Updates!</p>
          <form className={style.email_form}>
            <input type="email" placeholder="Email Address" />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        </section>
        <section className={style.address}>
          <div className={style.address_wrapper}>
            <div className={style.address_section}>
              <h3>Contact Us</h3>
              <p>9 W 53rd St, New York, NY 10019, USA</p>
              <p>+1 212-344-1230</p>
              <p>+1 212-344-1230</p>
            </div>
            <div>
              <h3>Gericht</h3>
              <p>
                &ldquo;The best way to find yourself is to lose yourself in the
                service of others.&rdquo;
              </p>
            </div>
            <div className={style.address_section}>
              <h3>Working Hours</h3>
              <p>
                Monday-Friday: <br />
                08:00 am -12:00 am
              </p>
              <p>
                Saturday-Sunday: <br />
                07:00am -11:00 pm
              </p>
            </div>
          </div>
          <p
            className="copyright"
            style={{ textAlign: "center", marginTop: "5rem" }}
          >
            2021 Gerícht. All Rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
