import React from "react";
import logo1 from '../../assets/placement/companies/logo1.jpg'
import logo2 from '../../assets/placement/companies/logo2.jpg'
import logo3 from '../../assets/placement/companies/logo3.jpg'
import logo4 from '../../assets/placement/companies/logo4.jpg'
import logo5 from '../../assets/placement/companies/logo5.jpg'
import logo6 from '../../assets/placement/companies/logo6.jpg'
import logo7 from '../../assets/placement/companies/logo7.jpg'
import logo8 from '../../assets/placement/companies/logo8.jpg'
import logo9 from '../../assets/placement/companies/logo9.jpg'
import logo10 from '../../assets/placement/companies/logo10.jpg'
import logo11 from '../../assets/placement/companies/logo11.jpg'

const Gallery = () => {
  return (
    <div className="bg-[#f2f1f0] mt-[-50px]">
      <div className="w-full h-full py-12">
        <div className="w-10/12 mx-auto py-12">
          <p className="text-3xl font-medium pb-3">Real-World Engagement</p>
          <p className="text-xl pl-2 border-l-4 border-[#fea700]">
          Explore how our industry connections transform students into professionals.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo7.src} alt="Google"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo1.src} alt="Google"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo2.src} alt="Google"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo3.src} alt="Google"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo4.src} alt="Google"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src={logo5.src} alt="Google"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo6.src} alt="Google"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src={logo8.src} alt="Google"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo9.src} alt="Google"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={logo10.src} alt="Google"
                />
              </div>
              <div>
                <img
                  src={logo11.src} alt="Google"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Gallery;
