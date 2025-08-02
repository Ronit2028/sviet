// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { X, Rocket, Globe } from 'lucide-react'
// import Link from 'next/link'

// export default function HackathonPopup() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   })

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 2000)
//     return () => clearTimeout(timer)
//   }, [])

//   useEffect(() => {
//     const targetDate = new Date('2025-02-08T09:00:00').getTime()

//     const interval = setInterval(() => {
//       const now = new Date().getTime()
//       const difference = targetDate - now

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((difference % (1000 * 60)) / 1000)
//       })

//       if (difference < 0) {
//         clearInterval(interval)
//       }
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-40 flex items-start lg:mt-28  justify-end p-4 mr-16 bg-opacity-50 "
//         >
//           <motion.div
//             className="relative w-full max-w-2xl overflow-hidden"
//             initial={{ scale: 0.8, y: 50 }}
//             animate={{ scale: 1, y: 0 }}
//             exit={{ scale: 0.8, y: 50 }}
//           >
//             <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-700 shadow-2xl lg:h-[450px]">
//               {/* Animated background */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <motion.div
//                   className="absolute inset-0 opacity-20"
//                   animate={{
//                     backgroundPosition: ['0% 0%', '100% 100%'],
//                     scale: [1, 1.2, 1]
//                   }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     repeatType: "reverse"
//                   }}
//                   style={{
//                     backgroundImage: 'radial-gradient(circle, #ff6b00 1px, transparent 1px), radial-gradient(circle, #ff6b00 1px, transparent 1px)',
//                     backgroundSize: '40px 40px',
//                   }}
//                 />
//                 <motion.div
//                   className="absolute inset-0"
//                   animate={{
//                     opacity: [0.1, 0.3, 0.1],
//                     rotate: [0, 360],
//                   }}
//                   transition={{
//                     duration: 30,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                   style={{
//                     backgroundImage: 'conic-gradient(from 0deg, transparent, #fea700, transparent)',
//                   }}
//                 />
//               </div>
              
//               <button
//                 onClick={() => setIsVisible(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
//                 aria-label="Close popup"
//               >
//                 <X size={24} />
//               </button>

//               <div className="relative p-8 space-y-6">
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   className="flex flex-col items-center space-y-4"
//                 >
//                   <div className="flex items-center space-x-2">
//                     {/* <Rocket className="text-[#fea700]" size={32} /> */}
//                     <h2 className="text-4xl font-bold">
//                       <span className="text-white">Bharat-tech-Xperience </span>
//                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fea700] to-orange-600"> 2.0</span>
//                     </h2>
//                     {/* <Globe className="text-blue-400 animate-spin-slow" size={32} /> */}
//                   </div>
//                   <p className="text-gray-300 text-center lg:mt-[-20px]">~National Level Hackathon</p>
//                 </motion.div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-center"
//                 >
//                   <p className="text-lg text-gray-300 lg:mt-[-20px]">
//                     Empower Your Tech Dreams: Register for Bharat Tech Xperience Hackathon
//                   </p>
//                 </motion.div>

//                 {/* Countdown Timer */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="relative w-full px-6 py-2 rounded-xl bg-gray-900/80 backdrop-blur-sm overflow-hidden"
//                 >
//                   {/* Background stars */}
//                   {[...Array(20)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="absolute w-px h-px bg-white rounded-full"
//                       style={{
//                         top: `${Math.random() * 100}%`,
//                         left: `${Math.random() * 100}%`,
//                         opacity: Math.random() * 0.5 + 0.3
//                       }}
//                     />
//                   ))}
                  
//                   <motion.h3
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center text-xl text-gray-400 mb-2"
//                   >
//                     STARTS IN
//                   </motion.h3>
                  
//                   <div className="grid grid-cols-4 gap-4">
//                     {[
//                       { label: 'Days', value: timeLeft.days, color: 'text-green-500' },
//                       { label: 'Hours', value: timeLeft.hours, color: 'text-gray-300' },
//                       { label: 'Minutes', value: timeLeft.minutes, color: 'text-[#fea700]' },
//                       { label: 'Seconds', value: timeLeft.seconds, color: 'text-gray-300' }
//                     ].map((item) => (
//                       <motion.div
//                         key={item.label}
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         className="flex flex-col items-center justify-center"
//                       >
//                         <motion.span
//                           className={`text-4xl sm:text-5xl font-bold font-mono ${item.color} tabular-nums`}
//                           animate={{ scale: [1, 1.05, 1] }}
//                           transition={{
//                             duration: 0.3,
//                             repeat: Infinity,
//                             repeatDelay: 0.5
//                           }}
//                         >
//                           {String(item.value).padStart(2, '0')}
//                         </motion.span>
//                         <span className="text-xs sm:text-sm text-gray-500 mt-1">{item.label}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="flex justify-center"
//                 >
//                   <Link
//                     href="https://bharat-tech-xperience.theuniques.in/register"
//                     className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-[#fea700] rounded-full hover:bg-orange-600 text-white"
//                   >
//                     <span className="relative">Register Now</span>
//                     <motion.span
//                       className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform rotate-12 translate-x-1 bg-white opacity-10 group-hover:-translate-x-40"
//                       animate={{ x: [-100, 250] }}
//                       transition={{ 
//                         duration: 2,
//                         repeat: Infinity,
//                         repeatType: "loop"
//                       }}
//                     />
//                   </Link>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Settings, Calendar, MapPin, BookOpen, Users2, Rocket, Star, Trophy, Users, Gift, Zap } from "lucide-react"
import Link from "next/link"

export default function HackathonPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isElevateVisible, setIsElevateVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [elevateTimeLeft, setElevateTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    const elevateTimer = setTimeout(() => setIsElevateVisible(true), 3000)
    return () => {
      clearTimeout(timer)
      clearTimeout(elevateTimer)
    }
  }, [])

  useEffect(() => {
    const targetDate = new Date("2025-09-01T09:00:00").getTime()
    const elevateTargetDate = new Date("2025-09-11T09:00:00").getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      const elevateDifference = elevateTargetDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      })

      setElevateTimeLeft({
        days: Math.floor(elevateDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((elevateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((elevateDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((elevateDifference % (1000 * 60)) / 1000),
      })

      if (difference < 0 && elevateDifference < 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* ELEVATE 2025 Popup - Larger */}
      <AnimatePresence>
        {isElevateVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2"
          >
            <motion.div
              className="relative w-full max-w-sm md:max-w-md overflow-hidden"
              initial={{ scale: 0.7, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative bg-[#1a5f5f] rounded-2xl overflow-hidden shadow-2xl border border-teal-200">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 opacity-15"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    style={{
                      backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300/30 rounded-full"
                      animate={{
                        y: [0, -40, 0],
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                      }}
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${10 + Math.random() * 80}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Close button */}
                <motion.button
                  onClick={() => setIsElevateVisible(false)}
                  className="absolute top-2 right-2 text-white/80 hover:text-white transition-all z-20 bg-white/20 backdrop-blur-sm rounded-full p-1.5 shadow-lg hover:shadow-xl hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} />
                </motion.button>

                <div className="relative p-3 space-y-3">
                  {/* Header */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center space-y-2"
                  >
                    <div className="flex items-center justify-center space-x-3">
                      <motion.div
                        className="relative"
                        
                      >
                        <div className="">
                          <img
                            src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumFf6XYTJbL95YayPfxuDQMFsXlC0oBImU6z28"
                            alt="ELEVATE 2025"
                            className="w-full h-24 object-cover"
                          />
                        </div>
                       
                      </motion.div>
                    </div>

                    <div className="space-y-1 ">
                      <motion.h1 
                        className="text-2xl md:text-3xl font-bold text-white leading-tight "
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <span className="text-yellow-300">ELEVATE</span>
                        <span className="text-orange-300 ml-2">2.0</span>
                      </motion.h1>
                      <h2 className="text-lg md:text-xl text-white/90 font-semibold">
                        LAUNCHING FUTURE
                      </h2>
                      <p className="text-sm text-white/80">
                        INDUCTION PROGRAM
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-white/70 text-xs">
                        <span className="flex items-center"><Trophy className="w-3 h-3 mr-1" />OPPORTUNITIES</span>
                        <span className="flex items-center"><Star className="w-3 h-3 mr-1" />GROWTH</span>
                        <span className="flex items-center"><Zap className="w-3 h-3 mr-1" />INSPIRATION</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Event Details */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 gap-2"
                  >
                    <div className="flex items-center space-x-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                      <Calendar className="w-4 h-4 text-yellow-300" />
                      <div>
                        <p className="font-bold text-white text-sm">11 SEPT</p>
                        <p className="text-white/70 text-xs">2025</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                      <MapPin className="w-4 h-4 text-green-300" />
                      <div>
                        <p className="font-bold text-white text-sm">SVIET Campus</p>
                        <p className="text-white/70 text-xs">Punjab</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Celebrity Speaker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/15 p-3 rounded-xl backdrop-blur-sm flex items-center gap-3"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-white/80 text-sm ">Welcoming our</h3>
                      <h2 className="text-lg md:text-xl font-bold text-yellow-300 ">CELEBRITY SPEAKER</h2>
                      <div className="text-white">
                        <h4 className="text-lg font-bold">Aman Gupta</h4>
                        <p className="text-white/80 text-sm">Co-founder boAt</p>
                        <p className="text-white/70 text-xs">Shark at Shark Tank INDIA</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumuImaRrzGDN7MfW9sTV1IA0zrSZwixYbo25LP"
                        alt="Aman Gupta"
                        className="w-32 h-32 md:w-32 md:h-32 rounded-full object-cover border-2 border-yellow-300/50"
                      />
                    </div>
                  </motion.div>

                  {/* Countdown */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 p-3 rounded-xl backdrop-blur-sm"
                  >
                    <h3 className="text-center text-white/80 text-sm mb-2 font-semibold">EVENT STARTS IN</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { label: "Days", value: elevateTimeLeft.days, color: "text-yellow-300", bg: "bg-yellow-400/20" },
                        { label: "Hours", value: elevateTimeLeft.hours, color: "text-green-300", bg: "bg-green-400/20" },
                        { label: "Minutes", value: elevateTimeLeft.minutes, color: "text-blue-300", bg: "bg-blue-400/20" },
                        { label: "Seconds", value: elevateTimeLeft.seconds, color: "text-pink-300", bg: "bg-pink-400/20" },
                      ].map((item) => (
                        <motion.div
                          key={item.label}
                          className={`flex flex-col items-center justify-center p-2 rounded-lg ${item.bg}`}
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                        >
                          <span className={`text-lg md:text-xl font-bold font-mono ${item.color}`}>
                            {String(item.value).padStart(2, "0")}
                          </span>
                          <span className="text-white/70 text-xs font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-2 justify-center"
                  >
                    <Link
                      href="#register"
                      className="group relative inline-flex items-center justify-center px-6 py-2 font-bold text-sm bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full hover:from-yellow-300 hover:to-orange-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                      <Users className="w-4 h-4 mr-1" />
                      Register Now
                    </Link>
                    
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VLSI Popup - Smaller */}
      <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-4 right-4 z-40"
        >
          <motion.div
            className="relative w-80 max-w-xs overflow-hidden"
            initial={{ scale: 0.7, x: 100, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            exit={{ scale: 0.7, x: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-[0.08]"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />

                {/* Floating elements */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 3,
                    }}
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                  />
                ))}
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-all z-20 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="Close popup"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={14} />
              </motion.button>

              <div className="relative p-3 space-y-3">
                {/* Header with logos and title */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center space-y-2"
                >
                  {/* Logos */}
                  <div className="flex items-center justify-center space-x-3">
                    {/* Institutional Logo */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        <img
                          src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAummu9ETcD2prEbC7OkVZGhPtxlqaunXTvJiBsM"
                          alt=""
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-orange-400/20 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>

                    {/* ATAL Logo */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                        <img
                          src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum8x73fJXlJfrKGuWUjb4n6NYRd3wE9DxCgy0v"
                          alt=""
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-purple-500/20 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="space-y-1">
                    <h2 className="text-xs font-semibold text-gray-600 tracking-wide">
                      AICTE Training and Learning (ATAL) Academy
                    </h2>
                    <h1 className="text-sm font-bold text-gray-800 leading-tight">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        VLSI Design Concepts
                      </span>
                      <br />
                      <span className="text-gray-700 text-xs">Semiconductor Industry Training</span>
                    </h1>
                  </div>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-2 gap-2 text-xs"
                >
                  <div className="flex items-center space-x-1 bg-blue-50 p-2 rounded-lg">
                    <Calendar className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">01-06 Sept</p>
                      <p className="text-gray-600 text-xs">2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-50 p-2 rounded-lg">
                    <MapPin className="w-3 h-3 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">SVIET</p>
                      <p className="text-gray-600 text-xs">Punjab</p>
                    </div>
                  </div>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-xl border border-blue-100"
                >
                  <h3 className="text-center text-xs text-gray-600 mb-2 font-medium">PROGRAM STARTS IN</h3>

                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: "Days", value: timeLeft.days, color: "text-blue-600", bg: "bg-blue-100" },
                      { label: "Hrs", value: timeLeft.hours, color: "text-green-600", bg: "bg-green-100" },
                      { label: "Min", value: timeLeft.minutes, color: "text-orange-600", bg: "bg-orange-100" },
                      { label: "Sec", value: timeLeft.seconds, color: "text-purple-600", bg: "bg-purple-100" },
                    ].map((item) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`flex flex-col items-center justify-center p-1 rounded-lg ${item.bg}`}
                      >
                        <motion.span
                          className={`text-sm font-bold font-mono ${item.color} tabular-nums`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1,
                          }}
                        >
                          {String(item.value).padStart(2, "0")}
                        </motion.span>
                        <span className="text-xs text-gray-600 font-medium">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center space-x-3 text-xs text-gray-600"
                >
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3 h-3 text-blue-500" />
                    <span>Hands-on</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users2 className="w-3 h-3 text-green-500" />
                    <span>Faculty</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="w-3 h-3 text-purple-500" />
                    <span>Industry</span>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center"
                >
                  <Link
                    href="/ATAL_FDP_Brochure.pdf"
                    className="group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-semibold text-xs transition-all bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                  >
                    <span className="relative flex items-center space-x-1">
                      <BookOpen size={12} />
                      <span>Download Brochure</span>
                    </span>
                    <motion.span
                      className="absolute right-0 w-4 h-16 -mt-6 transition-all duration-1000 transform rotate-12 translate-x-1 bg-white opacity-10 group-hover:-translate-x-24"
                      animate={{ x: [-60, 150] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                  </Link>
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-xs text-gray-500 pt-1 border-t border-gray-100"
                >
                  <p>Sponsored Faculty Development Program</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
