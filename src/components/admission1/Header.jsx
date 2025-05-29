"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import logo from "../../assets/Brand/Logo.webp"; // Adjust the path as necessary

const Header = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    state: "",
    city: "",
    program: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const res = await fetch("/api/sendEmail/admissions1", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          name: "",
          email: "",
          mobile: "",
          otp: "",
          state: "",
          city: "",
          program: "",
          message: "",
        });
        setShowThankYou(true);
      } else {
        toast.error(result.message || "Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowThankYou(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-green-500 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#d1fae5"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4" />
              </svg>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Thank You!</h2>
              <p className="text-gray-600 mb-4">
                Your enquiry has been submitted successfully.<br />
                We appreciate your interest and will get back to you soon.
              </p>
              <button
                className="mt-2 px-6 py-2 bg-[#fea700] text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
                onClick={() => setShowThankYou(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white text-black py-6 pl-8">
        <Image src={logo} alt="SVIET Logo" height={200} width={200}/>
      </div>
      <div className="relative h-auto md:h-[100vh] text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumGkFk3XIoeyaO1d7xYQMuBsK0zrR9WmSiLvEN"
            type="video/mp4"
          />
        </video>
        <div className="relative w-full h-full flex items-center py-12 bg-black bg-opacity-50">
          <div className="w-10/12 mx-auto flex flex-wrap items-start justify-between">
            <div className="w-full md:w-1/2 py-12 mt-20">
              <p className="text-2xl lg:text-4xl font-bold w-4/5 mb-3 pb-3">
                B.Tech in Artificial Intelligence
              </p>
              <p className="text-md lg:text-lg font-semibold mt-3 mb-3 pb-3">
                Empowering the Next Generation to Build a Smarter, AI-Driven
                Future
              </p>
              <p className="text-sm lg:text-base font-normal text-justify  mb-3">
                Our B.Tech program in Artificial Intelligence is designed to
                equip students with a strong foundation in machine learning,
                data science, robotics, and intelligent systems. With a
                future-focused curriculum, industry-driven projects, and access
                to advanced tools and technologies, students gain practical
                skills and theoretical knowledge needed to innovate and lead in
                the world of AI.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Link href="https://sviet.ac.in/admission1/">
                  <button className="bg-[#fea700] text-white text-xl px-2 py-1 rounded-md">
                    Apply Now
                  </button>
                </Link>
                {/* <Link href="/SVIET-Brochure-2025.pdf">
                  <button className="bg-[#fea700] text-white text-xl px-2 py-1 rounded-md">
                    Download Brochure
                  </button>
                </Link> */}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-90 text-black p-6 rounded-lg shadow-md md:w-5/12 w-full"
              encType="multipart/form-data"
            >
              <h2 className="text-xl font-bold mb-4">Admission Enquiry</h2>
              <input
                name="name"
                type="text"
                placeholder="Enter Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Enter Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                required
              />
              <input
                name="mobile"
                type="text"
                placeholder="Enter Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                required
              />

              <input
                name="state"
                type="text"
                placeholder="Select State *"
                value={formData.state}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                required
              />
              <input
                name="city"
                type="text"
                placeholder="Select City *"
                value={formData.city}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                required
              />

              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                required
              >
                <option value="">Select Course *</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                {/* <option value="Diploma">Diploma</option>
                <option value="Doctorate">Doctorate</option> */}
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mb-3 p-2 rounded border"
                rows="4"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#fea700] text-white text-xl px-4 py-2 w-full mb-4 rounded-md"
              >
                Submit
              </button>
              {/* <a
                href="https://wa.me/+919467476931" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-lg px-4 py-2 rounded-md w-full hover:bg-[#128C7E] transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Contact on WhatsApp
              </a> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
