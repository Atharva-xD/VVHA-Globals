import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VVHA Global",
  description: "VVHA Global is a leading digital solutions company offering web development, mobile app development, UI/UX design, IT consulting & digital marketing services for startups and enterprises worldwide.",
  icons: {
    icon: [
      { url: "/images/logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-black overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
