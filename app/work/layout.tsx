import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Impact | Proven Global Results by VVHA Global",
  description: "Explore our case studies. See how VVHA Global helps B2B companies eliminate friction, generate high-quality leads, and close complex projects across borders.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
