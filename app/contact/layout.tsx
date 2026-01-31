import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VVHA Global | Get a Free Digital Consultation",
  description: "Contact VVHA Global for web development, mobile app development, IT consulting, and digital marketing services. Get a free consultation today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
