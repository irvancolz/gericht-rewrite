import Footer from "@/components/ui/footer/footer";
import React, { ReactNode } from "react";
import styles from "../page.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
