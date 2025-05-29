// import type { Metadata } from "next";
// import { Raleway } from "next/font/google";
// import "./globals.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "@fortawesome/fontawesome-free/css/all.css";

// import { ComplexNavbar } from "@/components/Globals/Nav";
// import Footer from "@/components/Globals/Footer";
// import ChatbotWrapper from "@/components/Globals/ChatbotWrapper";
// import WhatsappIconWrapper from "@/components/Globals/WhatsappIconWrapper";
// import Script from "next/script"; 
// const inter = Raleway({ subsets: ["latin"] });

// import Loading from "./loading";

// export const metadata: Metadata = {
//   title: "SVIET | Best Private Engineering College in North India",
//   description: "Be Future Ready",
//   icons: {
//     icon: "./icon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//        {/* ✅ Google Tag Manager Script */}
//         <Script
//           id="gtm-script"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-KB8CCRP');`,
//           }}
//         />
      
//         {/* End Google Tag Manager */}
//         <link rel="icon" href="./icon.png" />
//       </head>
//       <body className={inter.className}>
//         {/* ✅ Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-KB8CCRP"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         {/* ✅ End GTM noscript */}
//         <ComplexNavbar />

//         {children}
//         <div className="fixed flex flex-col gap-2 end-0 bottom-0 z-30">
//           {/* <a
//             href="https://wa.me/7347411011"
//             className="shadow-sm p-2 mr-8 mt-[-175px] bg-green-700 text-white h-13 w-13 text-5xl flex items-center justify-center rounded-full mb-3"
//           >
//             <i className="fab fa-whatsapp"></i>
//           </a> */}
//           <WhatsappIconWrapper />

//           <div>
//             <ChatbotWrapper />
//           </div>
//         </div>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.css";

import NavWrapper from "@/components/Globals/NavWrapper";
import Footer from "@/components/Globals/Footer";
import ChatbotWrapper from "@/components/Globals/ChatbotWrapper";
import WhatsappIconWrapper from "@/components/Globals/WhatsappIconWrapper";
import Script from "next/script"; 
const inter = Raleway({ subsets: ["latin"] });

import Loading from "./loading";

export const metadata: Metadata = {
  title: "SVIET | Best Private Engineering College in North India",
  description: "Be Future Ready",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       {/* ✅ Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KB8CCRP');`,
          }}
        />
      
        {/* End Google Tag Manager */}
        <link rel="icon" href="./icon.png" />
      </head>
      <body className={inter.className}>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KB8CCRP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* ✅ End GTM noscript */}
        <NavWrapper />

        {children}
        <div className="fixed flex flex-col gap-2 end-0 bottom-0 z-30">
          {/* <a
            href="https://wa.me/7347411011"
            className="shadow-sm p-2 mr-8 mt-[-175px] bg-green-700 text-white h-13 w-13 text-5xl flex items-center justify-center rounded-full mb-3"
          >
            <i className="fab fa-whatsapp"></i>
          </a> */}
          <WhatsappIconWrapper />

          <div>
            <ChatbotWrapper />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
