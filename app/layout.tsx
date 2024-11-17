import type { Metadata } from "next";
import "./globals.css";
import "./MatrixEffect.css";

export const metadata: Metadata = {
  title: "Abhay Prajapati",
  description: "Software Engineer based in Mumbai, IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
