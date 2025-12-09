import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neil Michael | Desenvolvedor Fullstack & Automação",
  description: "Desenvolvedor Fullstack especializado em automações, chatbots e sistemas empresariais. Transformo processos manuais em soluções digitais eficientes.",
  openGraph: {
    title: "Neil Michael | Desenvolvedor Fullstack",
    description: "Especialista em automação de processos, chatbots inteligentes e sistemas para negócios.",
    type: "website",
    locale: "pt_BR",
    url: "https://neilmichael.dev", // Placeholder
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Neil Michael",
  "url": "https://neilmichael.dev",
  "jobTitle": "Software Developer",
  "knowsAbout": ["Fullstack Development", "Automation", "Chatbots", "Next.js", "React"],
  "sameAs": [
    "https://github.com/SrNeil",
    "https://linkedin.com/in/neilmichael" // Placeholder
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
