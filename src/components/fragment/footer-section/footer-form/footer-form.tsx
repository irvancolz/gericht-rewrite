"use client";
import React, { FormEvent } from "react";
import style from "./footer-form.module.css";
import { Button, Input } from "@/components";

function handleSubmit(e: FormEvent) {
  e.preventDefault();
  console.log("form submitted");
}

export function FooterForm({ className }: { className?: string }) {
  return (
    <form className={`${style.container} ${className}`} onSubmit={handleSubmit}>
      <Input className={style.input} type="text" placeholder="Email Address" />
      <Button variant="primary" type="submit">
        Subscribe
      </Button>
    </form>
  );
}
