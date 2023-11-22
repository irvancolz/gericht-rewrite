import "./globals.css";
import { Topnav } from "../components";

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
      </body>
    </html>
  );
}
