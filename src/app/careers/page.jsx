"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import axios from "axios"; // to handle HTTP requests
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "HOD CSE",
    qualifications: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare form data for submission
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("qualifications", formData.qualifications);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("resume", formData.resume);
      formDataToSend.append("coverLetter", formData.coverLetter);

      // Replace with your Brevo API endpoint or your own backend API
      await axios.post("/your-brevo-api-endpoint", formDataToSend);

      // Show success toast and send a confirmation email to the user
      toast.success("Submission successful!");

      // Send confirmation email to the user
      const confirmationEmailData = {
        sender: { email: "your-admin-email@example.com" },
        to: [{ email: formData.email }],
        subject: "Submission Successful",
        htmlContent: `<p>Dear ${formData.fullName},</p><p>Your submission for the position of ${formData.position} has been received successfully.</p>`,
      };

      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        confirmationEmailData,
        {
          headers: {
            "api-key": "YOUR_BREVO_API_KEY",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Careers at SVGOI</h2>
      <div className="mb-8">
        <p className="text-lg mb-4">
          Welcome to the Career Page of Swami Vivekanand Group of Institutes
          (SVGOI)
        </p>
        <p className="mb-8 text-justify">
          At SVGOI, we are dedicated to creating a space where innovation in
          education meets excellence. We are constantly looking for passionate
          professionals who want to make an impact in the academic world. If you
          are committed to contributing to the growth and success of students
          and believe in creating an inclusive learning environment, SVGOI
          invites you to join our dynamic team.
        </p>
      </div>
      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">
          Current Openings
        </h3>
        <div className="p-6">
          <ul className="list-disc list-inside">
            <li>
              <strong>
                Head of Department (Computer Science & Engineering)
              </strong>
            </li>
            <li>
              <strong>Head of Department (Pharm D)</strong>
            </li>
            <li>
              <strong>Head of Department (Law)</strong>
            </li>
            <li>
              <strong>Director Academics</strong>
            </li>
            <li>
              <strong>Principal (Pharmacy)</strong>
            </li>
            <li>
              <strong>Digital Marketing Executive</strong>
            </li>
            <li>
              <strong>Academics Coordinator</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">
          Why Work With Us?
        </h3>
        <div className="p-6">
          <p className="mb-4 text-justify">
            Innovative Environment: Collaborate with forward-thinking educators
            and professionals. Professional Growth: We offer opportunities for
            career advancement, training, and development. Inclusive Culture: We
            pride ourselves on a diverse and inclusive workplace where ideas
            thrive. State-of-the-art Facilities: Work with modern infrastructure
            and cutting-edge technology. Recognition: At SVGOI, your
            contributions are valued and celebrated.
          </p>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">How to Apply</h3>
        <div className="p-6">
          <p>
            To apply for any of the positions listed above, please email your CV and a cover letter to <strong>career@sviet.ac.in</strong> with the subject line mentioning the job title you are applying for.
          </p>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">
          Apply Now
        </h3>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Position Applying For
              </label>
              <select
                name="position"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.position}
                onChange={handleInputChange}
                required
              >
                <option value="HOD CSE">HOD CSE</option>
                <option value="HOD Pharm D">HOD Pharm D</option>
                <option value="HOD Law">HOD Law</option>
                <option value="Director Academics">Director Academics</option>
                <option value="Principal Pharmacy">Principal Pharmacy</option>
                <option value="Digital Marketing Executive">
                  Digital Marketing Executive
                </option>
                <option value="Academics Coordinator">
                  Academics Coordinator
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Qualifications
              </label>
              <input
                type="text"
                name="qualifications"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.qualifications}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Years of Experience
              </label>
              <input
                type="text"
                name="experience"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.experience}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Upload Resume
              </label>
              <input
                type="file"
                name="resume"
                className="w-full px-4 py-2 border rounded-lg"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Cover Letter (optional)
              </label>
              <textarea
                name="coverLetter"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.coverLetter}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto">
        <h2 className="text-2xl mt-20 font-semibold">Contact Us :</h2>
        <div className="w-full flex gap-3 items-center">
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-[#ff9602]" />
            <a href="tel:+918847488524" className="text-md md:text-lg">
              +91 73411 98100
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Careers;
