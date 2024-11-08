import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Globe2 } from 'lucide-react';
import Link from 'next/link'

const EducationFairPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2024-11-17T10:30:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-x-0 bottom-0 z-50  flex items-center justify-end mr-16 p-4"
        >
          <motion.div
            className="relative w-full max-w-2xl lg:mb-[-14px] overflow-hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <div className="relative bg-black rounded-xl overflow-hidden border border-orange-500/20 shadow-2xl h-48 mt-20">
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <motion.radialGradient
                      id="grad1"
                      cx="50%"
                      cy="50%"
                      r="50%"
                      fx="50%"
                      fy="50%"
                      animate={{
                        cx: ["0%", "100%", "100%", "0%", "0%"],
                        cy: ["0%", "0%", "100%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
                    </motion.radialGradient>
                  </defs>
                  <motion.rect
                    width="100%"
                    height="100%"
                    fill="url(#grad1)"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </svg>
              </motion.div>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>

              <div className="relative h-full flex items-center justify-between p-6 z-10">
                <div className="flex-1 pr-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="flex items-center space-x-2 mb-2"
                  >
                    
                    <h2 className="text-xl font-bold text-white">
                      GLOBAL EXPOSURE <span className="text-orange-600">EDUCATION FAIR</span>
                    </h2>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white text-sm"
                  >
                    <p className="font-semibold">17th Nov 2024 • 10:30 AM - 5 PM</p>
                    <p>SVIET, Banur</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                >
                  <h3 className="text-center text-white text-sm mb-2">Event Starts In</h3>
                  <div className="grid lg:grid-cols-4 lg:gap-2">
                    {[
                      { label: 'Days', value: timeLeft.days },
                      { label: 'Hours', value: timeLeft.hours },
                      { label: 'Mins', value: timeLeft.minutes },
                      { label: 'Secs', value: timeLeft.seconds }
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col items-center">
                        <span className="text-xl font-bold text-[#fea700]">
                          {String(item.value).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-white/70">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex-1 flex justify-center items-center pl-4"
                >
                  <a
                    href="https://www.abroadeducares.com"
                    className="inline-flex items-center px-6 py-2 bg-[#fea700] text-white font-semibold lg:rounded-full rounded-md hover:bg-orange-600 transition-colors ml-[-14px]"
                  >
                    Register Now
                  </a>
                </motion.div> */}
                <Link
                    href="https://www.abroadeducares.com"
                    className="group relative inline-flex items-center justify-center lg:px-8 px-12 py-2 lg:py-3 lg:ml-6 ml-2 overflow-hidden font-medium transition-all bg-[#fea700] lg:rounded-full rounded-md hover:bg-orange-600 text-white"
                  >
                    <span className="relative">Register Now</span>
                    <motion.span
                      className="absolute right-0 w-8 h-32  transition-all duration-1000 transform rotate-12 translate-x-1 bg-white opacity-10 group-hover:-translate-x-40"
                      animate={{ x: [-100, 250] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    />
                  </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EducationFairPopup;