import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/components/ThemeProvider";

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
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
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
