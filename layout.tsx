import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uttam Kumar Singh — AI Engineer",
  description: "AI/LLM Engineer building agentic systems, reliable AI infrastructure, and full-stack products.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Uttam Kumar Singh — AI Engineer",
    description: "Building AI systems that work beyond the demo.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}