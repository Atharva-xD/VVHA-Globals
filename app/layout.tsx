import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VVHA Global | Enterprise Digital Solutions",
  description: "We help you go online and scale your business through innovative digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
