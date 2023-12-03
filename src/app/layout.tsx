"use client";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Topnav } from "../components";
import { useEffect, useState } from "react";

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
