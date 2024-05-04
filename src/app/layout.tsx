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

import Loading from "./loading";

export const metadata: Metadata = {
  title: "SVIET | Best Private Engineering College in North India",
  description: "Be Future Ready",
  icons: {
    icon: "./icon.png",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" />
      </head>
      <body className={inter.className}>
        <ComplexNavbar />

        {children}
        <a href="https://wa.me/7347411011" className="shadow-sm p-2 fixed z-50 end-0 bottom-0 bg-green-700 text-white h-15 w-15 text-5xl flex items-center justify-center rounded-full mr-3 mb-3">
          <i className="fab fa-whatsapp"></i>
        </a>
        <Footer />
      </body>
    </html>
  );
}
