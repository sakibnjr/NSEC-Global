import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router";
import { useCallback, useEffect, useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const slides = [
    {
      id: 1,
      url: "https://i.ibb.co.com/wFtyzD5h/Education-2.png",
      tag: "Excellence",
      title: "Learn Without Borders",
    },
    {
      id: 2,
      url: "https://i.ibb.co.com/4nCzvWKv/Education-1-1.png",
      tag: "Success",
      title: "Collect Moments, Not Thingsad",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovering]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#f8faff] lg:-skew-x-12 lg:translate-x-1/4 z-0 opacity-50 lg:opacity-100" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 lg:gap-20">
          {/* Text Content Section */}
          <div className="w-full lg:w-[55%] text-center lg:text-left order-1">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#002060] text-xs md:text-sm font-bold tracking-wider mb-6 border border-blue-100/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#002060]"></span>
              </span>
              GLOBAL EDUCATION PARTNERS
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#002060] leading-[1.05] mb-6 cooper"
            >
              BUILDING <br />
              <span className="relative inline-block">FUTURES,</span> NOT JUST <span className="text-blue-600">Applications.</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Your trusted partner for international education. We guide
              ambitious students to achieve their dreams of studying abroad with
              personalized support and expert guidance.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link to="/global-access">
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-[#002060] text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-900/40 active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Slider Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[45%] order-2 relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative group max-w-[440px] lg:max-w-md mx-auto">
              {/* Background Glows */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl" />

              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,32,96,0.25)] border-[12px] border-white bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={slides[currentSlide].url}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/90 via-transparent to-transparent" />

                    {/* Content over image */}
                    <div className="absolute bottom-20 left-8 right-8">
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block px-3 py-1 bg-white text-[#002060] text-[10px] font-bold rounded-md mb-2 uppercase tracking-widest"
                      >
                        {slides[currentSlide].tag}
                      </motion.span>
                      <motion.h3
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-bold text-white"
                      >
                        {slides[currentSlide].title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controls Overlay */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-40">
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/40 hover:bg-white/60"
                          }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-[#002060] transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-[#002060] transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Success Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-4 z-50"
              >
                <div className="w-12 h-12 bg-[#002060] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Star className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <div className="text-sm font-black text-[#002060] whitespace-nowrap">
                    Top Rated Agency
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium">
                    1000+ Student Success
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
