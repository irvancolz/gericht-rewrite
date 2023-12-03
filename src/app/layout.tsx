"use client";
import "./globals.css";
import { Topnav } from "../components";
import { useEffect, useLayoutEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <html lang="en">
      <body>
        <Topnav />
        {isPageLoaded && children}
        <div id="modal_container"></div>
      </body>
    </html>
  );
}
