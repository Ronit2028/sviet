'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, GraduationCap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function EducationFairPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const targetDate = new Date('2024-11-17T10:30:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })

      if (difference < 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-end p-4 mr-16 bg-opacity-50"
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-700 shadow-2xl lg:h-[450px]">
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    backgroundImage: 'radial-gradient(circle, #ff6b00 1px, transparent 1px), radial-gradient(circle, #ff6b00 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: 'conic-gradient(from 0deg, transparent, #fea700, transparent)',
                  }}
                />
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>

              <div className="relative p-8 space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="flex items-center space-x-2 mt-4">
                    
                    <h2 className="text-4xl font-bold text-center">
                      <span className="text-white">GLOBAL EXPOSURE </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fea700] to-orange-600">EDUCATION FAIR</span>
                    </h2>
                   
                  </div>
                  <p className="text-gray-300 text-center lg:mt-[-20px]">~Where Education Meets Opportunity</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <p className="text-lg text-gray-300 lg:mt-[-20px]">
                    Explore Your Future: Join Us at the Global Exposure Education Fair
                  </p>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative w-full px-6 py-2 rounded-xl bg-gray-900/80 backdrop-blur-sm overflow-hidden"
                >
                  {/* Background stars */}
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-px bg-white rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.3
                      }}
                    />
                  ))}
                  
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xl text-gray-400 mb-2"
                  >
                    EVENT STARTS IN
                  </motion.h3>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'Days', value: timeLeft.days, color: 'text-green-500' },
                      { label: 'Hours', value: timeLeft.hours, color: 'text-gray-300' },
                      { label: 'Minutes', value: timeLeft.minutes, color: 'text-[#fea700]' },
                      { label: 'Seconds', value: timeLeft.seconds, color: 'text-gray-300' }
                    ].map((item) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center"
                      >
                        <motion.span
                          className={`text-4xl sm:text-5xl font-bold font-mono ${item.color} tabular-nums`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                        >
                          {String(item.value).padStart(2, '0')}
                        </motion.span>
                        <span className="text-xs sm:text-sm text-gray-500 mt-1">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center"
                >
                  <Link
                    href="https://www.abroadeducares.com"
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-[#fea700] rounded-full hover:bg-orange-600 text-white"
                  >
                    <span className="relative">Register Now</span>
                    <motion.span
                      className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform rotate-12 translate-x-1 bg-white opacity-10 group-hover:-translate-x-40"
                      animate={{ x: [-100, 250] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}