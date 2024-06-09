"use client";
import Slider from "react-slick";
import { useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/placement/placements/img1.jpg';
import img2 from '../../assets/placement/placements/img2.jpg';
import reliance from '../../assets/placement/placements/reliance.jpg';
import hdfc from '../../assets/placement/placements/hdfc.jpg';
import tata from '../../assets/placement/placements/tata.jpg';
import dell from '../../assets/placement/placements/dell.jpg';
import back from '../../assets/placement/placements/back.jpg';
import p1 from '../../assets/placement/placements/place1.jpg';
import p2 from '../../assets/placement/placements/place2.jpg';
import p3 from '../../assets/placement/placements/place3.jpg';
import im1 from '../../assets/placement/placements/im1.png';
import basic_science from '../../assets/placement/placements/basic_science.png'
import business from '../../assets/placement/placements/business.png'
import comp_app from '../../assets/placement/placements/basic_science.png'
import computer_application from '../../assets/placement/placements/computer_application.png'
import law from '../../assets/placement/placements/law.png'
import mba from '../../assets/placement/placements/MBA.webp'
import paramedical from '../../assets/placement/placements/paramdeical.png'
import agriculture from '../../assets/placement/placements/agriculture.png'
import pharmacy from '../../assets/placement/placements/pharmacy.png'
import hospitality_cat from '../../assets/placement/placements/hospitality_cat.png'
import banner from '../../assets/placement/placements/banner.jpg'
const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    state: '',
    city: '',
    specialization: '',
    branch: '',
  });
  
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const toemail = urlParams.get('e'); // Assuming 'email' is the parameter name
  
    // Merge email with form data
    const updatedFormData = { ...formData, toemail };
  
    try {
      const response = await fetch('https://ais.ac.in/send.php',  {
        method: 'POST',
        body: JSON.stringify(updatedFormData),
      });
  
      if (response.ok) {
        // Handle successful response
        console.log('Form data sent successfully');
        setIsFormVisible(false); // Hide the form if needed
      } else {
        // Handle error response
        console.error('Error sending form data');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };
  
  const states = [
    "Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
    "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa",
    "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh",
    "Uttaranchal", "West Bengal"
  ];

  const specializations = [
    "Diploma in Engineering (17)", "Bachelor of Technology (24)", "Master of Technology (10)",
    "Bachelor of Arts (6)", "Master of Arts (3)", "Bachelor of Business Administration (17)",
    "Master of Business Administration (20)", "Integrated Diploma in Business Administration Bachelor of Business Administration",
    "Integrated Bachelor of Business Administration Master of Business Administration (5)", "Bachelor of Visual Arts (3)",
    "Bachelor of Business Administration Bachelor of Law (3)", "Master of Law (LL.M) (4)", "B.Sc. (Hons) Agriculture",
    "Diploma In Design (4)", "Bachelor of Design (B.Des.) (4)", "Bachelor of Science (B.Sc.) (2)", "Masters of Design (M.Des.)",
    "Bachelor of Social Work", "Master of Social Work (2)", "Bachelor of Commerce (B.Com) (4)", "Master of Commerce (M.Com) (4)",
    "Bachelor of Computer Application (BCA) (10)", "Bachelor of Science (B.Sc.) in Information Technology (10)", "Master of Computer Application (MCA) (10)",
    "Master of Science (M.Sc.) in Information Technology (10)", "Integrated Master of Computer Application (MCA) No Exit (12)", "Diploma in Pharmacy (D.Pharm)",
    "Bachelor of Pharmacy (B.Pharm.) - Lateral Entry (2)", "Master of Pharmacy (M.Pharm.) (9)", "Diploma in Architecture (D.Arch)", "Bachelor of Architecture (B.Arch)",
    "Bachelor of Design (B.Des.)", "Master of Planning (M.Plan.)", "Master of Design (M.Des)", "Bachelor of Science (B.Sc.) (14)", "Master of Science (M.Sc.) (13)",
    "Diploma in Hotel Management & Catering Technology (DHMCT)", "Bachelor in Hotel Management & Catering Technology (BHMCT)", "Diploma in Aviation Management",
    "Bachelor of Science (Nursing)", "Auxilary Nursing Midwifery", "Master of Science (Nursing)", "Bachelor of Physiotherapy", "Bachelor of Performing Arts (BPA) (3)",
    "Bachelor of Science (B.Sc.) in Public Health (2)", "Master of Hospital Administration (MHA)", "Master of Public Health (MPH)"
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
  };
  const programsData = {
    programs: [
      {
        category: "B.Tech",
        image: comp_app,
        specializations: [
          "Computer Science & Engineering (CSE)",
          "Electronics & Comm. Engineering (ECE)",
          "Electrical Engineering (EE)",
          "Mechanical Engineering (ME)",
          "Civil Engineering (CE)"
        ]
      },
      {
        category: "M.Tech",
        image: comp_app,
        specializations: [
          "Computer Science & Engineering (CSE)",
          "Electronics & Comm. Engineering (ECE)",
          "Mechanical Engineering (ME)"
        ]
      },
      {
        category: "Pharmacy",
        image: pharmacy,
        specializations: [
          "Bachelor in Pharmacy (B.Pharm)",
          "Master in Pharmacy (M.Pharm)",
          "Doctor of Pharmacy (Pharm.D)",
          "Diploma in Pharmacy (D.Pharm)"
        ]
      },
      {
        category: "Hospitality & Catering",
        image: hospitality_cat,
        specializations: [
          "Bachelor of Hotel Management & Catering Technology (BHMCT)",
          "Dietetics and Nutrition",
          "Master of Hotel Management & Catering Technology (MHMCT)",
          "Bachelor of Vocational Hotel Management (B.Voc HM)"
        ]
      },
      {
        category: "Education",
        image: basic_science,
        specializations: [
          "Bachelor of Education (B.Ed)",
          "Bachelor of Arts (BA)",
          "Master of Education (M.Ed)",
          "Master of Arts in Education (MA.Edu)"
        ]
      },
      {
        category: "Computer Applications",
        image: computer_application,
        specializations: [
          "Bachelor of Computer Application (BCA)",
          "Master of Computer Application (MCA)",
          "Post Graduation Diploma in Computer Application (PGDCA)"
        ]
      },
      {
        category: "Business Studies",
        image: business,
        specializations: [
          "Bachelor in Business Administration (BBA)",
          "Bachelor of Commerce (B.Com)",
          "Master of Commerce (M.Com)",
          "Master in Business Administration (MBA)"
        ]
      },
      {
        category: "Paramedical",
        image: paramedical,
        specializations: [
          "B.Sc Radio Medical Imaging Technology (B.Sc RMIT)",
          "B.Sc Operation Theater Technology (B.Sc OTT)",
          "B.Sc Optometry (B.Sc Opt)",
          "B.Sc Anesthesia and Operation Technology (B.Sc Anes OT)",
          "B.Sc Medical Lab Science (B.Sc MLS)",
          "M.Sc Medical Lab Science Biochemistry (M.Sc - MLS - Biochemistry)",
          "M.Sc Anesthesia and Operation Technology (M.Sc Anes & OT)",
          "Diploma in Medical Lab Technology"
        ]
      },
      {
        category: "Basic Science",
        image: basic_science,
        specializations: [
          "B.Sc Non Medical",
          "M.Sc Maths",
          "M.Sc Physics",
          "M.Sc Chemistry"
        ]
      },
      {
        category: "Law",
        image: law,
        specializations: [
          "LL.B",
          "BA.LLB"
        ]
      },
      {
        category: "Polytechnic/ Diploma",
        image: basic_science,
        specializations: [
          "Computer Science and Engineering (CSE)",
          "Electrical Engineering (EE)",
          "Mechanical Engineering (ME)",
          "Civil Engineering (CE)"
        ]
      },
      {
        category: "ITI",
        image: business,
        specializations: [
          "Welder",
          "Plumber",
          "COPA"
        ]
      }
    ]
  };

  return (
    <div>
      {isFormVisible && (
        <div className="fixed z-[1] top-24 right-10 bg-white w-96 p-3 rounded-md shadow-lg border-2">
          <button
            className="absolute top-2 right-2 text-black"
            onClick={() => setIsFormVisible(false)}
          >
            X
          </button>
          <form className="flex flex-col justify-center"
            action="https://sviet.ac.in/forms/send-email.php"
            method="post"
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
          >
            <div className="input_field py-3 my-3">
              <span><i aria-hidden="true" className="fa fa-user"></i></span>
              <input
                className="py-2 px-1  w-72 ms-1"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_field">
              <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
              <input
                className="py-2 px-1 ms-1  w-72"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_field my-3">
              <span><i aria-hidden="true" className="fa fa-phone"></i></span>
              <input
                className="py-2 px-1 ms-1 my-3  w-72 border-2 border-gray-400 rounded-md"
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="body12 font-medium my-3" style={{ display: 'inline-flex' }}>
              Gender:
              <div style={{ padding: '3px 0px 0px 13px', margin: '-3px 0px 12px 7px' }}>
                <input
                  className="py-2 px-1 ms-1 my-3 border-2 border-gray-400 rounded-md"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <input
                  className="py-2 px-1 ms-1 my-3 border-2 border-gray-400 rounded-md"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="input_field select_option my-3">
              <select
                id="sts"
                name="state"
                className="form-control py-2 bg-yellow-100 rounded-md  w-72"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              <div className="select_arrow"></div>
            </div>
            <div className="input_field select_option" style={{ margin: '0px' }}>
              <select
                id="state"
                name="city"
                className="form-control py-2 bg-yellow-100 rounded-md  w-72"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option>Select city</option>
              </select>
              <div className="select_arrow"></div>
            </div>
            <div className="row clearfix">
              <div className="col_half">
                <div className="input_field select_option my-3" style={{ padding: '0px' }}>
                  <select
                    className="form-control py-2 bg-yellow-100 rounded-md w-72"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map((specialization, index) => (
                      <option className="w-72" key={index} value={specialization}>{specialization}</option>
                    ))}
                  </select>
                  <div className="select_arrow my"></div>
                </div>
              </div>
              <div className="col_half my-3">
                <div className="input_field">
                  <input
                    type="text"
                    className="py-2 px-2  w-72"
                    name="branch"
                    placeholder="Branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <input
              className="button mx-auto bg-yellow-500 rounded-lg p-3 ms-28  "
              type="submit"
              value="Register"
            />
          </form>
        </div>
      )}
      <div className='lg:h-[630px] md:h-[600px] sm:h-[420px] h-80 w-full' style={{ backgroundImage: `url(${banner.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

      </div>
      <div className='lg:h-96 w-full' style={{ backgroundImage: `url(${back.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <section className="my-auto pt-10" style={{ color: 'white' }}>
      <div className="container py-5">
        <div className="flex flex-wrap justify-center items-center">
          <div className=" h-64    p-5 mb-4 w-full lg:w-1/4 text-center" style={{ backgroundImage: `url(${im1.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:'center' }}>
            <h6 className="p-5 mt-10">Awarded as Best Placement College in North India by Global Education Award 2021</h6>
          </div>
          <div className=" h-64   p-5 mb-4 w-full lg:w-1/4 text-center" style={{ backgroundImage: `url(${im1.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:'center' }}>
            <h6 className="p-5 mt-10">Awarded as Best Contribution towards Education Initiative of the Year 2022 by Indian CSR Award 2022</h6>
          </div>
          <div className=" h-64   p-5 mb-4 w-full lg:w-1/4 text-center" style={{ backgroundImage: `url(${im1.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition:'center' }}>
            <h6 className="p-5 mt-10">Awarded as Best Pharmacy College in Punjab by Indian Education Award 2020</h6>
          </div>
        </div>
      </div>
    </section>
      </div>
      
      <div className='lg:flex md:flex sm:flex flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap md:justify-evenly md:gap-4 sm:gap-4 gap-4 lg:justify-around justify-center py-7 px-4 items-center'>
        <div className="lg:w-[47%] md:w-[47%] sm:w-full w-full">
        <div className='px-10 py-10'>
        <h2 className='text-4xl lg:text-start font-bold text-center py-3'>
          Top Notch Placements
        </h2>
        <p className='text-medium lg:text-start font-medium text-center'>Make Your Placement Prior To Graduation through our wide range of rewarding career opportunities</p>
      </div>
          <div className='grid grid-cols-2 gap-3 place-items-center'>
            <div className='border-2 p-2 rounded-md shadow-md w-[100%] h-[170px] text-center'>
              <div className='items-center mt-[15%]'>
                <h2 className='text-3xl font-bold'>5000+</h2>
                <p>Offer Letters</p>
              </div>
            </div>
            <div className='border-2 p-2 rounded-md shadow-md w-[100%] h-[170px] text-center'>
              <div className='items-center mt-[15%]'>
                <h2 className='text-3xl font-bold'>5000+</h2>
                <p>Offer Letters</p>
              </div>
            </div>
            <div className='border-2 p-2 rounded-md shadow-md w-[100%] h-[170px] text-center'>
              <div className='items-center mt-[15%]'>
                <h2 className='text-3xl font-bold'>5000+</h2>
                <p>Offer Letters</p>
              </div>
            </div>
            <div className='border-2 p-2 rounded-md shadow-md w-[100%] h-[170px] text-center'>
              <div className='items-center mt-[15%]'>
                <h2 className='text-3xl font-bold'>5000+</h2>
                <p>Offer Letters</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-[50%] md:w-[50%] sm:w-full w-full'>
          <img src={img1.src} className='object-contain' alt='img1' />
          <div>
            <Slider {...settings}>
              <div className='shadow-md'><img src={dell.src} alt="" /></div>
              <div className='shadow-md'><img src={tata.src} alt="" /></div>
              <div className='shadow-md'><img src={hdfc.src} alt="" /></div>
              <div className='shadow-md'><img src={reliance.src} alt="" /></div>
            </Slider>
          </div>
        </div>
      </div>
      <div className='lg:h-[860px] md:h-[600px] sm:h-[420px] h-80 w-full' style={{ backgroundImage: `url(${img2.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>

      <div className="py-10 px-8">
        <h2 className="text-4xl font-bold text-center py-3">Our Industry Centric Programs Specializations</h2>
        <p className="text-center text-medium pb-8">"Become the leader You want to be with our Industry Centric Programs"</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 place-items-center">
      {programsData.programs.map((program, index) => (
        <div key={index} className="col-span-1 w-full h-[620px] py-3 px-3 border-2 m-">
          <img src={program.image.src} alt={program.category} className="w-36" />
          <h3 className="text-2xl font-bold mt-8">{program.category}</h3>
          <ul className="mt-3">
            {program.specializations.map((specialization, idx) => (
              <li key={idx} className="mb-1">{specialization}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
      </div>

      <div className="p-7 text-center w-full my-6" style={{ backgroundImage: `url(${back.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <h2 className="text-5xl font-bold text-white py-1">IF THEY DID IT SO CAN YOU</h2>
        <p className="text-center font-medium text-white">"Companies around the World hiring Our Alumni"</p>
        <div className="flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap py-10 flex-wrap justify-center gap-4 p-2 items-center">
          <div>
            <img src={p1.src} alt="" />
          </div>
          <div>
            <img src={p2.src} alt="" />
          </div>
          <div>
            <img src={p3.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
