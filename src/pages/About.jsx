import {
  ArrowRight,
  Award,
  CheckCircle2,
  Flag,
  Globe,
  MapPin,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaBullseye,
  FaFlag,
  FaGlobe,
  FaHeart,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router";

// Sample data for the timeline
const timelineData = [
  {
    year: "2022",
    desc: "NSEC Global was founded with a clear vision to democratize access to international education. We launched as a fully virtual consultancy, delivering personalized counseling and expert guidance through digital platforms to aspiring students and travel seekers.",
  },
  {
    year: "2023",
    desc: "Within our first full year of operation, we successfully supported 100+ student placements across leading global education destinations, including the USA, Canada, and the UK. This milestone reinforced our commitment to ethical practices and student success.",
  },
  {
    year: "2024",
    desc: "To meet growing student demand, we expanded our service portfolio to include Australia and Sweden, broadening access to world-class academic opportunities and strengthening our international partnerships.",
  },
  {
    year: "2025",
    desc: "Marking a significant phase of growth, NSEC Global established its first physical office in Dhaka, Bangladesh. This expansion enhanced accessibility and enabled us to provide deeper, in-person support while continuing our strong digital services.",
  },
];




const values = [
  {
    icon: FaHeart,
    title: "Student-Centric Approach",
    desc: "Every decision we make is focused on what’s best for our studentsʼ future success and happiness.",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity & Transparency",
    desc: "We maintain the highest ethical standards and provide honest, transparent guidance throughout the process.",
  },
  {
    icon: FaStar,
    title: "Excellence in Service",
    desc: "We strive for excellence in every interaction, ensuring exceptional service quality and outcomes.",
  },
  {
    icon: FaGlobe,
    title: "Global Perspective",
    desc: "Our international experience and partnerships provide students with truly global opportunities.",
  },
];




// Motion variants for the grid items
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
  }),
};

// Hover animation
const hoverEffect = {
  scale: 1.05,
  y: -4,
  transition: { type: "spring", stiffness: 200 },
};



















const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
  }),
};

const hoverEffects = {
  scale: 1.05,
  rotate: 1,
  transition: { type: "spring", stiffness: 200 },
};

const About = () => {
  // Primary brand colors - UPDATED to standard Tailwind blue shades
  const primaryBlue = "#1E40AF"; // Deep, professional blue (Tailwind blue-700 equivalent)
  const accentBlue = "#60A5FA"; // Bright, energetic accent (Tailwind blue-400 equivalent)





   const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
  };











   // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, type: "spring", stiffness: 50 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
  };

  const hoverImage = { scale: 1.03, transition: { type: "spring", stiffness: 200 } };

  return (
    <div className="w-full mt-14">
      

      
      {/* Empowering Dreams */}


<section className="relative py-20 overflow-hidden bg-base-200">
  {/* Decorative Background Elements */}
  <motion.div
    className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  />
  <motion.div
    className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
  />

  <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* TEXT COLUMN */}
      <motion.div
        className="order-2 lg:order-1 space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="space-y-4 text-center lg:text-left">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-[#002060] text-sm font-bold tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            EST. 2022
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl text-[#002060] font-bold leading-tight cooper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empowering Dreams, <br />
            <span className="text-blue-600">Crossing Borders.</span>
          </motion.h2>
        </div>

        {/* Content Body */}
        <motion.div
          className="space-y-6 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            <span className="font-semibold text-[#002060]">NSEC Global</span> began as a vision to bridge the gap between ambition and achievement. Starting as a digital-first consultancy, we dedicated ourselves to providing personalized guidance to students worldwide.
          </p>
          <p>
            In 2025, we marked a major milestone by opening our headquarters in <span className="font-semibold text-[#002060]"> Dhaka</span>. This physical expansion allows us to offer face-to-face support while maintaining our global digital reach.
          </p>

          {/* Feature/Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            <motion.div className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
              <Globe className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-[#002060]">Global Reach</h4>
                <p className="text-sm text-gray-500">USA, UK, Canada, Sweden, Australia</p>
              </div>
            </motion.div>
            <motion.div className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }}>
              <Award className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-[#002060]">Expert Guidance</h4>
                <p className="text-sm text-gray-500">End-to-end visa & admission support</p>
              </div>
            </motion.div>
          </div>

          <motion.p className="italic text-gray-500 border-l-4 border-[#002060] pl-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }}>
            "We are committed to ethical practices, transparency, and delivering results. From consultation to settlement, we ensure a seamless experience."
          </motion.p>
        </motion.div>

        {/* CTA Area */}
        <motion.div className="pt-4 flex flex-col md:flex-row gap-6 items-center lg:justify-start justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} viewport={{ once: true }}>
          <button className="group relative px-8 py-4 bg-[#002060] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <Link to="/global-access" className="relative z-10 flex items-center gap-2">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            </Link>
            <div className="absolute inset-0 bg-[#0d4ac2] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <p className="text-[#002060] font-bold font-serif text-lg">Your future, our guidance.</p>
        </motion.div>
      </motion.div>

      {/* IMAGE COLUMN */}
      <motion.div className="order-1 lg:order-2 relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
          <motion.img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="NSEC Global Office Environment" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" whileHover={{ scale: 1.08 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/80 to-transparent opacity-60"></div>
        </div>

        {/* Floating Badges */}
        <motion.div className="absolute -top-6 -right-6 md:-right-10 bg-white p-4 rounded-xl shadow-xl hidden md:block border border-blue-50" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Success Rate</p>
              <p className="text-[#002060] font-bold text-lg">95% Approved</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute -bottom-6 -left-4 md:-left-10 bg-[#002060] text-white p-5 rounded-xl shadow-xl max-w-[200px] hidden md:block" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} viewport={{ once: true }}>
          <MapPin className="w-8 h-8 mb-2 text-blue-300" />
          <p className="text-sm leading-tight opacity-90">Now serving students from our new office in Dhaka.</p>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* MISSION & VISION */}
      <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div
            className="group relative bg-slate-50 rounded-2xl p-8 lg:p-12 hover:bg-[#002060] transition-colors duration-500 shadow-sm hover:shadow-2xl border border-slate-100 hover:border-blue-900 overflow-hidden"
            variants={cardVariants}
            custom={0}
            whileHover={hoverEffects}
          >
            {/* Background Decoration */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 rotate-3 group-hover:rotate-0"
                whileHover={{ rotate: 0 }}
              >
                <Flag className="w-8 h-8 text-[#002060] group-hover:text-white" />
              </motion.div>

              <motion.h3
                className="text-3xl font-bold text-[#002060] mb-4 font-serif group-hover:text-white transition-colors duration-300 flex items-center gap-3 cooper"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>Our Mission</span>
                <Sparkles className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.h3>

              <motion.p
                className="text-gray-600 leading-relaxed text-lg group-hover:text-blue-100 transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                To empower students to explore the world, chase their dreams,
                and unlock their full potential through expert guidance and
                personalized study abroad support.
              </motion.p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative bg-slate-50 rounded-2xl p-8 lg:p-12 hover:bg-[#002060] transition-colors duration-500 shadow-sm hover:shadow-2xl border border-slate-100 hover:border-blue-900 overflow-hidden"
            variants={cardVariants}
            custom={1}
            whileHover={hoverEffects}
          >
            {/* Background Decoration */}
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-all duration-300 -rotate-3 group-hover:rotate-0"
                whileHover={{ rotate: 0 }}
              >
                <Target className="w-8 h-8 text-[#002060] group-hover:text-white" />
              </motion.div>

              <div className="flex items-center gap-3 mb-4">
                <motion.h3
                  className="text-3xl font-bold text-[#002060] font-serif group-hover:text-white transition-colors duration-300 cooper"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Our Vision
                </motion.h3>
                <Sparkles className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.p
                className="text-gray-600 leading-relaxed text-lg group-hover:text-blue-100 transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                To be the ultimate launchpad for students’ global journeys,
                turning ambition into real-world opportunities and
                unforgettable experiences.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 from-transparent via-[#002060]/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002060] font-serif mb-6 cooper">
            OUR CORE VALUES
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            These fundamental principles guide everything we do and shape our
            commitment to student success.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 relative overflow-hidden"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
              whileHover={hoverEffect}
            >
              {/* Hover Accent Top */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002060] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />

              <motion.div
                className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002060] group-hover:text-white transition-colors duration-300"
                whileHover={{ rotate: 360 }}
              >
                <value.icon className="w-7 h-7 text-[#002060] group-hover:text-white transition-colors" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-[#002060] mb-3 cooper"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {value.title}
              </motion.h3>

              <motion.p
                className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {value.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* TEAM */}
      <section className="py-16 bg-base-100 px-4 md:px-20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-2 cooper text-[#002060]">
          MEET OUR FOUNDER
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          Founded on a vision of opportunity and excellence, our journey is
          guided by a leader who believes education can change lives.
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Text Content */}
        <motion.div className="space-y-8 text-center lg:text-left order-2 lg:order-1" variants={itemVariants}>
          <motion.h2
            className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-[#002060] leading-tight cooper"
            variants={itemVariants}
          >
            Founder’s Message
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-4 border-[#002060] pl-4 py-1"
            variants={itemVariants}
          >
            At NSEC Global, we believe that education is the foundation of a
            successful future. Our goal is to bridge the gap between ambition
            and achievement by guiding students at every step of their
            international education journey.
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 text-[#002060] text-base font-semibold shadow-md mx-auto lg:mx-0"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <Sparkles className="w-5 h-5 text-[#002060]" />
            <span>Mr. Md. Arafat Islam, Founder</span>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none order-1 lg:order-2"
          variants={itemVariants}
        >
          <motion.div
            className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl"
            whileHover={hoverImage}
          >
            <img
              src="https://i.ibb.co.com/v6HDnPh9/Gemini-Generated-Image-4ci8x64ci8x64ci8.png"
              alt="Founder's Office/Photo"
              className="w-full h-100 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x600/60a5fa/ffffff?text=Image+Unavailable";
              }}
            />
          </motion.div>

          {/* Animated Rating Badge */}
         <motion.div
  className="absolute -left-6 bottom-20 z-20 bg-[#002060] backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
  initial={{ y: 0, scale: 1 }}
  animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }} // vertical float + subtle scale
  transition={{
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  }}
>
  <div className="flex items-center gap-3">
    <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500">
      <Star size={20} fill="currentColor" />
    </div>
    <div>
      <p className="text-xs text-slate-400">Reviews</p>
      <p className="text-sm font-bold text-white">5 Star Rating</p>
    </div>
  </div>
</motion.div>

        </motion.div>
      </motion.div>
    </section>



      {/* JOURNEY TIMELINE */}
     <section className="py-20 bg-gray-50 px-4 md:px-20 font-sans">
      {/* Header Section */}
      <motion.h2
        className="text-4xl lg:text-5xl font-extrabold text-center mb-4 leading-tight tracking-tight cooper text-[#002060]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        OUR JOURNEY
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Key milestones that have shaped NSEC Global into the trusted education
        consultancy we are today—a history built on commitment and global
        expansion.
      </motion.p>

      {/* Timeline Container */}
      <motion.div
        className="relative max-w-5xl mx-auto px-4 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Central Vertical Line */}
        <div
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden sm:block"
          style={{
            background: `linear-gradient(to bottom, ${accentBlue}, ${primaryBlue})`,
          }}
        ></div>

        <div className="space-y-12 sm:space-y-16">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col sm:flex-row items-stretch w-full ${
                idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              variants={cardVariant}
            >
              {/* Content Block */}
              <motion.div className="sm:w-1/2 w-full p-2 sm:p-4" variants={cardVariant}>
                <motion.div
                  className="h-full shadow-xl dark:shadow-2xl rounded-2xl p-5 sm:p-6 lg:p-8 border-t-4 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-[#002060]">
                    {item.year}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">{item.desc}</p>
                </motion.div>
              </motion.div>

              {/* Timeline Dot */}
              <div className="w-full sm:w-10 relative flex justify-center items-center my-6 sm:my-0">
                <motion.div
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full absolute ring-4 ring-white dark:ring-gray-900 z-10 transition duration-300 ease-in-out hover:scale-125"
                  style={{ backgroundColor: primaryBlue }}
                  variants={dotVariants}
                ></motion.div>

                {/* Mobile connector */}
                <div className="h-0.5 w-full bg-gray-300 dark:bg-gray-700 sm:hidden"></div>
              </div>

              {/* Spacer */}
              <div className="sm:w-1/2 p-4 hidden sm:block"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default About;
