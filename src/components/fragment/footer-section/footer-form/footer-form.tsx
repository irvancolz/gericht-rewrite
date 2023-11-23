"use client";
import React, { FormEvent } from "react";
import style from "./footer-form.module.css";
import { Button } from "@/components";

function handleSubmit(e: FormEvent) {
  e.preventDefault();
  console.log("form submitted");
}

export function FooterForm() {
  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input type="email" placeholder="Email Address" />
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </form>
  );
}
