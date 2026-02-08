import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { FloatingActionButtons } from "@/components/custom";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lifecare Pet Specialty Clinic - Veterinary Care in Coimbatore",
  description: "Expert veterinary care for your beloved pets in Coimbatore. 24/7 emergency services, specialized care, surgery, diagnostics, and more. Where your furry companions experience a home away from home.",
  keywords: ["veterinary clinic", "pet care", "animal hospital", "Coimbatore", "pet clinic", "emergency vet", "pet surgery", "pet boarding"],
  authors: [{ name: "Lifecare Pet Specialty Clinic" }],
  openGraph: {
    title: "Lifecare Pet Specialty Clinic",
    description: "Expert veterinary care for your beloved pets in Coimbatore",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
