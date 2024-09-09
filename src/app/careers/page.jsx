import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Careers() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Careers at SVGOI</h2>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Welcome to the Career Page of Swami Vivekanand Group of Institutes (SVGOI)
        </p>
        <p className="mb-8">
          At SVGOI, we are dedicated to creating a space where innovation in education meets excellence. We are constantly looking for passionate professionals who want to make an impact in the academic world. If you are committed to contributing to the growth and success of students and believe in creating an inclusive learning environment, SVGOI invites you to join our dynamic team.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Current Openings</h3>
        <div className="p-6">
          <ul className="list-disc list-inside">
            <li>
              <strong>Head of Department (Computer Science & Engineering)</strong>
              <p>Qualification: Ph.D./M.Tech in CSE with relevant teaching and administrative experience.</p>
              <p>Experience: 5+ years in academic leadership roles.</p>
            </li>
            <li>
              <strong>Head of Department (Pharm D)</strong>
              <p>Qualification: Ph.D. in Pharmacy/Pharm D with strong research and academic credentials.</p>
              <p>Experience: 5+ years in a similar capacity.</p>
            </li>
            <li>
              <strong>Head of Department (Law)</strong>
              <p>Qualification: Ph.D./LLM with substantial teaching and administrative experience.</p>
              <p>Experience: 5+ years in a legal academic role.</p>
            </li>
            <li>
              <strong>Director Academics</strong>
              <p>Qualification: Ph.D. in any academic discipline with experience in academic management and institutional planning.</p>
              <p>Experience: 10+ years in leadership roles in academic institutions.</p>
            </li>
            <li>
              <strong>Principal (Pharmacy)</strong>
              <p>Qualification: Ph.D. in Pharmacy with a robust academic and administrative background.</p>
              <p>Experience: 10+ years in academic and leadership positions.</p>
            </li>
            <li>
              <strong>Digital Marketing Executive</strong>
              <p>Qualification: MBA in Marketing or a related field, with a specialization in digital marketing strategies.</p>
              <p>Experience: 1-3 years in digital marketing, preferably in the education sector.</p>
            </li>
            <li>
              <strong>Academics Coordinator</strong>
              <p>Qualification: Master’s degree in any discipline with experience in academic planning and student coordination.</p>
              <p>Experience: 3+ years in a similar role.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">How to Apply</h3>
        <div className="p-6">
          <p>
            To apply for any of the positions listed above, please email your CV and a cover letter to <strong>careers@sviet.ac.in</strong> with the subject line mentioning the job title you are applying for.
          </p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Apply Now</h3>
        <div className="p-6">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Position Applying For</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>HOD CSE</option>
                <option>HOD Pharm D</option>
                <option>HOD Law</option>
                <option>Director Academics</option>
                <option>Principal Pharmacy</option>
                <option>Digital Marketing Executive</option>
                <option>Academics Coordinator</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Qualifications</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Years of Experience</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Upload Resume</label>
              <input type="file" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Cover Letter (optional)</label>
              <textarea className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
          </form>
        </div>
      </div>

      <div className=" mx-auto">
        <h2 className="text-2xl mt-20 font-semibold">Contact Us :</h2>
        <div className="w-full flex gap-3 items-center">
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-[#ff9602]" />
            <a href="tel:+918847488524" className="text-md md:text-lg">+91 73411 98100</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
