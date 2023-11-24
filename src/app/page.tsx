import Image from "next/image";
import styles from "./page.module.css";
import { Signature } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Signature rotation="right" />
    </main>
  );
}
