"use client";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Topnav } from "../components";
import { useEffect, useState } from "react";
import {
  getBlogRecord,
  getComment,
  getCommentReplies,
} from "@/utilities/supabase/supabase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setPageLoaded(true);
    // async function getData() {
    //   const resp = await getComment(1);
    //   console.log(resp);
    // }
    // getData();
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
