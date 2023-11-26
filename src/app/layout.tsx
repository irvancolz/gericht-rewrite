import "./globals.css";
import { Topnav } from "../components";
import Footer from "@/components/ui/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Topnav />

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
