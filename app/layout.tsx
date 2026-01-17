import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nevera = localFont({
  src: "./fonts/Nevera-Regular.otf",
  variable: "--font-nevera",
});

export const metadata: Metadata = {
  title: "Pasan Wijekoon | Software Engineer Intern",
  description: "Portfolio of Pasan Wijekoon, a Software Engineering student focused on Backend Systems, REST APIs, and Cloud Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${nevera.variable} font-sans bg-background text-white`}>
        <Providers>
          <Navbar />
          {children}
          <WhatsappButton />
        </Providers>
      </body>
    </html >
  );
}
