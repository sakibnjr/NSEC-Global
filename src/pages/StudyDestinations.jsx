import { motion } from "framer-motion";
import { ArrowRight, Calendar, CalendarIcon, ChevronDown, Compass, GraduationCap, Info, LocationEditIcon, MapPin, Palmtree, PieChart, Sparkles, Star, User } from "lucide-react";
import { useState } from "react";
import {
  FaBookOpen,
  FaBus,
  FaGlobe,
  FaHome,
  FaHospital,
  FaLightbulb,
  FaShieldAlt,
  FaShoppingCart,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from "react-router";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};





export default function StudyDestinations() {
  const [tab, setTab] = useState("students");
  const [activeStudent, setActiveStudent] = useState("UK");
  const [activeTourist, setActiveTourist] = useState("USA");

  // Top Destinations in United States
  const touristLandmarks = {
    USA: [
      {
        name: "New York City",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["Statue of Liberty", "Times Square", "Central Park", "Empire State Building"],
      },
      {
        name: "Los Angeles",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["Hollywood", "Santa Monica Beach", "Universal Studios", "Getty Center"],
      },
      {
        name: "Las Vegas",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["The Strip", "Grand Canyon Tours", "Shows & Entertainment", "Casinos"],
      },
      {
        name: "San Francisco",
        bestSeason: "Best Season: Year-round",
        description: "Top Highlights:",
        place: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf", "Cable Cars"],
      },
      {
        name: "Miami",
        bestSeason: "Best Season: Nov-Apr",
        description: "Top Highlights:",
        place: ["South Beach", "Art Deco District", "Everglades", "Little Havana"],
      },
      {
        name: "Orlando",
        bestSeason: "Best Season: Year-round",
        description: "Top Highlights:",
        place: ["Disney World", "Universal Studios", "SeaWorld", "Kennedy Space Center"],
      },
      {
        name: "Grand Canyon",
        bestSeason: "Best Season: Mar-Oct",
        description: "Top Highlights:",
        place: ["South Rim", "Hiking Trails", "Helicopter Tours", "Sunrise Views"],
      },
      {
        name: "Yellowstone",
        bestSeason: "Best Season: May-Sep",
        description: "Top Highlights:",
        place: ["Old Faithful", "Wildlife Viewing", "Hot Springs", "Hiking"],
      },
    ],
    Canada: [
      {
        name: "Banff & Jasper",
        bestSeason: "Best Season: Jun-Sep",
        description:
          "Top Highlights:",
        place: ["Lake Louise", "Rocky Mountains", "Hot Springs", "Wildlife Tours"],
      },
      {
        name: "Toronto",
        bestSeason: "Best Season: Year-round",
        description:
          "Top Highlights:",
        place: ["CN Tower", "Niagara Falls", "Royal Ontario Museum", "Distillery District"],
      },
      {
        name: "Vancouver",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Stanley Park", "Capilano Bridge", "Granville Island", "Grouse Mountain"],
      },
      {
        name: "Montreal",
        bestSeason: "Best Season:  May-Oct",
        description:
          "Top Highlights:",
        place: ["Old Montreal", "Notre-Dame Basilica", "Mount Royal", "Festivals"],
      },
      {
        name: "Quebec City",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Old Quebec", "Château Frontenac", "Montmorency Falls", "Winter Carnival"],
      },
      {
        name: "Victoria",
        bestSeason: "Best Season:  Apr-Oct",
        description:
          "Top Highlights:",
        place: ["Butchart Gardens", "Inner Harbour", "Whale Watching", "Parliament Buildings"],
      },
      {
        name: "Whistler",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Skiing & Snowboarding", "Peak 2 Peak Gondola", "Mountain Biking", "Village"],
      },
      {
        name: "Ottawa",
        bestSeason: "Best Season:  Year-round",
        description:
          "Top Highlights:",
        place: ["Parliament Hill", "Rideau Canal", "Museums", "Tulip Festival"],
      },
      
      
    ],
  };

  const currentTouristLandmarks = touristLandmarks[activeTourist] || [];

  const costData = {
    USA: {
      currency: "$",
      items: [
        {
          title: "Accommodation",
          price: "USD 500-1,500/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "USD 250-400/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "USD 50-150/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "USD 100-200/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "USD 100-200/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "USD 1,000-2,450/month",
    },
    UK: {
      currency: "£",
      items: [
        {
          title: "Accommodation",
          price: "£400-800/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "£150-250/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "£50-100/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "£40-80/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "£50-100/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "£690-1,330/month",
    },
    Canada: {
      currency: "CAD$",
      items: [
        {
          title: "Accommodation",
          price: "CAD 400-800/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "CAD 200-400/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "CAD 80-120/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "CAD 50-100/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "CAD 100-150/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "CAD 830-1,570/month",
    },
    Australia: {
      currency: "A$",
      items: [
        {
          title: "Accommodation",
          price: "AUD 500-1,000/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "AUD 300-500/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "AUD 100-150/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "AUD 80-150/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "AUD 100-200/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "AUD 1,080-2,000/month",
    },
    Sweden: {
      currency: "SEK",
      items: [
        {
          title: "Accommodation",
          price: "SEK 3,000-6,000/month",
          icon: <FaHome className="text-2xl text-[#002060]" />,
        },
        {
          title: "Food & Groceries",
          price: "SEK 2000-3000/month",
          icon: <ImSpoonKnife className="text-2xl text-[#002060]" />,
        },
        {
          title: "Transportation",
          price: "SEK 600-800/month",
          icon: <FaBus className="text-2xl text-[#002060]" />,
        },
        {
          title: "Utilities",
          price: "SEK 300-500/month",
          icon: <FaLightbulb className="text-2xl text-[#002060]" />,
        },
        {
          title: "Entertainment",
          price: "SEK 500-1,000/month",
          icon: <GoVideo className="text-2xl text-[#002060]" />,
        },
      ],
      total: "SEK 6,400-11,300/month",
    },
  };

  const countriesData = {
    USA: [
      {
        title: "Accommodation",
        desc: "Variety of housing options from dorms to apartments, with modern facilities and amenities.",
        icon: <FaHome className="text-2xl [#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Campus shuttles, public transit in cities, and car-friendly infrastructure.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Comprehensive student health insurance, quality medical facilities on and off campus.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Wide variety of stores, restaurants, and international food options at all price points.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "Campus security services, safe neighborhoods, and emergency support systems.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Diverse cultural experiences, entertainment options, and vibrant student life.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    UK: [
      {
        title: "Accommodation",
        desc: "Modern student housing with excellent facilities, both on-campus and off-campus options available",
        icon: <FaHome className="text-2xl [#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Comprehensive public transport network including buses, trains, and underground systems",
        icon: <FaBus className="text-2xl [#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Free NHS healthcare for international students, world-class medical facilities",
        icon: <FaHospital className="text-2xl [#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Diverse shopping centers, international cuisine, and vibrant food culture.",
        icon: <FaShoppingCart className="text-2xl [#002060]" />,
      },
      {
        title: "Safety",
        desc: "Safe and secure environment with low crime rates and student support services.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Rich cultural heritage, museums, theaters, and diverse international communities.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    Canada: [
      {
        title: "Accommodation",
        desc: "Comfortable student residences and apartments with modern amenities and heating systems.",
        icon: <FaHome className="text-2xl text-[#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Efficient public transit systems, bike-friendly cities, and student discounts available.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Provincial health insurance coverage, quality medical facilities and student health services.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Affordable grocery stores, diverse restaurants, and international food markets.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "One of the safest countries globally with friendly communities and low crime rates.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Bilingual environment, multicultural festivals, and welcoming immigrant communities.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    Australia: [
      {
        title: "Accommodation",
        desc: "Modern student housing, shared apartments, and homestay options with good facilities.",
        icon: <FaHome className="text-2xl text-[#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Reliable public transport, student concession cards, and bike-friendly infrastructure.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Overseas Student Health Cover (OSHC), quality medical services and facilities.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Diverse shopping options, multicultural food scene, and fresh local produce.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "Safe and welcoming environment with strong student support and protection laws.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Laid-back lifestyle, outdoor activities, and vibrant multicultural communities.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
    Sweden: [
      {
        title: "Accommodation",
        desc: "Well-insulated student housing, modern facilities with excellent heating and amenities.",
        icon: <FaHome className="text-2xl text-[#002060]" />,
      },
      {
        title: "Transportation",
        desc: "Excellent public transport, bike-friendly cities, and student travel discounts.",
        icon: <FaBus className="text-2xl text-[#002060]" />,
      },
      {
        title: "Healthcare",
        desc: "Universal healthcare system, subsidized medical care for students and residents.",
        icon: <FaHospital className="text-2xl text-[#002060]" />,
      },
      {
        title: "Shopping & Dining",
        desc: "Quality grocery stores, Swedish and international cuisine, sustainable food options.",
        icon: <FaShoppingCart className="text-2xl text-[#002060]" />,
      },
      {
        title: "Safety",
        desc: "Extremely safe country with low crime rates and strong social support systems.",
        icon: <FaShieldAlt className="text-2xl text-[#002060]" />,
      },
      {
        title: "Culture",
        desc: "Progressive society, English-speaking environment, and rich cultural traditions.",
        icon: <FaGlobe className="text-2xl text-[#002060]" />,
      },
    ],
  };

  const destinations = {
    UK: {
      title: "United Kingdom",
      description:
        "The UK offers world-renowned universities with rich academic traditions.",
      overview:
        "The United Kingdom (UK) is a country in northwestern Europe, made up of England, Scotland, Wales, and Northern Ireland. It has a rich history, vibrant culture, and diverse landscapes ranging from bustling cities like London to scenic areas such as the Scottish Highlands and Welsh mountains. The UK is a constitutional monarchy with a parliamentary system, and its economy is one of the largest in the world, driven by finance, technology, and services. Renowned for its prestigious universities like Oxford and Cambridge, the UK attracts students from around the globe. It is also famous for its contributions to literature, music, and sports, making it a popular destination for both education and tourism.",
      stats: [
        { value: "140+", label: "Universities", icon: <FaUniversity /> },
        { value: "80+", label: "Programs", icon: <FaBookOpen /> },
        { value: "100+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/736x/43/d9/25/43d925ce787ec1b4d17c307254e88770.jpg",
    },
    Canada: {
      title: "Canada",
      description:
        "Canada offers high-quality education and a multicultural environment.",
      overview:
        "Canada is the second-largest country in the world, located in North America, and is known for its vast landscapes, including mountains, forests, and lakes. It is a multicultural and bilingual nation, with English and French as its official languages. Canada has a parliamentary democracy and a constitutional monarchy, with Ottawa as its capital. The country has a strong and diverse economy, driven by natural resources, technology, and services. Canada is also renowned for its high-quality education system, welcoming environment for international students, and vibrant cities like Toronto, Vancouver, and Montreal, making it a popular destination for both living and studying.",
      stats: [
        { value: "100+", label: "Universities", icon: <FaUniversity /> },
        { value: "400+", label: "Programs", icon: <FaBookOpen /> },
        { value: "200+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/736x/c7/bd/a9/c7bda92b2d74c51ed5b18ee8b6a3d489.jpg",
    },
    USA: {
      title: "United States",
      description: "The USA is home to world-leading universities.",
      overview:
        "The United States of America (USA) is a large and diverse country located in North America, consisting of 50 states and a federal district, Washington, D.C., which is the capital. It is known for its economic and technological power, cultural influence, and diverse landscapes ranging from bustling cities like New York and Los Angeles to natural wonders such as the Grand Canyon and Yellowstone. The USA is a federal republic with a democratic system, led by an elected president. It has a highly developed economy, world-class universities, and a rich cultural heritage in music, film, literature, and sports, making it a top destination for education, business, and tourism.",
      stats: [
        { value: "200+", label: "Universities", icon: <FaUniversity /> },
        { value: "100+", label: "Programs", icon: <FaBookOpen /> },
        { value: "300+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/736x/22/43/a5/2243a53dd1297587b8b34dc9180f5a8c.jpg",
    },
    Sweden: {
      title: "Sweden",
      description:
        "Sweden offers innovation-driven education and top-tier opportunities.",
      overview:
        "Sweden is a Nordic country in Northern Europe, known for its stunning natural landscapes, including forests, lakes, and the northern lights. Its capital, Stockholm, is a vibrant city blending modern innovation with historical charm. Sweden is a constitutional monarchy with a parliamentary democracy and is recognized for its high standard of living, strong social welfare system, and commitment to sustainability. The country has a highly developed economy driven by technology, manufacturing, and services, and is home to world-class universities that attract international students. Sweden is also famous for its rich cultural heritage, design, music, and progressive society, making it an appealing destination for both study and travel.",
      stats: [
        { value: "20+", label: "Universities", icon: <FaUniversity /> },
        { value: "100+", label: "Programs", icon: <FaBookOpen /> },
        { value: "100+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/1200x/ae/af/96/aeaf963a8f7614dcb25f4cfe90ce269d.jpg",
    },
    Australia: {
      title: "Australia",
      description:
        "Australia features highly ranked universities and a vibrant lifestyle.",
      overview:
        "Australia is a vast country and continent located in the Southern Hemisphere, known for its unique wildlife, natural wonders like the Great Barrier Reef and Uluru, and diverse landscapes ranging from deserts to lush forests. Its capital is Canberra, while Sydney and Melbourne are major cultural and economic hubs. Australia is a constitutional monarchy with a parliamentary democracy and has a highly developed economy driven by mining, agriculture, services, and technology. The country is renowned for its high-quality education system, welcoming international students, and vibrant multicultural society. With a rich cultural heritage, outdoor lifestyle, and iconic landmarks, Australia is a popular destination for study, work, and tourism.",
      stats: [
        { value: "25+", label: "Universities", icon: <FaUniversity /> },
        { value: "200+", label: "Programs", icon: <FaBookOpen /> },
        { value: "200+", label: "Students", icon: <FaUserGraduate /> },
      ],
      image:
        "https://i.pinimg.com/1200x/75/72/fb/7572fb25de3bc9d3b8c93922e796064a.jpg",
    },
  };

  const touristData = {
    USA: {
      title: "United States",
      description:
        "Explore diverse landscapes, vibrant cities, and world-class attractions across America.",
      stats: [
        { value: "50+", label: "Destinations", icon: <Calendar size={18} /> },
        { value: "1000+", label: "Attractions", icon: <User size={18} /> },
        { value: "80M+/year", label: "Visitors", icon: <Star size={18} /> },
      ],
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      
    },
    Canada: {
      title: "Canada",
      description:
        "Experience Canada’s natural wonders — from the Rocky Mountains to Toronto’s urban lifestyle.",
      stats: [
        { value: "40+", label: "Destinations", icon: <Calendar size={18} /> },
        { value: "800+", label: "Attractions", icon: <User size={18} /> },
        { value: "22M+/year", label: "Visitors", icon: <Star size={18} /> },
      ],
      image: "https://i.ibb.co.com/RmZwkGf/SS-Canada-1200-px-2.jpg",
    },
  };


  
  



  return (
    <div className="w-full">
     {/* HERO SECTION */}
<motion.div className="bg-slate-50 font-sans">
  <motion.section
    initial="hidden"
    animate="visible"
    className="relative w-full h-[80vh] mt-1 overflow-hidden"
  >
    {/* ================= BACKGROUND ================= */}
    <motion.div
      initial={{ scale: 1.15 }}
      animate={{ scale: 1.05 }}
      transition={{ duration: 8, ease: "easeOut" }}
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-slate-900/90" />
    </motion.div>

    {/* ================= CONTENT ================= */}
    <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tighter"
      >
        DESTINATIONS
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="block text-transparent bg-clip-text bg-blue-500 text-3xl sm:text-5xl md:text-6xl mt-2 italic font-serif"
        >
          Beyond Borders
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.7 }}
        className="max-w-xl text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light"
      >
        Embark on a transformative journey. Discover world-class education
        opportunities in the most prestigious academic hubs across the globe.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest font-medium">
          Scroll to Discover
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/60 w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
</motion.div>


      {/* MAIN NAVIGATION TOGGLE - MODERN PILL DESIGN */}
<div className="flex justify-center m-10">
  <div className="relative bg-white/80 backdrop-blur-md p-1.5 rounded-2xl flex items-center shadow-md shadow-blue-900 border border-slate-200">
    
    {/* ================= ANIMATED SLIDER HIGHLIGHT ================= */}
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute top-1.5 bottom-1.5 bg-[#002060] rounded-xl shadow-lg shadow-blue-900/20"
      style={{
        width: 'calc(50% - 6px)',
        left: tab === 'students' ? '6px' : 'calc(50%)'
      }}
    />

    {/* ================= STUDENTS BUTTON ================= */}
    <motion.button
      onClick={() => setTab("students")}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative z-10 flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-colors duration-300 w-40 sm:w-48 ${
        tab === "students" ? "text-white" : "text-slate-500 hover:text-slate-800"
      }`}
    >
      <GraduationCap size={20} />
      <span className="text-sm sm:text-base tracking-tight">For Students</span>
    </motion.button>

    {/* ================= TOURISTS BUTTON ================= */}
    <motion.button
      onClick={() => setTab("tourists")}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={`relative z-10 flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-colors duration-300 w-40 sm:w-48 ${
        tab === "tourists" ? "text-white" : "text-slate-500 hover:text-slate-800"
      }`}
    >
      <Palmtree size={20} />
      <span className="text-sm sm:text-base tracking-tight">For Tourists</span>
    </motion.button>

  </div>
</div>


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {tab === "tourists" && (
  <div>
    {/* Modern Pill Container */}
    <div className="bg-white/80 backdrop-blur-md py-1.5 rounded-2xl shadow-md shadow-blue-900 flex justify-center mb-12 border border-slate-100 max-w-50 mx-auto">
      {Object.keys(touristData).map((c) => {
        const isActive = activeTourist === c;
        return (
          <button
            key={c}
            onClick={() => setActiveTourist(c)}
            className={`relative px-6 py-2.5 rounded-xl font-medium text-md transition-all duration-300 outline-none
              ${isActive ? "text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-[#002060] rounded-xl shadow-lg shadow-[#002060]/20"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {c}
            </span>
          </button>
        );
      })}
    </div>

    {/* Card */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-stretch bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,32,96,0.08)] border border-slate-100 mb-20"
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 p-4 md:p-6 bg-slate-50/50">
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-[1.75rem] shadow-inner">
          <img
            src={touristData[activeTourist].image}
            alt={activeTourist}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <MapPin size={16} className="text-[#002060]" />
            <span className="text-xs font-bold text-[#002060] uppercase tracking-wider">{activeTourist}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#002060] tracking-tight leading-tight cooper">
          Visit <span className="text-blue-600">{touristData[activeTourist].title}</span>
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {touristData[activeTourist].description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8">
          {touristData[activeTourist].stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-start p-3 sm:p-4 lg:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#002060]/30 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-500"
            >
              <div className="text-blue-600 mb-2 sm:mb-3 bg-blue-50 p-2 sm:p-2.5 rounded-xl group-hover:bg-[#002060] group-hover:text-white transition-all duration-300">
                {s.icon || <Compass size={18} />}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-black text-[#002060] leading-none mb-1">{s.value}</h3>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-[#002060] rounded-xl focus:outline-none shadow-xl hover:shadow-[#002060]/30 w-full md:w-auto overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Link to="/global-access">Plan Your Trip</Link>
            
            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#002060] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>
    </motion.div>

    {/* Landmarks */}
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Discovery</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#002060] mb-4 tracking-tight cooper">
            Top Places in <span className="text-blue-600">{activeTourist}</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentTouristLandmarks.map((d, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl p-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,32,96,0.12)] overflow-hidden border border-gray-300 hover:border-blue-100"
            >
              <div className="p-6 sm:p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-[#002060] transition-colors duration-300">
                    <LocationEditIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-gray-500">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{d.bestSeason}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#002060] mb-3 transition-colors duration-300 cooper">{d.name}</h3>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-gray-500 text-base leading-relaxed flex-wrap">{d.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.place.map((p, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 font-semibold px-2 py-1 rounded-lg text-xs">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

        {/* STUDENTS */}
{tab === "students" && (
  <div className="">
    {/* Country Tabs – Modern Pill Style */}
    <div className="bg-white/80 backdrop-blur-md py-1.5 rounded-2xl shadow-md shadow-blue-900 flex flex-wrap justify-center mb-12 border border-slate-100 max-w-125 mx-auto">
      {Object.keys(destinations).map((c) => {
        const isActive = activeStudent === c;
        return (
          <button
            key={c}
            onClick={() => setActiveStudent(c)}
            className={`relative px-6 py-2.5 rounded-xl font-medium text-md transition-all duration-300 outline-none
              ${isActive ? "text-white" : "text-[#002060] hover:text-[#002060] hover:bg-slate-50"}`}
          >
            {isActive && (
              <motion.div
                layoutId="active-student-pill"
                className="absolute inset-0 bg-[#002060] rounded-xl shadow-lg shadow-[#002060]/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">{c}</span>
          </button>
        );
      })}
    </div>

    {/* Main Visual + Content Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screenp-4 flex items-center justify-center font-sans mb-10"
    >
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="flex flex-col lg:flex-row p-6 md:p-10 gap-10">
          
          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-[45%] group"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#002060] to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={destinations[activeStudent].image}
                alt={destinations[activeStudent].title}
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-white/50">
                <Sparkles className="w-4 h-4 text-[#002060]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#002060]">Featured Campus</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4">
              <MapPin className="w-4 h-4" />
              <span>International Opportunities</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#002060] leading-tight mb-6 tracking-tight cooper">
              Study in <span className="text-blue-600">{destinations[activeStudent].title}</span>
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-2xl">
              {destinations[activeStudent].description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {destinations[activeStudent].stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-5 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white group-hover:bg-[#002060] group-hover:text-white text-[#002060] shadow-sm transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#002060]">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#002060] text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-900/20 hover:bg-[#0a2e7a] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                <Link to="/global-access">Get Free Consultation</Link>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Overview Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-3xl font-extrabold tracking-tight text-[#002060] sm:text-4xl cooper">
          Overview of <span className="text-blue-600">{activeStudent}</span>
        </h3>
        <div className="h-1 flex-grow rounded-full bg-gradient-to-r from-blue-100 to-transparent" />
      </div>

      <div className="relative leading-relaxed bg-white border border-gray-100 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="text-gray-600 text-lg selection:bg-blue-100">
          {destinations[activeStudent].overview}
        </div>
      </div>
    </motion.section>

    {/* Living Standards Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-4 max-w-7xl mx-auto mb-10"
    >
      <div className="mb-16 text-center">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-4 inline-block">
          Lifestyle & Comfort
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#002060] drop-shadow-sm cooper">
          Living Standards <span className="text-blue-600">&</span> Facilities
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Experience world-class amenities and a supportive environment tailored for international excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {countriesData[activeStudent].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,32,96,0.1)] hover:shadow-[0_20px_40px_-12px_rgba(0,32,96,0.15)] transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="h-14 w-14 bg-gradient-to-br from-blue-50 to-blue-100 text-[#002060] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <div className="w-7 h-7 flex items-center justify-center">{item.icon}</div>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#002060] group-hover:text-blue-700 transition-colors cooper">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
    
    {/* Living Cost Section */}
    
<section>
  {/* SECTION HEADING */}
  <motion.div
    className="text-center py-10"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-[#002060] drop-shadow-sm cooper">
      Approximate <span className="text-blue-600">Living</span> Cost
    </h2>
    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
  </motion.div>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-5">

    {/* LEFT SIDE */}
    <div className="lg:col-span-8 space-y-6">

      {/* COST CARDS */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {costData[activeStudent]?.items?.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-default"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${item.bg || ""} ${item.color || ""}`}>
                {item.icon}
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                {item.percentage}% of total
              </span>
            </div>

            <h4 className="text-slate-500 font-medium text-sm mb-1 cooper">
              {item.title}
            </h4>

            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-slate-800">
                {item.price}
              </span>
              <span className="text-xs text-slate-400 font-medium mb-1">
                per month
              </span>
            </div>
          </motion.div>
        ))}

        {/* SUMMARY CARD */}
        {costData[activeStudent] && (
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#002060] to-[#0040a0] p-6 rounded-3xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <PieChart className="w-8 h-8 mb-4 text-blue-300 opacity-80" />
              <h4 className="text-blue-100/80 font-medium text-sm">
                Combined Total
              </h4>
              <div className="text-4xl font-black mb-1">
                {costData[activeStudent].total}
              </div>
              <p className="text-blue-200/60 text-xs">
                Estimated Monthly Outgoings
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          </motion.div>
        )}
      </motion.div>

      {/* DISCLAIMER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100 flex gap-4 items-center mb-10 max-w-4xl mx-auto"
      >
        <div className="bg-white p-2 rounded-full shadow-sm">
          <Info className="w-5 h-5 text-blue-600" />
        </div>
        <p className="text-sm text-blue-800/80 leading-relaxed font-medium">
          Note: Based on national averages; students in major cities should budget
          15-20% more for housing and transport.
        </p>
      </motion.div>
    </div>

    {/* RIGHT SIDEBAR */}
    <motion.div
      className="lg:col-span-4 space-y-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm sticky top-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 cooper">
          Budget Insights
        </h3>

        <div className="space-y-6">
          {costData[activeStudent]?.items?.slice(0, 3).map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm font-bold mb-2 text-slate-600">
                <span>{item.title}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    item.color
                      ? item.color.replace("text", "bg")
                      : "bg-gray-300"
                  }`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

  </div>
</section>


        

  </div>
  
)}


      </div>

      {/* Footer CTA */}
<div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-[400px]">
  <section className="w-full max-w-7xl overflow-hidden relative">

    {/* Background Decorative Elements */}
    <div className="absolute top-0 -left-10 md:-left-20 w-40 h-40 md:w-72 md:h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 -right-10 md:-right-20 w-40 h-40 md:w-72 md:h-72 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#002060] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-16 text-white shadow-2xl overflow-hidden border border-white/10"
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight cooper"
        >
          Ready to Start{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
            Your Journey?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mb-8 leading-relaxed px-2"
        >
          Take the first step towards your international education dreams. Our expert counselors are here to guide you every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action */}
          <button className="group relative w-full sm:w-auto px-3 py-3.5 bg-white text-[#002060] font-bold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-white/5">
            <Calendar size={18} className="group-hover:rotate-12 transition-transform" />

            <Link to="/global-access">Book Free Consultation</Link>
          </button>
        </motion.div>
      </div>
    </motion.div>
  </section>
</div>
    </div>
  );
}
