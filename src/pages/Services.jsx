import React, { useState } from "react";
import {
  FaHandsHelping,
  FaHotel,
  FaMapMarkedAlt,
  FaPassport,
  FaPlane,
  FaShieldAlt,
  FaUserTie
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


import { BookOpen, Calendar, CheckCircle, ClipboardCheck, Clock, CreditCard, GraduationCap, Headphones, MessageSquare, Palmtree, PalmtreeIcon, PlaneTakeoff, ShieldCheck, Sparkles, Users } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router";

export default function Services() {
  const [tab, setTab] = useState("students");



  const features = [
    {
      title: "Visa Experts",
      description: "Experienced consultants specializing in tourist visa applications for Canada and USA.",
      icon: <FaUserTie size={24} />
    },
    {
      title: "Fast Processing",
      description: "Efficient application handling to ensure timely visa approval for your travel plans",
      icon: <TbWorld size={24} />
    },
    {
      title: "Personalized Service",
      description: "Individual attention and customized guidance for each traveler's unique situation",
      icon: <FaHandsHelping size={24} />
    },
    {
      title: "Real-time Analytics",
      description: "Gain deep insights into user behavior with our comprehensive dashboard and reporting tools.",
      tag: "Analytics",
      icon: <FaShieldAlt size={24} />
    },
  ];



  const studentSteps = [
    {
      id: 1,
      title: "Free Consultation",
      icon: <MessageSquare className="w-6 h-6" />,
      desc: "This initial step is where you meet with a consultant to discuss your academic background, career goals, and preferences (like destination, budget, and desired course of study). The consultant assesses your profile and provides a preliminary overview of suitable options and the overall application process.",
      activities: ["Academic background assessment", "Career goals discussion", "Destination preferences", "Budget planning", "Course selection guidance"],
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "University & Course Selection",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Identify and shortlist universities that align with your aspirations. We analyze program details and entry requirements thoroughly.",
      activities: ["Researching program entry requirements", "University ranking analysis", "Finalizing target institutions", "Standardized test guidance", "Course compatibility assessment"],
      img: "https://i.pinimg.com/736x/f2/ea/85/f2ea85c969aa9e1c7322d8e265c2674b.jpg"
    },
    {
      id: 3,
      title: "University Application Assistance",
      icon: <ClipboardCheck className="w-6 h-6" />,
      desc: "This is the core of the process, where we focus on creating a professional and strong submission package for target institutions.",
      activities: ["Document checklist preparation", "SOP & Essay review", "Application submission handling", "University communication follow-up", "Offer letter tracking"],
      img: "https://i.pinimg.com/1200x/ef/96/90/ef96906df775598abeb20f5a50c749aa.jpg"
    },
    {
      id: 4,
      title: "Visa Assistance",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "Once you have a confirmed offer, we focus on securing the necessary student visa to enter your destination country successfully.",
      activities: ["Document preparation guidance", "Visa application filing assistance", "Interview preparation coaching", "Application submission support", "Visa tracking and follow-up"],
      img: "https://i.pinimg.com/736x/d5/1d/a8/d51da88ce7e8c45eafd549fe387ddaaa.jpg"
    },
    {
      id: 5,
      title: "Pre-Departure Orientation",
      icon: <PlaneTakeoff className="w-6 h-6" />,
      desc: "The final step ensures you are fully prepared for your transition and arrival in your new home country.",
      activities: ["Travel arrangement advice", "Accommodation assistance", "Forex and insurance guidance", "Cultural orientation", "Arrival procedure information"],
      img: "https://i.pinimg.com/736x/ef/79/bb/ef79bbf1b5357c74f9d975b557c44de0.jpg"
    }
  ];

  const touristSteps = [
  {
    id: 1,
    title: "Travel Consultation",
    icon: <FaPassport className="w-6 h-6" />,
    desc: "Understand the tourist visa process and check your eligibility. Our consultants review your travel plan, purpose, and documentation needs.",
    activities: [
      "Visa eligibility assessment",
      "Travel purpose evaluation",
      "Destination guidance",
      "Timeline planning",
      "Process explanation",
    ],
    img: "https://avatars.mds.yandex.net/i?id=59ec31d9d54224b11dc30b7a6ad3103d_l-4219583-images-thumbs&ref=rim&n=13&w=3000&h=2025",
  },
  {
    id: 2,
    title: "Travel Itinerary & Documents",
    icon: <FaMapMarkedAlt className="w-6 h-6" />,
    desc: "We assist you in preparing and organizing all required documents along with a proper travel itinerary for your tourist visa application.",
    activities: [
      "Document checklist provision",
      "Financial document guidance",
      "Travel itinerary assistance",
      "Supporting document review",
      "Proper formatting and organization",
    ],
    img: "https://maritimebank.com/upload/medialibrary/1cd/vcugt6u9xwzyj2x91drdi0ty1qxyik7t/image3.jpg",
  },
  {
    id: 3,
    title: "Visa Application & Tickets",
    icon: <FaPlane className="w-6 h-6" />,
    desc: "Our team helps you complete visa application forms accurately and assists with ticket planning to ensure a smooth submission.",
    activities: [
      "Application form completion support",
      "Accuracy verification",
      "Online submission assistance",
      "Fee payment guidance",
      "Application tracking",
    ],
    img: "https://www.tuscanyservices.it/wp-content/uploads/2020/02/Agency-1536x1025.jpg",
  },
  {
    id: 4,
    title: "Hotel & Transport Support",
    icon: <FaHotel className="w-6 h-6" />,
    desc: "We provide complete guidance on accommodation, transportation, and arrival procedures to ensure a comfortable travel experience.",
    activities: [
      "Hotel booking guidance",
      "Airport pickup information",
      "Local transport advice",
      "Customs & immigration briefing",
      "Emergency contact assistance",
    ],
    img: "https://avatars.mds.yandex.net/get-ydo/11397567/2a0000018c9111d1645adea864201a316fb1/diploma",
  },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  

  return (
    <div className="w-full mt-10">

        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* ====================== HERO SECTION ====================== */}
      <motion.section
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  transition={{ duration: 0.8 }}
  className="relative w-full h-[500px] overflow-hidden"
>
  {/* Background */}
  <motion.div
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1523050335392-9bef867a0010?q=80&w=2070&auto=format&fit=crop")',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/100 to-[#002060]/50 mix-blend-multiply" />
  </motion.div>

  {/* Content */}
  <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
    <motion.div
      variants={fadeUp}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-6"
    >
      <Sparkles size={14} className="text-yellow-400" />
      <span>Trusted by 10,000+ Students Worldwide</span>
    </motion.div>

    <motion.h1
      variants={fadeUp}
      transition={{ delay: 0.35 }}
      className="text-4xl md:text-6xl font-extrabold text-white mb-6 cooper"
    >
      OUR <span className="text-blue-400">SERVICES</span>
    </motion.h1>

    <motion.p
      variants={fadeUp}
      transition={{ delay: 0.5 }}
      className="text-lg md:text-xl text-slate-200 max-w-2xl"
    >
      Your journey to international education made simple with our
      comprehensive process.
    </motion.p>
  </div>

  {/* 🌊 Bottom Wave */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg viewBox="0 0 1440 160" className="w-full h-[120px]" preserveAspectRatio="none">
  
  <path
    d="M0,80 C240,160 480,60 720,90 C960,120 1000,180 1540,100 L1440,160 L0,160 Z"
    fill="#f8fafc"
  />
</svg>
  </div>
</motion.section>


      {/* ====================== TAB BUTTONS ====================== */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-800 mb-2 cooper">
              SELECT YOUR <span className="text-blue-400">PURPOSE</span>
            </h2>
            <p className="text-slate-500">
              Select your purpose to see tailored services just for you
            </p>
          </div>

          <div className="p-1.5 bg-slate-200/50 rounded-2xl flex gap-2 shadow-inner">
            <button
              onClick={() => setTab("students")}
              className={`flex-1 py-4 rounded-xl font-bold transition ${
                tab === "students"
                  ? "bg-white text-[#002060] shadow-md"
                  : "text-slate-600"
              }`}
            >
              <GraduationCap className="inline mr-2" size={18} />
              For Students
            </button>

            <button
              onClick={() => setTab("tourists")}
              className={`flex-1 py-4 rounded-xl font-bold transition ${
                tab === "tourists"
                  ? "bg-white text-[#002060] shadow-md"
                  : "text-slate-600"
              }`}
            >
              <Palmtree className="inline mr-2" size={18} />
              For Tourists
            </button>
          </div>
        </motion.div>

        {/* ====================== TAB CONTENT ====================== */}
        <div className="mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {tab === "students" && (
              <motion.div
                key="students"
                variants={stagger}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-6 bg-white rounded-2xl border shadow-sm hover:shadow-xl transition"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap size={24} className="text-[#002060]" />
                    </div>
                    <h3 className="font-bold mb-2">University Admissions</h3>
                    <p className="text-slate-500 text-sm">
                      Complete assistance from course selection to final
                      enrollment.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {tab === "tourists" && (
              <motion.div
                key="tourists"
                variants={stagger}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-6 bg-white rounded-2xl border shadow-sm hover:shadow-xl transition"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <Palmtree size={24} className="text-[#002060]" />
                    </div>
                    <h3 className="font-bold mb-2">Visa Processing</h3>
                    <p className="text-slate-500 text-sm">
                      Hassle-free tourist and visit visa documentation.
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>

      {/* ====================== TITLE ====================== */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="text-center py-12 px-4"
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.15, duration: 0.6 }}
    className="text-3xl md:text-4xl font-extrabold text-[#002060] tracking-tight mb-4 cooper"
  >
    YOUR PATH TO{" "}
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 0.5 }}
      className="text-blue-600 inline-block"
    >
      INTERNATIONAL SUCCESS
    </motion.span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.45, duration: 0.5 }}
    className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base"
  >
    Our proven multi-step process ensures your best chance of achieving your dream.
  </motion.p>
</motion.div>

      <main>
  {tab === "students" && (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
      }}
      className="space-y-32"
    >
      {studentSteps.map((step, index) => (
        <motion.section
          key={step.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 group"
        >
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* ================= IMAGE SIDE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                scale: 0.95,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] transition-transform duration-500 group-hover:scale-105" />

              <img
                src={step.img}
                alt={step.title}
                className="relative z-10 w-full h-[400px] object-cover rounded-[2rem] shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Floating Step Number */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                className="absolute -top-8 -right-8 z-20 w-24 h-24 bg-white/80 backdrop-blur-md rounded-full border-4 border-slate-50 flex items-center justify-center shadow-xl"
              >
                <span className="text-4xl font-black text-[#002060]/20">
                  {step.id}
                </span>
              </motion.div>
            </motion.div>

            {/* ================= CONTENT SIDE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 60 : -60,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className={index % 2 !== 0 ? "lg:order-1" : ""}
            >
              {/* Step Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6"
              >
                <span className="p-1.5 bg-blue-600 text-white rounded-full">
                  {React.cloneElement(step.icon, { size: 14 })}
                </span>
                Step {step.id}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="text-4xl font-extrabold text-[#002060] mb-6 leading-tight cooper"
              >
                {step.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed font-light"
              >
                {step.desc}
              </motion.p>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <h4 className="font-bold text-[#002060] mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  Key Activities
                </h4>

                <motion.ul
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
                >
                  {step.activities.map((act, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      {act}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </motion.div>
  )}
</main>


     {/* ========================================================== */}
{/* ====================== TOURISTS SECTION ================== */}
{/* ========================================================== */}
{tab === "tourists" && (
  <motion.main
    initial="hidden"
    animate="visible"
    variants={{
      visible: { transition: { staggerChildren: 0.3 } },
    }}
    className="space-y-24"
  >
    {touristSteps.map((s, index) => {
      const reverse = index % 2 !== 0;

      return (
        <motion.section
          key={s.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* ================= IMAGE SIDE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: reverse ? 60 : -60,
                scale: 0.95,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative ${reverse ? "lg:order-2" : ""}`}
            >
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] transition-transform duration-500 group-hover:scale-105" />

              <img
                src={s.img}
                alt={s.title}
                className="relative z-10 w-full h-[400px] object-cover rounded-[2rem] shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Floating Step Number */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                className="absolute -top-8 -right-8 z-20 w-24 h-24 bg-white/80 backdrop-blur-md rounded-full border-4 border-slate-50 flex items-center justify-center shadow-xl"
              >
                <span className="text-4xl font-black text-[#002060]/20">
                  {s.id}
                </span>
              </motion.div>
            </motion.div>

            {/* ================= CONTENT SIDE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: reverse ? -60 : 60,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className={reverse ? "lg:order-1" : ""}
            >
              {/* Step Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6"
              >
                <span className="p-1.5 bg-blue-600 text-white rounded-full">
                  {React.cloneElement(s.icon, { size: 14 })}
                </span>
                Step {s.id}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="text-4xl font-extrabold text-[#002060] mb-4 cooper"
              >
                {s.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="text-slate-600 mb-6"
              >
                {s.desc}
              </motion.p>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <h4 className="font-bold text-[#002060] mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  Key Activities
                </h4>

                <motion.ul
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
                >
                  {s.activities.map((act, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      {act}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      );
    })}
  </motion.main>
)}









      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-slate-50 px-4 sm:px-6 lg:px-8 py-10 mt-8"
>
  <div className="max-w-7xl mx-auto">

    {/* ================= HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-sm font-semibold text-blue-600 tracking-wide uppercase"
      >
        Features
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl cooper"
      >
        Everything you need to scale
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto"
      >
        Powerful tools and features designed to help you build better software, faster.
      </motion.p>
    </motion.div>

    {/* ================= CARDS GRID ================= */}
    <motion.div
      variants={{
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 flex flex-col overflow-hidden"
        >
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-[#002060] group-hover:bg-[#002060] group-hover:text-white transition-colors duration-300"
          >
            {feature.icon}
          </motion.div>

          {/* Text */}
          <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-[#002060] transition-colors cooper">
            {feature.title}
          </h3>

          <p className="text-slate-600 text-xs leading-normal flex-grow">
            {feature.description}
          </p>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#002060] origin-left rounded-b-2xl"
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>






{/* CTA */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-slate-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 min-h-[400px]"
>
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full max-w-7xl overflow-hidden relative"
  >
    {/* Background Decorative Blobs */}
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 0.6, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="absolute top-0 -left-10 md:-left-20 w-40 h-40 md:w-72 md:h-72 rounded-full blur-3xl pointer-events-none"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 0.6, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute bottom-0 -right-10 md:-right-20 w-40 h-40 md:w-72 md:h-72 rounded-full blur-3xl pointer-events-none"
    />

    <motion.div
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative bg-[#002060] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-16 text-white overflow-hidden border"
    >
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight cooper"
        >
          Ready to Start{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
            Your Journey?
          </span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mb-8 leading-relaxed px-2"
        >
          Take the first step towards your international education dreams. Our
          expert counselors are here to guide you every step of the way.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative w-full sm:w-auto px-3 py-3.5 bg-white text-[#002060] font-bold rounded-xl transition-all duration-300 hover:bg-blue-50 flex items-center justify-center gap-2 shadow-lg shadow-white/5"
          >
            <Calendar
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            <Link to="/global-access">Book a Free Consultation</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>
</motion.div>


    </div>
  );
}
