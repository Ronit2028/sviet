"use client";
import Link from "next/link";
import React, { useState } from "react";
import logoDark from "@/assets/Brand/SVIET-Logo-Dark.webp";

const NCCModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#fea700]">
          NCC Registration
        </h2>
        <p className="mb-6 text-gray-800 text-lg">
          The registration link will be shared shortly.
          <br />
          Stay&nbsp;tuned!
        </p>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-[#fea700] text-white rounded hover:bg-[#e09e00] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};
const Footer = () => {
  const [showNCCModal, setShowNCCModal] = useState(false);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap gap-y-8">
          {/* Logo and Address section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 pr-10 border-r border-gray-400">
            <div className="logo mt-4">
              <img
                src={logoDark.src}
                alt=""
                className="pb-5 border-b-[0.5px] text-sm mb-5"
              />
            </div>
            <div className="address">
              <div className="locate mb-4 text-sm font-extralight">
                - LOCATE US
              </div>
              <div className="uni-name text-lg mt-5 mb-4">
                Swami Vivekanand Institute of Engineering and Technology
              </div>
              <div className="uni-name text-lg mt-5 mb-4">
                Promoted By : Raghunath Rai Memorial Trust
              </div>
              <div className="uni-address text-sm font-light mb-2">
                Village- Ramnagar Near Banur, Tehsil- Rajpura, District- Patiala
              </div>
            </div>
            <div className="uni-contact ext-sm font-light mb-2">
              <p>Admission helpline Number :</p>
              <p>+91- 94652 33333</p>
              <p>Toll Free: 1800 120 1200</p>
              <p>Email:</p>
              <p>Admission@sviet.ac.in</p>
              <p>info@sviet.ac.in</p>
              <p>tpo@sviet.ac.in</p>
              <p>hr@sviet.ac.in</p>
            </div>
          </div>
          {/* Admissions section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mt-2 p-6 border-r border-gray-400">
            <div className="heading text-xl font-semibold mb-4">
              Quick Links
            </div>
            <ul className="leading-loose text-sm font-light">
              <li>
                <a href="https://uj.servergi.com:8079/ISIMSVIET/login">
                  Student ERP Login
                </a>
              </li>
              <li>
                <a href="https://uj.servergi.com:8079/SIMWEBSVIET/Login">
                  Faculty ERP Login
                </a>
              </li>
              <li>
                <Link href="/svgoi-in-town">SVGOI in your town</Link>
              </li>
              <li>
                <Link href="/svgoi-brochure.pdf">E-Brochure</Link>
              </li>
              <li>
                <a href="https://admission.sviet.ac.in/">How to Apply</a>
              </li>
              <li>
                <a href="http://svietiti.in/index.html">SVIET - ITI</a>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          {/* Academics section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 p-6 border-r border-gray-400">
            <div className="heading text-xl font-semibold mb-4">
              Quick Links
            </div>
            <ul className="leading-loose text-sm font-light">
              <li>
                <a href="/placement">Placement Overview</a>
              </li>
              {/* <li><Link href="/about">Career at SVGOI</Link></li> */}
              {/* <li><Link href="/about">Recognitions Approvals</Link></li> */}
              {/* <li><a href="#">Video Gallery</a></li> */}
              <li>
                <a href="/gallery">Photo Gallery</a>
              </li>
              <li>
                <Link href="/contact-us">Grievances/Enquiry</Link>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1zn_0Wid35r5DyfnCOsxcTrd0ZcZJ2FP1">
                  Final Year 2023 Group Pictures
                </a>
              </li>
              <li>
                <a href="https://www.sviet.org.in">NAAC</a>
              </li>
              <li>
                <Link href="/iste">ISTE Sviet Chapter</Link>
              </li>
            </ul>
          </div>
          {/* Resources section */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 p-6">
            <div className="heading text-xl font-semibold mb-4">
              Quick Links
            </div>
            <ul className="leading-loose text-sm font-light">
              <li>
                <button className="" onClick={() => setShowNCCModal(true)}>
                  NCC Registration
                </button>
              </li>
              <li>
                <Link href="/advantages">SVGOI Advantages</Link>
              </li>
              <li>
                <a href="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumXRxmHO2YwQAC3BxfPnoR46m9tK5uUkNerSOE">
                  RNR Scholarship
                </a>
              </li>
              <li>
                <Link href="/contact-us">Contact-us</Link>
              </li>
              <li>
                <Link href="/admissions">Scholarship</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.giindia.www.g5myconnect&hl=en_IN">
                  ERP APP
                </a>
              </li>
              <li>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms&conditions">Terms & Conditions </Link>
              </li>
              {/* <li><a href="#">NSS Registration</a></li> */}
            </ul>
            <NCCModal
              open={showNCCModal}
              onClose={() => setShowNCCModal(false)}
            />
          </div>
        </div>
        {/* Footer bottom section */}
        <div className="footer-bottom mt-8 border-t border-gray-700 pt-6">
          <ul className="flex flex-wrap justify-between">
            <li className="flex flex-wrap gap-3">
              {" "}
              <p>Admission helpline Number :</p>
              <p>+91- 94652 33333</p>
            </li>

            <li className="flex flex-wrap gap-3">
              <p>Email:</p>
              <p>Admission@sviet.ac.in</p>
              <p>info@sviet.ac.in</p>
              <p>tpo@sviet.ac.in</p>
              <p>hr@sviet.ac.in</p>
            </li>
            <li className="flex flex-wrap gap-3">
              {" "}
              <p>Toll Free: 1800 120 1200</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
