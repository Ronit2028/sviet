"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, MapPin, Users, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HackathonPopup() {
  const [isIsteVisible, setIsIsteVisible] = useState(false)
  const [isteTimeLeft, setIsteTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const isteTimer = setTimeout(() => setIsIsteVisible(true), 2000)
    return () => {
      clearTimeout(isteTimer)
    }
  }, [])

  useEffect(() => {
    const isteTargetDate = new Date("2026-03-27T09:00:00").getTime()

    const updateCountdown = () => {
      const now = Date.now()
      const isteDifference = Math.max(isteTargetDate - now, 0)

      setIsteTimeLeft({
        days: Math.floor(isteDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((isteDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((isteDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((isteDifference % (1000 * 60)) / 1000),
      })

      return isteDifference
    }

    updateCountdown()

    const interval = setInterval(() => {
      const remaining = updateCountdown()
      if (remaining === 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isIsteVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)] md:w-[400px]"
        >
          <div className="relative bg-gradient-to-br from-[#1B9B7C] via-[#0F7A5C] to-[#0A5D47] rounded-2xl overflow-hidden shadow-2xl border border-[#1B9B7C]/20">
            {/* Subtle Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  backgroundImage: "radial-gradient(circle, #59b027 2px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          {/* Change main gradient to match color codes */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#015e7f] to-[#59b027] opacity-90" />

            {/* Close button */}
            <motion.button
              onClick={() => setIsIsteVisible(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-all z-20 bg-white/20 backdrop-blur-sm rounded-full p-1.5 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={16} />
            </motion.button>

            <div className="relative p-5 md:p-6 space-y-4">
              {/* Header */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3 gap-3">
                  {/* Logo space - use provided link */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <img src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZNDvh2KR0FJk7qfALO9bXtyBHPwUDp1Yg35ZE" alt="Logo" className="w-10 h-10 object-contain" />
                  </div>
                  <motion.div
                    className="w-12 h-12 bg-[#015e7f]/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-white mb-1">International Conference on AI & Pharmacy</h1>
                <p className="text-white/80 text-sm">🚀 Shape the Future of Pharmacy</p>
              </motion.div>

              {/* Event Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="bg-white/15 p-3 rounded-xl backdrop-blur-sm text-center">
                  <Calendar className="w-4 h-4 text-white mx-auto mb-1" />
                  <p className="text-white font-semibold text-sm">March 27, 2026</p>
                  <p className="text-white/70 text-xs">2 Days</p>
                </div>
                <div className="bg-white/15 p-3 rounded-xl backdrop-blur-sm text-center">
                  <MapPin className="w-4 h-4 text-white mx-auto mb-1" />
                  <p className="text-white font-semibold text-sm">SVIET</p>
                  <p className="text-white/70 text-xs">Chandigarh</p>
                </div>
              </motion.div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/15 p-3 rounded-xl backdrop-blur-sm"
              >
                <p className="text-center text-white/90 text-xs mb-2 font-semibold">⏰ EVENT STARTS IN</p>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: "Days", value: isteTimeLeft.days },
                    { label: "Hours", value: isteTimeLeft.hours },
                    { label: "Min", value: isteTimeLeft.minutes },
                    { label: "Sec", value: isteTimeLeft.seconds },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="bg-white/20 p-2 rounded-lg text-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                        delay: index * 0.1,
                      }}
                    >
                      <span className="text-base md:text-lg font-bold font-mono text-white block">
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="text-white/70 text-xs">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link
                  href="https://icaip.sviet.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-[#015e7f] px-4 py-2.5 rounded-full font-bold text-sm text-center hover:bg-[#59b027]/90 transition-all shadow-lg flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Visit Site
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
