"use client";
import { FaWhatsapp } from "react-icons/fa"; 
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      const res = await fetch("/api/sendEmail", {
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
        // Reset form after successful submission
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
            <div className="w-full md:w-1/2 py-12">
              <p className="text-2xl lg:text-4xl font-bold w-4/5 mb-3 pb-3">
                Nurturing Excellence Since 2004: A Legacy of Quality Education.
              </p>
              <p className="text-md lg:text-lg font-semibold mt-3 mb-3 pb-3">
                SVGOI, a beacon of academic distinction, proudly stands tall as
                it secures the honorable rank of 104 in NIRF 2021.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="https://sviet.ac.in/admission-bihar/">
                  <button className="bg-[#fea700] text-white text-xl px-2 py-1 rounded-md">
                    Apply Now
                  </button>
                </Link>
                <Link href="/SVIET-Brochure-2025.pdf">
                  <button className="bg-[#fea700] text-white text-xl px-2 py-1 rounded-md">
                    Download Brochure
                  </button>
                </Link>
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
                <option value="">Select Program *</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
                <option value="Diploma">Diploma</option>
                <option value="Doctorate">Doctorate</option>
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
              <a
                href="https://wa.me/+919386122005" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-lg px-4 py-2 rounded-md w-full hover:bg-[#128C7E] transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Contact on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
