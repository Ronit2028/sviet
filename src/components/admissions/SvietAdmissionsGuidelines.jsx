// "use client";

// import React, { useState } from "react";
// import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
// import { Typography } from "@material-tailwind/react";
// const SVIETAdmissionGuidelines = () => {
//   const [personalProfileOpen, setPersonalProfileOpen] = useState(false);
//   const [academicProfileOpen, setAcademicProfileOpen] = useState(false);
//   const [uploadDocumentsOpen, setUploadDocumentsOpen] = useState(false);
//   const [paymentOpen, setPaymentOpen] = useState(false);

//   return (
//     <div className="py-12">
//       <div className="w-10/12 mx-auto py-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
//         <div className="bg-white rounded-md">
//           <div className="mt-7 pb-6">
//             <Typography
//               color="blue-gray"
//               className="mb-2 font-bold uppercase"
//             ></Typography>
//             <Typography
//               color="blue-gray"
//               className="mb-4 !text-2xl font-bold lg:!text-4xl"
//             >
//               Admission Guidelines
//             </Typography>
//             <Typography variant="lead" className=" !text-gray-500">
//               Simplified and Comprehensive
//             </Typography>
//           </div>

//           <div className="mb-4">
//             <button
//               className="flex justify-between w-full bg-gray-100 hover:bg-gray-300 rounded-md p-2 mb-2"
//               onClick={() => setPersonalProfileOpen(!personalProfileOpen)}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Personal Profile
//               </h3>
//               {personalProfileOpen ? (
//                 <MinusIcon className="h-5 w-5 text-gray-600" />
//               ) : (
//                 <PlusIcon className="h-5 w-5 text-gray-600" />
//               )}
//             </button>
//             {personalProfileOpen && (
//               <div className="pl-4">
//                 <p>
//                   - The name of the candidate and his/her parents must be the
//                   same as mentioned on their class 10th certificate. (No prefix
//                   should be used)
//                 </p>
//                 <p>- Contact details should be accurate.</p>
//               </div>
//             )}
//           </div>

//           <div className="mb-4">
//             <button
//               className="flex justify-between w-full bg-gray-100 hover:bg-gray-300 rounded-md p-2 mb-2"
//               onClick={() => setAcademicProfileOpen(!academicProfileOpen)}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Academic Profile
//               </h3>
//               {academicProfileOpen ? (
//                 <MinusIcon className="h-5 w-5 text-gray-600" />
//               ) : (
//                 <PlusIcon className="h-5 w-5 text-gray-600" />
//               )}
//             </button>
//             {academicProfileOpen && (
//               <div className="pl-4">
//                 <p>
//                   - Provide marks obtained in the qualifying examination & last
//                   attended school.
//                 </p>
//                 <p>
//                   - Upload marks of the qualifying national entrance tests /
//                   SVIET-EEE / SVGOI EEE along with documents within 15 days of
//                   the results being announced. Candidates who fail to do so will
//                   not be considered for admissions.
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="mb-4">
//             <button
//               className="flex justify-between w-full bg-gray-100 hover:bg-gray-300 rounded-md p-2 mb-2"
//               onClick={() => setUploadDocumentsOpen(!uploadDocumentsOpen)}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Upload Documents
//               </h3>
//               {uploadDocumentsOpen ? (
//                 <MinusIcon className="h-5 w-5 text-gray-600" />
//               ) : (
//                 <PlusIcon className="h-5 w-5 text-gray-600" />
//               )}
//             </button>
//             {uploadDocumentsOpen && (
//               <div className="pl-4">
//                 <p>
//                   - Candidates must upload scanned copies of the required
//                   documents in the Sviet.ac.in admission portal.
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="mb-4">
//             <button
//               className="flex justify-between w-full bg-gray-100 hover:bg-gray-300 rounded-md p-2 mb-2"
//               onClick={() => setPaymentOpen(!paymentOpen)}
//             >
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Payment of Application Fees
//               </h3>
//               {paymentOpen ? (
//                 <MinusIcon className="h-5 w-5 text-gray-600" />
//               ) : (
//                 <PlusIcon className="h-5 w-5 text-gray-600" />
//               )}
//             </button>
//             {paymentOpen && (
//               <div className="pl-4">
//                 {/* <p>- Application fees amount: Rs 7000/-</p>
//                                 <p>- Payment through online mode only (Net banking / Card / G-pay).</p> */}

//                 <div className="w-[600px] bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg rounded-lg p-6">
//                   <table className="table-auto w-full border-collapse border border-neutral-200 bg-white rounded-md">
//                     <thead>
//                       <tr className="bg-primary-500 text-primary-50">
//                         <th className="border border-neutral-200 px-6 py-3 font-title text-center">
//                           UNIVERSITY
//                         </th>
//                         <th className="border border-neutral-200 px-6 py-3 font-title text-center">
//                           REGISTRATION AMOUNT
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="even:bg-primary-50 odd:bg-neutral-100">
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           PUNJABI UNIVERSITY BALLB/LLB
//                         </td>
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           11000
//                         </td>
//                       </tr>
//                       <tr className="even:bg-primary-50 odd:bg-neutral-100">
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           PUNJABI UNIVERSITY BCA/BCOM/BA/ BED/ MED
//                         </td>
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           8000
//                         </td>
//                       </tr>
//                       <tr className="even:bg-primary-50 odd:bg-neutral-100">
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           DIPLOMA EXCEPT DPHARMACY
//                         </td>
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           6500
//                         </td>
//                       </tr>
//                       <tr className="even:bg-primary-50 odd:bg-neutral-100">
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           DPHARMACY/ IKGPTU/ MRSPTU
//                         </td>
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           8000
//                         </td>
//                       </tr>
//                       <tr className="even:bg-primary-50 odd:bg-neutral-100">
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           PHARM D
//                         </td>
//                         <td className="border border-neutral-300 px-6 py-4 text-center">
//                           22000
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}
//           </div>

//           <p className="text-gray-800 text-lg">
//             Ensure compliance with these guidelines to facilitate a smooth
//             admission process.
//           </p>
//         </div>
//         <div className="h-full">
//           <iframe
//             width="100%"
//             src="https://www.youtube.com/embed/M5nNS8EQ9OA?si=7d-ZCNhwV_XdgAx_"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//             className="rounded-md shadow-md h-full"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SVIETAdmissionGuidelines;


"use client";

import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const SVIETAdmissionGuidelines = () => {
  const [personalProfileOpen, setPersonalProfileOpen] = useState(false);
  const [academicProfileOpen, setAcademicProfileOpen] = useState(false);
  const [uploadDocumentsOpen, setUploadDocumentsOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Left Section */}
        <div className="bg-white rounded-md shadow-lg p-6">
          <div className="mb-6">
            <Typography
              color="blue-gray"
              className="mb-2 font-bold uppercase"
            ></Typography>
            <Typography
              color="blue-gray"
              className="mb-4 text-2xl font-bold lg:text-4xl"
            >
              Admission Guidelines
            </Typography>
            <Typography variant="lead" className="text-gray-500">
              Simplified and Comprehensive
            </Typography>
          </div>

          {/* Collapsible Sections */}
          {[
            {
              title: "Personal Profile",
              isOpen: personalProfileOpen,
              setOpen: setPersonalProfileOpen,
              content: (
                <>
                  <p>
                    - The name of the candidate and his/her parents must be the
                    same as mentioned on their class 10th certificate. (No
                    prefix should be used)
                  </p>
                  <p>- Contact details should be accurate.</p>
                </>
              ),
            },
            {
              title: "Academic Profile",
              isOpen: academicProfileOpen,
              setOpen: setAcademicProfileOpen,
              content: (
                <>
                  <p>
                    - Provide marks obtained in the qualifying examination &
                    last attended school.
                  </p>
                  <p>
                    - Upload marks of the qualifying national entrance tests /
                    SVIET-EEE / SVGOI EEE along with documents within 15 days
                    of the results being announced. Candidates who fail to do so
                    will not be considered for admissions.
                  </p>
                </>
              ),
            },
            {
              title: "Upload Documents",
              isOpen: uploadDocumentsOpen,
              setOpen: setUploadDocumentsOpen,
              content: (
                <p>
                  - Candidates must upload scanned copies of the required
                  documents in the Sviet.ac.in admission portal.
                </p>
              ),
            },
            {
              title: "Payment of Application Fees",
              isOpen: paymentOpen,
              setOpen: setPaymentOpen,
              content: (
                <div className="w-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg rounded-lg p-6">
                  <table className="table-auto w-full border-collapse border border-neutral-200 bg-white rounded-md">
                    <thead>
                      <tr className="bg-primary-500 text-primary-50">
                        <th className="border border-neutral-200 px-4 py-2 font-title text-center">
                          UNIVERSITY
                        </th>
                        <th className="border border-neutral-200 px-4 py-2 font-title text-center">
                          REGISTRATION AMOUNT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          university: "PUNJABI UNIVERSITY BALLB/LLB",
                          amount: "11000",
                        },
                        {
                          university:
                            "PUNJABI UNIVERSITY BCA/BCOM/BA/ BED/ MED",
                          amount: "8000",
                        },
                        {
                          university: "DIPLOMA EXCEPT DPHARMACY",
                          amount: "6500",
                        },
                        {
                          university: "DPHARMACY/ IKGPTU/ MRSPTU",
                          amount: "8000",
                        },
                        {
                          university: "PHARM D",
                          amount: "22000",
                        },
                      ].map((item, idx) => (
                        <tr
                          key={idx}
                          className={`${
                            idx % 2 === 0 ? "bg-primary-50" : "bg-neutral-100"
                          }`}
                        >
                          <td className="border border-neutral-300 px-4 py-2 text-center">
                            {item.university}
                          </td>
                          <td className="border border-neutral-300 px-4 py-2 text-center">
                            {item.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ),
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-4">
              <button
                className="flex justify-between w-full bg-gray-100 hover:bg-gray-300 rounded-md p-3"
                onClick={() => section.setOpen(!section.isOpen)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {section.title}
                </h3>
                {section.isOpen ? (
                  <MinusIcon className="h-5 w-5 text-gray-600" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              {section.isOpen && <div className="pl-4 pt-2">{section.content}</div>}
            </div>
          ))}

          <p className="text-gray-800 text-lg mt-6">
            Ensure compliance with these guidelines to facilitate a smooth
            admission process.
          </p>
        </div>

        {/* Right Section */}
        <div className="h-full">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/M5nNS8EQ9OA?si=7d-ZCNhwV_XdgAx_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-md shadow-md h-[300px] sm:h-[400px] md:h-[500px] lg:h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SVIETAdmissionGuidelines;
