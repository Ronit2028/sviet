"use client"


import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function page() {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PanelSection title="Panel of Experts" subtitle="Coming Soon" />
      <WhyJoinUsSection />
      <PanelSection title="Workshop Sessions" subtitle="Coming Soon" />
      <TestimonialsSection />
      <RegistrationSection />
      <ContactSection />
    </main>
  )
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B9B7C] via-[#0F7A5C] to-[#0A5D47]">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rotate-45"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Light Rays */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse" />
      </div>

      {/* Mouse Follower Light */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-radial from-white/20 to-transparent pointer-events-none"
        style={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto"
        style={{ y }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-3xl font-bold">ISTE</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ISTE Faculty Convention &<br />
          <span className="text-white/90">National Seminar</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 text-balance text-white/90 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Role of Technical Institutions under New National Education Policy
        </motion.p>

        <motion.div
          className="text-lg md:text-xl mb-10 space-y-3 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <span>7–8 June 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Parala Maharaja Engineering College, Odisha</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.button
            className="px-10 py-4 bg-white text-[#1B9B7C] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
          <motion.button
            className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#1B9B7C] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}

const StatsSection = () => {
  const stats = [
    { number: 128500, label: "Technical Teachers" },
    { number: 535000, label: "Student Members" },
    { number: 2740, label: "Institutions" },
    { number: 19, label: "State Sections" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1B9B7C_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ISTE by Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join India's largest community of technical educators and students
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  )
}

const StatItem = ({ number, label, delay }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          const duration = 2000
          const steps = 60
          const increment = number / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= number) {
              setCount(number)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [number, isVisible])

  return (
    <motion.div
      ref={ref}
      className="text-center relative"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
    >
      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1B9B7C]/20 to-transparent rounded-2xl blur-xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="text-4xl md:text-5xl font-bold text-[#1B9B7C] mb-2">{count.toLocaleString()}+</div>
        <div className="text-sm md:text-base text-gray-600 font-medium">{label}</div>
      </div>
    </motion.div>
  )
}

const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[#1B9B7C]/10 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border-2 border-[#1B9B7C]/20"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-[#1B9B7C] text-white rounded-full text-sm font-medium mb-4">
            ABOUT ISTE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Indian Society for Technical Education
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The leading national professional organization for educators and students in technical education, fostering
            innovation and excellence across India.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/placeholder-5rtul.png"
                alt="ISTE Conference"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B9B7C]/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Leading Organization",
                description:
                  "ISTE is India's premier professional society for technical education with over 535,000 members.",
                icon: "🏛️",
              },
              {
                title: "National Impact",
                description: "Connecting 2,740+ institutions across 19 state sections to advance technical education.",
                icon: "🌟",
              },
              {
                title: "Future Focus",
                description: "Exploring NEP-2020 implementation and the future of engineering education in India.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const PanelSection = ({ title, subtitle }) => {
  const isExpertPanel = title.includes("Experts")

  return (
    <section
      className={`py-20 relative overflow-hidden ${isExpertPanel ? "bg-gradient-to-br from-[#1B9B7C] to-[#0F7A5C]" : "bg-gradient-to-br from-purple-600 to-indigo-700"}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            {title}
          </motion.h2>

          <motion.div
            className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 40px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {subtitle}
          </motion.div>

          <motion.p
            className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {isExpertPanel
              ? "Distinguished speakers and industry leaders will share their insights on the future of technical education."
              : "Interactive workshops designed to enhance your teaching methodologies and research capabilities."}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

const WhyJoinUsSection = () => {
  const reasons = [
    {
      title: "Networking with leading academicians",
      description: "Connect with top educators and researchers from across India",
      icon: "🤝",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Present your research paper",
      description: "Showcase your innovative work to a distinguished audience",
      icon: "📊",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Gain ISTE recognition & awards",
      description: "Receive recognition for excellence in technical education",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Explore NEP-2020 opportunities",
      description: "Understand implementation strategies for the new education policy",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#1B9B7C]/5 via-transparent to-[#1B9B7C]/5"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of participating in India's premier technical education convention
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#1B9B7C] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>

                {/* Hover Effect Border */}
                <motion.div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1B9B7C]/30 rounded-2xl transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Professor, IIT Delhi",
      content:
        "ISTE conventions provide invaluable networking opportunities and insights into the latest educational trends.",
      image: "/placeholder-5rtul.png",
    },
    {
      name: "Prof. Priya Sharma",
      position: "Dean, NIT Kurukshetra",
      content: "The quality of research presentations and panel discussions at ISTE events is exceptional.",
      image: "/placeholder-5rtul.png",
    },
    {
      name: "Dr. Amit Patel",
      position: "Director, VJTI Mumbai",
      content: "ISTE has been instrumental in shaping my career in technical education and research.",
      image: "/placeholder-5rtul.png",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#1B9B7C]/5 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#1B9B7C]/10"
            style={{
              width: Math.random() * 40 + 20,
              height: Math.random() * 40 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Educators Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from distinguished faculty members about their ISTE experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#1B9B7C]">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#1B9B7C]/20 via-transparent to-[#1B9B7C]/20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              Have questions about the convention? We're here to help you with registration and event details.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B9B7C] rounded-full flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">convention@iste.org</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B9B7C] rounded-full flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+91-11-2337-9851</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1B9B7C] rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Venue</p>
                  <p className="text-gray-300">Parala Maharaja Engineering College, Odisha</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-[#1B9B7C]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-[#1B9B7C]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-[#1B9B7C] resize-none"
              />
              <motion.button
                type="submit"
                className="w-full p-4 bg-[#1B9B7C] text-white font-bold rounded-xl hover:bg-[#0F7A5C] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const RegistrationSection = () => {
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    nominatedTeacher: "",
    qualification: "",
    designation: "",
    department: "",
    instituteAddress: "",
    dateOfBirth: "",
    isteMembership: "",
    academicExperience: "",
    industryExperience: "",
    achievements: "",
    mobileNo: "",
    email: "",
    principalSignature: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setShowModal(true)
  }

  const registrationSteps = [
    "Form Submission",
    "Document Verification",
    "Principal Approval",
    "ISTE Review",
    "Confirmation Email",
  ]

  if (submitted && showModal) {
    return (
      <>
        {/* Modal Backdrop */}
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <motion.div
                className="w-20 h-20 bg-[#1B9B7C] rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-3xl text-white">✅</span>
              </motion.div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Registration Submitted!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Your ISTE Best Teacher Award nomination has been successfully submitted.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Next Steps:</h3>
              <div className="space-y-4">
                {registrationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-[#1B9B7C] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-[#1B9B7C]/10 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Important Information:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• You will receive a confirmation email within 24 hours</li>
                <li>• Document verification will be completed within 3-5 business days</li>
                <li>• Award ceremony will be held on October 25, 2024</li>
                <li>• Winners will be notified 1 week before the event</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <motion.button
                onClick={() => {
                  setSubmitted(false)
                  setShowModal(false)
                  setFormData({
                    nominatedTeacher: "",
                    qualification: "",
                    designation: "",
                    department: "",
                    instituteAddress: "",
                    dateOfBirth: "",
                    isteMembership: "",
                    academicExperience: "",
                    industryExperience: "",
                    achievements: "",
                    mobileNo: "",
                    email: "",
                    principalSignature: "",
                  })
                }}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Another
              </motion.button>
              <motion.button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 bg-[#1B9B7C] text-white font-semibold rounded-xl hover:bg-[#0F7A5C] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Background Section */}
        <section className="py-20 bg-[#1B9B7C] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg">Your registration has been processed successfully.</p>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-[#1B9B7C]/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ISTE Best Teacher Award - 2024</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nominate outstanding faculty members for recognition at the ISTE Faculty Convention
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto w-10/12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-[#1B9B7C] p-6 text-center">
              <h3 className="text-2xl font-bold text-white">Nomination Form</h3>
              <p className="text-white/90 mt-2">One nomination from each Chapter</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name of Nominated Teacher *</label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.nominatedTeacher}
                    onChange={(e) => setFormData({ ...formData, nominatedTeacher: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Designation *</label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ISTE Life Membership No.</label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    value={formData.isteMembership}
                    onChange={(e) => setFormData({ ...formData, isteMembership: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Academic Experience *</label>
                  <input
                    type="text"
                    placeholder="e.g., 4 yrs 6 months"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.academicExperience}
                    onChange={(e) => setFormData({ ...formData, academicExperience: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry Experience</label>
                  <input
                    type="text"
                    placeholder="e.g., 1 yr 0 months"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    value={formData.industryExperience}
                    onChange={(e) => setFormData({ ...formData, industryExperience: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile No. *</label>
                  <input
                    type="tel"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.mobileNo}
                    onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email ID *</label>
                  <input
                    type="email"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address of Institute where working *
                </label>
                <textarea
                  rows={3}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900 resize-none"
                  required
                  value={formData.instituteAddress}
                  onChange={(e) => setFormData({ ...formData, instituteAddress: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Salient Achievements in session 2023-24 *
                </label>
                <textarea
                  rows={4}
                  placeholder="Publications, Awards, Research work, Administrative roles, etc."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900 resize-none"
                  required
                  value={formData.achievements}
                  onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Principal's Recommendation *</label>
                <textarea
                  rows={3}
                  placeholder="Certificate of recommendation from Principal"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#1B9B7C] focus:outline-none transition-colors duration-300 bg-white text-gray-900 resize-none"
                  required
                  value={formData.principalSignature}
                  onChange={(e) => setFormData({ ...formData, principalSignature: e.target.value })}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full p-4 bg-[#1B9B7C] text-white font-bold text-lg rounded-xl hover:bg-[#0F7A5C] hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
              >
                Submit Nomination
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
