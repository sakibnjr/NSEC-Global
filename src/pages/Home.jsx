import React, { useEffect, useRef, useState } from "react";
import Banner from "../Components/Banner";
import { motion } from "framer-motion";

import { FaUniversity, FaPassport, FaFileAlt, FaUserTie } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { ArrowRight, Award, Briefcase, Calendar, FileCheck, Globe, GraduationCap, Landmark, Phone, PlaneTakeoff, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router";





// / -------------------- Count Up Hook --------------------
function useCountUp(value, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const target =
      typeof value === "string"
        ? parseInt(value.replace(/\D/g, ""), 10)
        : value;

    if (isNaN(target)) return;

    let startTime;
    const duration = 2000; // 2 seconds animation

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, start]);

  const suffix = typeof value === "string" ? value.replace(/\d/g, "") : "";
  return count.toLocaleString() + suffix;
}

// -------------------- Stat Card --------------------
function StatCard({ icon, value, label, visible }) {
  const animated = useCountUp(value, visible);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-6 rounded-2xl bg-white border-1-gray  shadow-sm transition-all duration-700 relative overflow-hidden
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      ${isHovered ? "shadow-xl -translate-y-1" : ""}`}
    >
      <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl transition-colors duration-300 
        ${isHovered ? "bg-[#002060] text-white" : "bg-blue-50 text-[#002060]"}`}>
        {icon}
      </div>

      <h2 className="text-4xl font-extrabold text-[#002060] mb-1">
        {animated}
      </h2>

      <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
        {label}
      </p>

      {/* State-driven accent line */}
<div
  className={`absolute bottom-0 left-0 h-1 transition-all duration-500
    ${isHovered ? "w-full" : "w-0"}
    bg-gradient-to-r from-[#002060] via-blue-600 to-cyan-500  // ← gradient
  `}
/>    </div>
  );
}











const Home = () => {




 const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // FIX: renamed to impactStats (duplicate stats name issue)
  const impactStats = [
    { icon: <Users />, value: "5000+", label: "Counselled" },
    { icon: <Briefcase />, value: "2500+", label: "Served" },
    { icon: <Globe />, value: "1000+", label: "Success" },
    { icon: <Award />, value: "4+", label: "Years Exp." },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);




  const destinations = [
    {
      name: "Canada",
      universities: "100+",
      programs: "400+",
      button: "Explore Programs",
      img: "https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/university_of_toronto_1_1.jpg?itok=9fNp3VSb",
    },
    {
      name: "United Kingdom",
      universities: "140+",
      programs: "80+",
      button: "Explore Programs",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Great_Court%2C_Trinity_College%2C_Cambridge_-_geograph.org.uk_-_765813.jpg",
    },
    {
      name: "United States",
      universities: "200+",
      programs: "600+",
      button: "Explore Programs",
      img: "https://www.smc.edu/student-support/academic-support/transfer-center/articulation-agreements/private-california-universities/images/United-States-University.jpg",
    },
    {
      name: "Australia",
      universities: "25+",
      programs: "200+",
      button: "Explore Programs",
      img: "https://student-cms.prd.timeshighereducation.com/sites/default/files/sydney_0.jpg",
    },
    {
      name: "Sweden",
      universities: "20+",
      programs: "100+",
      button: "Explore Programs",
      img: "https://cms.studyinsweden.se//app/uploads/2013/10/KTH-Borgg%C3%A5rden_Jann-Lipka-870x579-1.jpg",
    },
  ];

  // Stats data from your snippet
  const Stats = [
    { label: "Counselled", value: "5000+", icon: <Users className="w-5 h-5" /> },
    { label: "Served", value: "2500+", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Success", value: "1000+", icon: <Award className="w-5 h-5" /> },
    { label: "Years Exp.", value: "4+", icon: <Calendar className="w-5 h-5" /> },
  ];


    const features = [
    {
      title: "University Selection & Application Assistance",
      description: "Expert guidance to choose the perfect university that matches your academic goals and career aspirations.",
      icon: <Landmark  className="w-6 h-6" />,
      tag: "Academic"
    },
    {
      title: "Document Preparation",
      description: "Professional assistance with all required documents, ensuring accuracy, compliance, and rapid processing.",
      icon: <FileCheck className="w-6 h-6" />,
      tag: "Process"
    },
    {
      title: "Visa Assistance",
      description: "Complete visa application support with expert guidance through the complex legalities of international travel.",
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: "Legal"
    },
    {
      title: "Pre-Departure & Arrival Support",
      description: "Comprehensive support ensuring you are fully prepared for your transition and arrival in your new country.",
      icon: <PlaneTakeoff className="w-6 h-6" />,
      tag: "Logistics"
    }
  ];






  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};








  return (
    <div className="bg-white md:mt-10 mt-10">
      <Banner></Banner>

       <section ref={ref} className="py-24 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#002060] uppercase mb-2">
              Our Impact
            </h3>
            <div className="h-1 w-12 bg-[#002060] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((s, i) => (
              <StatCard
                key={i}
                icon={s.icon}
                value={s.value}
                label={s.label}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </section>





      {/* Why Choose NSEC Global */}
      <motion.div
  className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4 sm:px-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  {/* Background Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent -z-10" />

  <div className="max-w-7xl mx-auto w-full">
    {/* Header Section */}
    <motion.div
      className="text-center mb-12 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block py-1 px-3 mb-3 text-xs font-semibold tracking-widest text-[#002060] uppercase bg-blue-100 rounded-full">
        Our Excellence
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] tracking-tight mb-4 cooper">
        Why Choose <span className="text-blue-600">NSEC Global?</span>
      </h2>

      <div className="w-16 h-1 bg-[#002060] mx-auto rounded-full mb-6"></div>

      <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        We provide comprehensive support throughout your international education journey.
      </p>
    </motion.div>

    {/* Cards Grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ y: -6, scale: 1.02 }}
          className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 flex flex-col h-full overflow-hidden "
        >
          {/* Icon Container */}
          <motion.div
            whileHover={{ rotate: 8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-[#002060] group-hover:bg-[#002060] group-hover:text-white transition-colors duration-300"
          >
            {feature.icon}
          </motion.div>

          {/* Tag */}
          <div className="mb-2">
            <span className="text-[9px] uppercase tracking-wider font-bold text-blue-500 bg-blue-50 py-0.5 px-1.5 rounded">
              {feature.tag}
            </span>
          </div>

          {/* Text Content */}
          <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-[#002060] transition-colors cooper">
            {feature.title}
          </h3>

          <p className="text-slate-600 text-xs leading-normal flex-grow">
            {feature.description}
          </p>

          {/* Decorative Accent */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#002060] origin-left rounded-b-2xl"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.div>



      {/* POPULAR STUDY DESTINATIONS */}

<div>
  <section className="py-16 px-6 bg-base-100">
    {/* Header */}
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-[#002060] cooper">
        POPULAR STUDY <span className="text-blue-600">DESTINATIONS</span>
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        Explore world-class education opportunities in top destinations
        with our expert guidance and support.
      </p>
    </motion.div>

    {/* Grid of Cards */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {destinations.map((item, index) => (
        <motion.div
          key={index}
          className="card bg-base-200 shadow-md hover:shadow-xl transition-all"
          variants={{
            hidden: { opacity: 0, rotateX: 25, y: 60 },
            visible: { opacity: 1, rotateX: 0, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <figure className="overflow-hidden">
            <motion.img
              src={item.img}
              alt={item.name}
              className="h-40 w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </figure>

          <div className="card-body">
            <h2 className="text-lg font-bold cooper text-[#002060]">{item.name}</h2>

            <div className="text-xs text-gray-600 flex md:flex-1 gap-3">
              <p>
                <span>{item.universities}</span>
                <span>Universities</span>
              </p>
              <p>
                <span>{item.programs}</span>
                <span>Programs</span>
              </p>
            </div>

            <div className="card-actions mt-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="btn border-2 border-[#002060] text-[#002060] hover:bg-[#002060] hover:text-white w-full"
              >
                {item.button}
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
</div>




      

      {/* Footer Button */}

<div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-[400px]">
  <section className="w-full max-w-7xl overflow-hidden relative">
    {/* Background Decorative Elements */}
    <motion.div
      className="absolute top-0 -left-10 md:-left-20 w-40 h-40 md:w-72 md:h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    />
    <motion.div
      className="absolute bottom-0 -right-10 md:-right-20 w-40 h-40 md:w-72 md:h-72 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    />

    <motion.div
      className="relative bg-[#002060] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-16 text-white shadow-2xl overflow-hidden border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight cooper"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Your Journey?</span>
        </motion.h2>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mb-8 leading-relaxed px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take the first step towards your international education dreams. Our expert counselors are here to guide you every step of the way.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Primary Action */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto px-3 py-3.5 bg-white text-[#002060] font-bold rounded-xl transition-all duration-300 hover:bg-blue-50 flex items-center justify-center gap-2 shadow-lg shadow-white/5"
          >
            <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
            <Link to="/global-access">Book a Free Consultation</Link>
          </motion.button>

          {/* Secondary Action */}
          <motion.a
            href="tel:01805021560"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-3.5 bg-white/5 border border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2"
          >
            <Phone size={18} className="text-blue-300" />
            <span>01805021560</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
</div>
    </div>
  );
};

export default Home;
