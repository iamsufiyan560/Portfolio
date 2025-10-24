import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Particles from "@/components/particles";
import QueryProvider from "@/components/QueryProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sufiyan-dev.vercel.app"),
  title: {
    default: "Sufiyan Chaudhari - Full Stack Developer",
    template: "Sufiyan Chaudhari | %s",
  },
  description:
    "Portfolio of Sufiyan Chaudhari — Full Stack Developer skilled in JavaScript, React, Next.js, and Node.js. Explore my projects, experience, and technical journey.",
  keywords:
    "Sufiyan Chaudhari, Sufiyan Developer, Full Stack Developer, JavaScript Developer, React Developer, Next.js Developer, Node.js Developer, Frontend Developer, Backend Developer, MERN Stack, Web Developer Portfolio, Software Engineer, Modern Web Development, UI Developer, Freelance Developer, Web Projects, Developer Portfolio, Personal Website, Tech Portfolio, Developer Showcase",
  openGraph: {
    title: "Sufiyan Chaudhari - Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Sufiyan Chaudhari — a Full Stack Developer specializing in React, Next.js, and Node.js. Discover projects, skills, and career highlights.",
    url: "https://sufiyan-dev.vercel.app",
    siteName: "Sufiyan Chaudhari",
    images: [
      {
        url: "https://sufiyan-dev.vercel.app/card.png",
        width: 1200,
        height: 630,
        alt: "Sufiyan Chaudhari - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sufiyan Chaudhari - Full Stack Developer",
    description:
      "Explore the portfolio of Sufiyan Chaudhari — Full Stack Developer skilled in React, Next.js, and Node.js.",
    images: ["https://sufiyan-dev.vercel.app/card.png"],
    creator: "@sufiyan",
    site: "@sufiyan",
  },
  other: {
    "twitter:image": "https://sufiyan-dev.vercel.app/card.png",
    "twitter:card": "summary_large_image",
    "twitter:url": "https://sufiyan-dev.vercel.app",
    "twitter:domain": "sufiyan-dev.vercel.app",
    "twitter:title": "Sufiyan Chaudhari - Full Stack Developer Portfolio",
    "twitter:description":
      "Portfolio of Sufiyan Chaudhari — showcasing projects, experience, and skills in modern web development.",
    "twitter:creator": "@sufiyan",
    "twitter:site": "@sufiyan",
    "og:url": "https://sufiyan-dev.vercel.app",
    "og:type": "website",
    "og:title": "Sufiyan Chaudhari - Full Stack Developer Portfolio",
    "og:description":
      "Explore the portfolio of Sufiyan Chaudhari — Full Stack Developer skilled in JavaScript, React, Next.js, and Node.js.",
    "og:image": "https://sufiyan-dev.vercel.app/card.png",
    "og:site_name": "Sufiyan Chaudhari",
    "og:locale": "en_US",
    "application-name": "Sufiyan Chaudhari Portfolio",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    author: "Sufiyan Chaudhari",
    publisher: "Sufiyan Chaudhari",
    copyright: "Sufiyan Chaudhari",
    language: "English",
    "revisit-after": "3 days",
    distribution: "global",
    rating: "general",
    robots:
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    "geo.region": "IN",
    "geo.country": "India",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sufiyan Chaudhari",
    "og:title:alt": "Developer Portfolio | JavaScript | Sufiyan Chaudhari",
    "twitter:title:alt": "Full Stack Developer | Portfolio | Sufiyan Chaudhari",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sufiyan-dev.vercel.app",
  },
  applicationName: "Sufiyan Chaudhari",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased w-screen overflow-x-hidden flex flex-col md:flex-row md:px-4  mt-4 sm:mt-8`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-4 md:px-0 w-full max-w-2xl mx-auto">
            <Particles
              className="absolute inset-0 w-full h-full -z-10 animate-fade-in"
              quantity={200}
            />
            <Navbar />
            <QueryProvider>{children}</QueryProvider>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
