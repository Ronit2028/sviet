import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.css'

import { ComplexNavbar } from "@/components/Globals/Nav"
import Footer from "@/components/Globals/Footer"
import Chatbot from '@/components/Globals/Chatbot'



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
        <div className="fixed flex flex-col gap-2 end-0 bottom-0 z-30">
          <a href="https://wa.me/7347411011" className="shadow-sm p-2 mr-8 mt-[-175px] bg-green-700 text-white h-13 w-13 text-5xl flex items-center justify-center rounded-full mb-3">
            <i className="fab fa-whatsapp"></i>
          </a>
          <div className="">
            <Chatbot />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
