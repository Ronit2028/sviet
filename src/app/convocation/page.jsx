"use client";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Link from "next/link";

const ConvocationLandingPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    fatherName: "",
    gender: "",
    course: "",
    phoneNumber: "",
    collegeName: "",
    passoutBatch: "",
    rollNumber: "",
    currentJobProfile: "",
    companyName: "",
    designation: "",
    photograph: null,
    degreeFile: null,
    paymentProof: null,
    consentForComing: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Event highlights data
  const eventHighlights = [
    {
      icon: "🎓",
      title: "Degree Award Distribution",
      description: "Official degree certificates awarded to all graduating students"
    },
    {
      icon: "�",
      title: "Recognition of Academic Excellence",
      description: "Special awards for outstanding academic achievements and merit"
    },
    {
      icon: "🎤",
      title: "Inspiring Speeches by Dignitaries",
      description: "Motivational speeches from industry leaders and renowned personalities"
    },
    {
      icon: "�",
      title: "Photography & Media Coverage",
      description: "Professional photography and media coverage to capture precious moments"
    },
    {
      icon: "🤝",
      title: "Meet Your Batchmates & Faculty",
      description: "Reconnect with classmates and beloved faculty members"
    }
  ];

  // Photo gallery data (placeholder for now)
  const galleryImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  // Animation and countdown effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date("September 20, 2025 10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  // Add keyframes and animations
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes gradient-x {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 5px rgba(254, 167, 0, 0.3); }
        50% { box-shadow: 0 0 20px rgba(254, 167, 0, 0.6); }
        100% { box-shadow: 0 0 5px rgba(254, 167, 0, 0.3); }
      }
      
      @keyframes line-glow {
        0% { opacity: 0.2; }
        50% { opacity: 0.5; }
        100% { opacity: 0.2; }
      }
      
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 15s ease infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 4s ease-in-out infinite;
      }
      
      .animate-line-glow {
        animation: line-glow 4s ease-in-out infinite;
      }
      
      .countdown-card {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      
      .countdown-card:hover {
        border-color: rgba(254, 167, 0, 0.5);
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
        box-shadow: 0 0 15px rgba(254, 167, 0, 0.15);
      }
      
      .countdown-value {
        transition: color 0.3s ease;
      }
      
      .countdown-card:hover .countdown-value {
        color: rgb(254, 167, 0);
      }
      
      .cta-primary {
        background: linear-gradient(to right, rgb(254, 167, 0), rgb(255, 140, 0));
        transition: all 0.3s ease;
      }
      
      .cta-primary:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(254, 167, 0, 0.5);
      }
      
      .cta-secondary {
        background-color: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      
      .cta-secondary:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.2);
      }
      
      .gradient-text {
        background: linear-gradient(to right, rgb(254, 167, 0), white, rgb(255, 140, 0));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .accent-line {
        height: 1px;
        background: linear-gradient(to right, transparent, rgba(254, 167, 0, 0.3), transparent);
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch('/api/sendEmail/convocation', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Registration submitted successfully! You will receive a confirmation email shortly.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Reset form after successful submission
        setFormData({
          email: "",
          fullName: "",
          fatherName: "",
          gender: "",
          course: "",
          phoneNumber: "",
          collegeName: "",
          passoutBatch: "",
          rollNumber: "",
          currentJobProfile: "",
          companyName: "",
          designation: "",
          photograph: null,
          degreeFile: null,
          paymentProof: null,
          consentForComing: "",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      
      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden pb-12">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            className="absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#00112d]/70" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent, transparent, rgba(0,0,0,0.9))'
          }} />
          
          {/* Accent lines */}
          <div className="absolute bottom-0 left-0 w-full accent-line animate-line-glow" />
          <div className="absolute top-0 left-0 w-full accent-line animate-line-glow" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* Event Badge */}
            <div className="mx-auto mb-2 mt-28">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-medium animate-float">
                <span className="w-4 h-4 mr-2 text-[#fea700]">🎓</span>
                <span>Celebrating Excellence - Building Bright Futures</span>
              </div>
            </div>

            {/* Main Headline with animated gradient */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-white mb-2">Welcome to</span>
                <span className="relative">
                  <span className="relative z-10 gradient-text animate-gradient-x">
                    15th Graduation Ceremony
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full accent-line"></span>
                </span>
              </h1>
              
              <p className="text-lg md:text-lg text-white/80 max-w-3xl leading-relaxed">
                Celebrating the achievements of graduating batches 2024 & 2025 at Swami Vivekanand Group of Institutes. 
                A proud moment to honor your hard work, dedication, and remarkable achievements.
              </p>
              
              {/* Event details with icons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-white/70">
                  <span className="w-5 h-5 mr-2 text-[#fea700]">📅</span>
                  <span>September 20, 2025</span>
                </div>
                <div className="flex items-center text-white/70">
                  <span className="w-5 h-5 mr-2 text-[#fea700]">📍</span>
                  <span>SVGOI Auditorium, Banur</span>
                </div>
              </div>
            </div>

            {/* Countdown Timer Cards with hover effects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 max-w-3xl">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map(({ label, value }) => (
                <div 
                  key={label} 
                  className="countdown-card py-4 px-3 rounded-xl text-center"
                >
                  <div className="countdown-value text-4xl font-bold text-white mb-1">
                    {value < 10 ? `0${value}` : value}
                  </div>
                  <div className="text-white/70 text-sm font-medium uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a href="#registration">
                <button className="cta-primary px-8 py-3 rounded-full text-white font-medium cursor-pointer">
                  Register Now
                </button>
              </a>
              <button className="cta-secondary px-8 py-3 rounded-full text-white font-medium">
                Download Brochure
              </button>
            </div>

           
          </div>
        </div>

       
      </section>

      {/* About the Event Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container w-10/12 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#00112d] mb-6 leading-tight">
                  A Proud Moment to Honor Your <span className="text-[#fea700]">Hard Work & Success</span>
                </h2>
                <div className="w-16 h-1 bg-[#fea700] mb-6"></div>
              </div>
              
              <div className="space-y-3">
                <p className="text-md text-gray-700 leading-relaxed">
                  The 15th Graduation Ceremony at Swami Vivekanand Group of Institutes (SVGOI) is a momentous occasion to celebrate the achievements of the graduating batches of 2024 & 2025.
                </p>
                
                <p className="text-md text-gray-700 leading-relaxed">
                  This day marks not only the end of an academic journey but the beginning of a new chapter filled with opportunities, growth, and success.
                </p>
                
                <div className="bg-gradient-to-r from-[#fea700]/10 to-[#ff8c00]/10 rounded-xl p-4 border-l-4 border-[#fea700]">
                  <h3 className="text-xl font-bold text-[#00112d] mb-3">
                    Welcome to Your Success Story!
                  </h3>
                  <p className="text-gray-700">
                    Join us in celebrating this milestone achievement and creating memories that will last a lifetime.
                  </p>
                </div>
              </div>
             
            </motion.div>

            {/* Right Stats Cards */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div className="text-3xl font-bold text-[#fea700] mb-1">2000+</div>
                  <p className="text-sm text-gray-600 font-medium">Graduates</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <div className="text-3xl font-bold text-[#fea700] mb-1">6</div>
                  <p className="text-sm text-gray-600 font-medium">Colleges</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="text-3xl font-bold text-[#fea700] mb-1">20+</div>
                  <p className="text-sm text-gray-600 font-medium">Years Legacy</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div className="text-3xl font-bold text-[#fea700] mb-1">15k+</div>
                  <p className="text-sm text-gray-600 font-medium">Alumni</p>
                </motion.div>
              </div>
              
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="highlights" className="py-20 bg-white">
        <div className="container w-10/12 mx-auto">
        <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#00112d] mb-6 leading-tight">
                  Why <span className="text-[#fea700]">Join Us</span>
                </h2>
                <div className="w-16 h-1 bg-[#fea700] mb-6"></div>
                <p className="text-lg text-gray-600 mb-8">
                  Make this milestone moment even more special by being part of our grand celebration
                </p>
              </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Why Join Us */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              <div className="grid gap-4">
                <motion.div 
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📜</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00112d] mb-2">Receive Your Degree</h3>
                      <p className="text-gray-600 text-sm">Get your official degree certificate in a grand ceremony with your loved ones present</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00112d] mb-2">Celebrate with Family</h3>
                      <p className="text-gray-600 text-sm">Share this proud moment with your family and friends in a memorable celebration</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00112d] mb-2">Network Building</h3>
                      <p className="text-gray-600 text-sm">Connect with fellow graduates and expand your professional network</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#fea700] to-[#ff8c00] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎉</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00112d] mb-2">Memorable Experience</h3>
                      <p className="text-gray-600 text-sm">Create lifelong memories of this significant milestone in your academic journey</p>
                    </div>
                  </div>
                </motion.div>
              </div>

             
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Graduation ceremony celebration" 
                  className="w-full h-[480px] object-cover"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                

                {/* Decorative elements */}
                <div className="absolute top-4 right-6 w-16 h-16 bg-[#fea700]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#fea700]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ff8c00]/10 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Registration Form Section */}
      <section id="registration" className="py-20 bg-white">
        <div className="w-10/12 mx-auto">
          <motion.div 
            className=" mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-[#00112d] mb-4">
              <span className="text-[#fea700]">Registration</span> Form
            </h2>
            <div className="w-24 h-1 bg-[#fea700]  mb-6"></div>
            <p className="text-xl text-gray-600">
              Register for 15th Convocation (20th Sept. 2025)
            </p>
          </motion.div>

          <div className="bg-white shadow-xl">
            <div className="bg-[#00112d] text-white p-4">
              <div className="container mx-auto">
                <h3 className="text-2xl font-bold mb-2">
                  Swami Vivekanand Group of Institutes
                </h3>
                <p className="text-lg">
                  Registration form for 15th Convocation (20th Sept. 2025)
                </p>
               
              </div>
            </div>

            <motion.div 
              className="container mx-auto p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Father Name */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Father Name *
                  </label>
                  <input
                    name="fatherName"
                    type="text"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    placeholder="Enter father's name"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="B.TECH">B.TECH</option>
                    <option value="M.TECH">M.TECH</option>
                    <option value="B.SC">B.SC</option>
                    <option value="M.SC">M.SC</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="B.COM">B.COM</option>
                    <option value="M.COM">M.COM</option>
                    <option value="BPHA">BPHA</option>
                    <option value="MPHA">MPHA</option>
                    <option value="BHMCT">BHMCT</option>
                    <option value="MHMCT">MHMCT</option>
                    <option value="B.A">B.A</option>
                    <option value="B.ED">B.ED</option>
                    <option value="M.ED">M.ED</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Valid phone number *
                  </label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                {/* College Name */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    College Name *
                  </label>
                  <select
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                  >
                    <option value="">Select College</option>
                    <option value="SVIET">SVIET</option>
                    <option value="SVFTM">SVFTM</option>
                    <option value="SVCMT">SVCMT</option>
                    <option value="SVCP">SVCP</option>
                    <option value="SVCE">SVCE</option>
                    <option value="SVFITBM">SVFITBM</option>
                  </select>
                </div>

                {/* Passout Batch */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Passout Batch *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="passoutBatch"
                        value="2024"
                        checked={formData.passoutBatch === "2024"}
                        onChange={handleChange}
                        className="mr-3 w-5 h-5 text-[#fea700]"
                        required
                      />
                      <span className="text-lg">2024</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="passoutBatch"
                        value="2025"
                        checked={formData.passoutBatch === "2025"}
                        onChange={handleChange}
                        className="mr-3 w-5 h-5 text-[#fea700]"
                        required
                      />
                      <span className="text-lg">2025</span>
                    </label>
                  </div>
                </div>

                {/* Roll Number */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Roll Number *
                  </label>
                  <input
                    name="rollNumber"
                    type="text"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    placeholder="Enter your roll number"
                  />
                </div>

                {/* Current Job Profile */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Current Job Profile *
                  </label>
                  <input
                    name="currentJobProfile"
                    type="text"
                    value={formData.currentJobProfile}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    placeholder="Enter your current job profile"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Company Name/University Name
                  </label>
                  <input
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    placeholder="Enter company or university name"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Designation
                  </label>
                  <input
                    name="designation"
                    type="text"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    placeholder="Enter your designation"
                  />
                </div>

                {/* Photograph Upload */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Upload Your passport size photograph *
                  </label>
                  <input
                    name="photograph"
                    type="file"
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    accept="image/*"
                  />
                  <p className="text-sm text-gray-500 mt-2">Upload 1 supported file. Max 10 MB.</p>
                </div>

                {/* Degree File Upload */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Whether Degree Received. If yes, kindly attach the file.
                  </label>
                  <input
                    name="degreeFile"
                    type="file"
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <p className="text-sm text-gray-500 mt-2">Upload 1 supported file. Max 10 MB.</p>
                </div>

                {/* Payment Proof */}
                <div className="bg-amber-50 p-4 rounded-xl border-2 border-amber-200">
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Registration Fee Rs: 1000/- (Upload Payment Proof) *
                  </label>
                  <div className="mb-4 p-4 bg-white rounded-lg border">
                    <p className="text-lg font-semibold text-[#00112d] mb-2">
                      Registration Fee: ₹1,000/-
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Pay Through Your ERP Login
                    </a>
                  </div>
                  <input
                    name="paymentProof"
                    type="file"
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#fea700] focus:border-transparent transition-all text-lg"
                    required
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <p className="text-sm text-gray-500 mt-2">Upload 1 supported file. Max 10 MB.</p>
                </div>

                {/* Consent */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Consent for coming *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="consentForComing"
                        value="yes"
                        checked={formData.consentForComing === "yes"}
                        onChange={handleChange}
                        className="mr-3 w-5 h-5 text-[#fea700]"
                        required
                      />
                      <span className="text-lg">yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="consentForComing"
                        value="no"
                        checked={formData.consentForComing === "no"}
                        onChange={handleChange}
                        className="mr-3 w-5 h-5 text-[#fea700]"
                        required
                      />
                      <span className="text-lg">no</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-xl transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#fea700] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#fea700] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing Registration...
                      </div>
                    ) : (
                      "Submit Registration"
                    )}
                  </button>
                </div>

                {/* Form Footer */}
                <div className="pt-6 text-center text-sm text-gray-500 border-t">
                  <p>This form was created inside of Swami Vivekanand Institute of Engineering & Technology.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConvocationLandingPage;
