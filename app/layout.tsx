import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Particles from "@/components/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shaunfurtado.is-a.dev/"),
  title: "Sufiyan Chaudhari",
  description: "Portfolio of Sufiyan Chaudhari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning cz-shortcut-listen="true">
      <body
        className={`${inter.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={300}
            />
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
