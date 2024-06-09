import React from 'react';

function SVGOIContactInfo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">SVGOI IN YOUR TOWN</h2>
      <p className="mb-4">Enquiry Now</p>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Punjab</h3>
        <div className="p-6">
          {/* <p>Mr. Ishant Premi</p> */}
          <p>Mr. Gagandeep Singh</p>
          <p>Mr. Talwinder Singh</p>
          <p>Mr. Jaspreet Singh</p>
          <p>Mr. Tarandeep Singh</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Haryana</h3>
        <div className="p-6">
          <p>Mr. Manik Dhiman</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Bihar and Nepal</h3>
        <div className="p-6">
          <p>Mr. Ankur Garg</p>
          <p>Mr. Vikrant Choudhary</p>
          {/* <p>Mr. Gurpinder Singh</p> */}
          {/* <p>Mr. Himanshu Rao</p> */}
          {/* <p>Mr. Kuldeep Brar</p> */}
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Himachal Pradesh</h3>
        <div className="p-6">
          <p>Mr. Akshay</p>
          <p>Mr. Pankaj Sandhu</p>
          <p>Mr. Vishal Koundal</p>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden mb-8">
        <h3 className="bg-gray-200 px-6 py-3 text-lg font-semibold">Jammu and Kashmir</h3>
        <div className="p-6">
          <p>Mr. Muzaffar Ahmad</p>
          <p>Mr. Kunal Koul</p>
          <p>Mr. Tajamul</p>
          <p>Mr. Junaid</p>
          <p>Mr. Salman</p>
        </div>
      </div>
    </div>
  );
}

export default SVGOIContactInfo;
