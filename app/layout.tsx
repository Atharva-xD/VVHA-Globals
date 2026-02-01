import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VVHA Global | Expert Operations & Sales Strategy for Global Growth",
  description: "Scale your business globally with VVHA Global. We specialize in tech-enabled project management, offshore development, and sales-closing lead generation.",
  keywords: [
    "Global Business Operations",
    "International Project Management",
    "B2B Lead Generation",
    "Scalable Revenue Ops",
    "Offshore Sales Development",
  ],
  other: {
    "meta:title": "VVHA Global | Expert Operations & Sales Strategy for Global Growth",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://vvha-globals.vercel.app/",
    title: "VVHA Global | Master Global Operations. Scale Without Friction.",
    description: "We build the infrastructure that closes deals. High-impact sales development and project management for international markets.",
    images: [
      {
        url: "https://vvha-globals.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "VVHA Global Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VVHA Global | Global Project Solutions & Sales Strategy",
    description: "Drive global traffic and close high-value leads with data-driven project management.",
    images: ["https://vvha-globals.vercel.app/images/logo.png"],
  },
  metadataBase: new URL("https://vvha-globals.vercel.app"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
