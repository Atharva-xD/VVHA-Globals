import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VVHA Global | Web & Mobile App Development Company",
  description: "Learn about VVHA Global, a trusted digital solutions company delivering web development, mobile apps, UI/UX design, IT consulting, and digital marketing services worldwide.",
};

export default function PerspectiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
