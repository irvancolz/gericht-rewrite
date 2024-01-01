import { BlogHero } from "@/components";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogHero />
      {children}
    </>
  );
}
