import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.css'

import { ComplexNavbar } from "@/components/Globals/Nav"
import Footer from "@/components/Globals/Footer"

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SVIET | Best Private Engineering College in North India",
  description: "Be Future Ready",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ComplexNavbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
