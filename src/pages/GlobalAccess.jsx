import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  GraduationCap,
  Plane,
  CheckCircle2,
  ArrowRight,
  Globe2,
  PhoneCall,
  Mail,
  MapPin,
  Loader2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  MessageSquareText,
  X,
  SendHorizontal,
  Bot,
  Users,
  BookOpen,
  Briefcase,
  CreditCard,
  FileText,
  Building2,
  UploadCloud,
  Wand2,
  Lightbulb,
  Menu,
  ArrowUpRight,
  MoveLeft,
  BookUser,
} from "lucide-react";
import Footer from "../Components/Footer";
import AIChatWidget from "../Components/AIChatWidget";
import { callGemini } from "../utils/geminiApi";
import ScrollToTop from "../Components/ScrollToTop";
import emailjs from "@emailjs/browser";
import { uploadToCloudinary } from "../utils/cloudinaryUpload";

/* --- Custom CSS for Advanced Animations --- */
const customStyles = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @keyframes slideUpFade {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes gradient-xy {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-float { animation: float 8s ease-in-out infinite; }
  .animate-blob { animation: blob 10s infinite; }
  .animate-shimmer { background-size: 200% auto; animation: shimmer 3s linear infinite; }
  .animate-gradient-xy { background-size: 200% 200%; animation: gradient-xy 6s ease infinite; }
  
  .glass-panel {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .glass-card-hover:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
  
  /* Staggered Animation Utilities */
  .stagger-enter { opacity: 0; animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
`;

const GlobalAccess = () => {
  const formRef = useRef();
  const [view, setView] = useState("advisory");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [cvFileObj, setCvFileObj] = useState(null); // Store actual file object
  const [cvUrl, setCvUrl] = useState(""); // Cloudinary URL
  const [isUploadingCv, setIsUploadingCv] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    qualification: "",
    languageProficiency: "",
    occupation: "",
    hasPassport: "",
    travelDate: "",
    department: "",
    experience: "",
  });

  // Gemini API Integration State
  // Gemini API Integration State
  const [aiRoadmap, setAiRoadmap] = useState("");
  const [isGeneratingRoadmap, setIsGeneratingRoadmap] = useState(false);
  const [cvAnalysis, setCvAnalysis] = useState("");
  const [isAnalyzingCv, setIsAnalyzingCv] = useState(false);

  const studentCountries = ["USA", "Canada", "UK", "Australia", "Sweden"];
  const touristCountries = ["USA", "Canada"];
  const departments = [
    "Administration",
    "Acounts",
    "IT Support",
    "Marketing",
    "Student Relations",
    "Finance",
    "Human Resources",
    "Academic Affairs",
    "Research and Development",
  ];

  // Helper for API calls

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateAiRoadmap = async () => {
    if (!formData.country || !role) return;
    setIsGeneratingRoadmap(true);
    try {
      const details =
        role === "student"
          ? `Degree: ${formData.qualification}`
          : `Job: ${formData.occupation}`;
      const prompt = `Create a 3-step executive summary roadmap for a ${role} going to ${formData.country}. Details: ${details}. Format with emojis.`;
      const result = await callGemini(
        prompt,
        "You are a premium travel consultant."
      );
      setAiRoadmap(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingRoadmap(false);
    }
  };

  const analyzeCvWithAi = async () => {
    if (!cvFile || !formData.department) return;
    setIsAnalyzingCv(true);
    try {
      const prompt = `Applicant: ${formData.fullName}, Exp: ${formData.experience}, Dept: ${formData.department}. Give 3 elite tips to secure this role.`;
      const result = await callGemini(
        prompt,
        "You are a Fortune 500 recruiter."
      );
      setCvAnalysis(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzingCv(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Upload CV to Cloudinary first (only for career applications with CV)
      let uploadedCvUrl = cvUrl;
      if (view === "career" && cvFileObj && !cvUrl) {
        setIsUploadingCv(true);
        try {
          const uploadResult = await uploadToCloudinary(cvFileObj);
          // Use downloadUrl for direct download in email
          uploadedCvUrl = uploadResult.downloadUrl;
          setCvUrl(uploadedCvUrl);
        } catch (uploadError) {
          console.error("CV Upload failed:", uploadError);
          setSubmitStatus("error");
          setIsSubmitting(false);
          setIsUploadingCv(false);
          return;
        }
        setIsUploadingCv(false);
      }

      // EmailJS credentials from environment variables
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
      const TEMPLATE_ID = import.meta.env.VITE_JOB_TEMPLATE_ID;

      // Send email with CV URL using emailjs.send() for custom params
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        experience: formData.experience,
        cvFileName: cvFile || "No CV uploaded",
        cvUrl: uploadedCvUrl || "No CV uploaded",
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      setSubmitStatus("success");
      setSubmitted(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        qualification: "",
        languageProficiency: "",
        occupation: "",
        hasPassport: "",
        travelDate: "",
        department: "",
        experience: "",
      });
      setCvFile(null);
      setCvFileObj(null);
      setCvUrl("");
      setAiRoadmap("");
      setCvAnalysis("");
    } catch (error) {
      console.error("FAILED...", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render Components ---

  const SuccessView = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center  p-6 bg-white/80 backdrop-blur-xl animate-in fade-in zoom-in duration-500">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border  border-slate-100 p-12 text-center relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700 ">
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r  from-blue-600 via-purple-500 to-indigo-600 animate-gradient-xy" />
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75" />
          <div className="relative w-24 h-24 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-white animate-in zoom-in duration-300 delay-200" />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight stagger-enter delay-100">
          Confirmed.
        </h2>
        <p className="text-slate-500 mb-10 leading-relaxed text-lg stagger-enter delay-200">
          We have successfully secured your request in our global database. An
          NSEC specialist is reviewing your profile now.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setRole("");
            setAiRoadmap("");
            setCvFile(null);
            setView("advisory");
            setCvAnalysis("");
          }}
          className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold tracking-wider hover:bg-black transition-all flex items-center justify-center gap-2 group stagger-enter delay-300"
        >
          RETURN TO DASHBOARD
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans mt-25 text-slate-900 overflow-x-hidden selection:bg-indigo-500/20 selection:text-indigo-900">
      <ScrollToTop />
      <style>{customStyles}</style>

      {/* --- Dynamic Background --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-32 left-[20%] w-[60vw] h-[60vw] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob [animation-delay:4s]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      {submitted && <SuccessView />}

      {/* --- Navigation --- */}
      <nav className="fixed w-full z-40 top-0 transition-all duration-300">
        <div className="absolute inset-0 glass-panel border-b border-white/20 shadow-sm" />
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold cooper">
            <p>
              <img
                className="w-35 md:w-52"
                src="https://i.ibb.co.com/jvNgb6q2/NSEC-Logo.png"
                alt="logo"
              />
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full backdrop-blur-sm border border-slate-200/50">
            {["advisory", "career"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setView(tab);
                  setRole("");
                  setCvAnalysis("");
                  setAiRoadmap("");
                }}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  view === tab
                    ? "bg-white text-blue-600 shadow-md transform scale-105"
                    : "text-slate-500 hover:text-slate-700 hover:bg-white/50"
                }`}
              >
                {tab === "advisory" ? "Book Apointment" : "Careers in NSEC"}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors relative z-50"
            >
              {isMenuOpen ? (
                <X className="text-slate-600" />
              ) : (
                <Menu className="text-slate-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xl p-4 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-2 duration-300 z-40">
            {["advisory", "career"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setView(tab);
                  setRole("");
                  setCvAnalysis("");
                  setAiRoadmap("");
                  setIsMenuOpen(false);
                }}
                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                  view === tab
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                {tab === "advisory" ? "Global Advisory" : "Careers"}
              </button>
            ))}
            <Link
              to="/"
              className="w-full py-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 transition-all"
            >
              Return Home
            </Link>
          </div>
        )}
      </nav>

      {/* --- Main Content --- */}
      <main className="relative z-10 pt-24 lg:pt-32 pb-12 lg:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left Column: Hero & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm stagger-enter delay-100">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold text-slate-600 tracking-wide uppercase">
                {view === "career"
                  ? "Recruitment Open"
                  : "Visa Assistance Live"}
              </span>
            </div>

            <div className="space-y-4 stagger-enter delay-200">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[0.95] tracking-tight">
                {view === "career" ? "Grow Where Your Potential" : "Book free"}{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 animate-shimmer">
                  {view === "career" ? "is Valued" : "consultation"}
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                {view === "career"
                  ? "Opportunities, guidance, and a supportive environment designed around your growth."
                  : "Personalized guidance for students and travelers — focused on your goals, comfort, and peace of mind."}
              </p>
            </div>

            {/* Dynamic AI Cards */}
            <div className="stagger-enter delay-300 min-h-40">
              {aiRoadmap && (
                <div className="p-6 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 border border-orange-100 shadow-lg animate-in slide-in-from-bottom-4 zoom-in duration-500">
                  <div className="flex items-center gap-2 mb-3 text-amber-600 font-bold text-xs uppercase tracking-wider">
                    <Sparkles size={14} className="animate-pulse" /> AI Strategy
                  </div>
                  <div className="text-sm text-slate-700 whitespace-pre-line leading-relaxed font-medium">
                    {aiRoadmap}
                  </div>
                </div>
              )}
              {cvAnalysis && (
                <div className="p-6 rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-lg animate-in slide-in-from-bottom-4 zoom-in duration-500">
                  <div className="flex items-center gap-2 mb-3 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                    <Wand2 size={14} className="animate-bounce" /> Profile
                    Analysis
                  </div>
                  <div className="text-sm text-slate-700 whitespace-pre-line leading-relaxed font-medium">
                    {cvAnalysis}
                  </div>
                </div>
              )}
              {!aiRoadmap && !cvAnalysis && (
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "24/7", label: "AI Support" },
                    { val: "99%", label: "Satisfaction" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="glass-panel p-5 rounded-2xl hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-2xl font-bold text-slate-900">
                        {stat.val}
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 stagger-enter delay-400">
            <div className="glass-panel rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group border border-white/60">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700 animate-float">
                {view === "career" ? (
                  <Briefcase size={120} />
                ) : (
                  <Globe2 size={120} />
                )}
              </div>

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-in slide-in-from-top-2">
                  <p className="font-semibold">✗ Failed to submit</p>
                  <p className="text-sm">
                    Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative z-10 space-y-8"
              >
                {/* Hidden field for CV filename for EmailJS */}
                <input
                  type="hidden"
                  name="cvFileName"
                  value={cvFile || "N/A"}
                />

                {/* Mode Selection if Advisory */}
                {view === "advisory" && !role && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
                    {[
                      {
                        id: "student",
                        icon: GraduationCap,
                        title: "Student",
                        desc: "Study Abroad",
                      },
                      {
                        id: "tourist",
                        icon: Plane,
                        title: "Tourist",
                        desc: "Global Travel",
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setRole(item.id)}
                          style={{ animationDelay: `${idx * 150}ms` }}
                          className="stagger-enter flex flex-col items-start p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group text-left h-64 justify-between relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative z-10 w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon size={28} />
                          </div>
                          <div className="relative z-10">
                            <h3 className="text-xl font-bold text-slate-900">
                              {item.title}
                            </h3>
                            <p className="text-sm text-slate-400 font-medium mt-1">
                              {item.desc}
                            </p>
                          </div>
                          <div className="w-full flex justify-end relative z-10">
                            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                              <ArrowRight size={18} />
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Form Fields */}
                {(view === "career" || role) && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4 stagger-enter delay-100">
                      <h3 className="text-lg font-bold text-slate-900">
                        {view === "career"
                          ? "Application Details"
                          : `${
                              role === "student" ? "Student" : "Traveler"
                            } Information`}
                      </h3>
                      {view === "advisory" && (
                        <button
                          onClick={() => setRole("")}
                          className="text-xs font-bold  hover:text-red-500 uppercase tracking-wider transition-colors btn bg-transparent hover:bg-transparent "
                        >
                          <MoveLeft />
                          Back
                        </button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <InputGroup
                        className="stagger-enter delay-100"
                        icon={Users}
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleInputChange}
                        value={formData.fullName}
                      />
                      <InputGroup
                        className="stagger-enter delay-200"
                        icon={Mail}
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                      <InputGroup
                        className="stagger-enter delay-300"
                        icon={PhoneCall}
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                        value={formData.phone}
                      />

                      {view === "career" ? (
                        <SelectGroup
                          className="stagger-enter delay-400 z-10"
                          icon={Building2}
                          name="department"
                          options={departments}
                          onChange={handleInputChange}
                          placeholder="Select Department"
                        />
                      ) : (
                        <SelectGroup
                          className="stagger-enter delay-400 z-10"
                          icon={Globe2}
                          name="country"
                          options={
                            role === "student"
                              ? studentCountries
                              : touristCountries
                          }
                          onChange={handleInputChange}
                          placeholder="Select Destination"
                        />
                      )}
                    </div>

                    <div className="space-y-5">
                      {view === "career" ? (
                        <>
                          <InputGroup
                            className="stagger-enter delay-500"
                            icon={Briefcase}
                            type="text"
                            name="experience"
                            placeholder="Years of Experience"
                            onChange={handleInputChange}
                            value={formData.experience}
                          />
                          <div className="relative group cursor-pointer stagger-enter delay-500">
                            <input
                              type="file"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                              accept=".pdf,.doc,.docx"
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  setCvFile(e.target.files[0].name);
                                  setCvFileObj(e.target.files[0]); // Store actual file
                                  setCvUrl(""); // Reset URL for new file
                                  setCvAnalysis("");
                                }
                              }}
                            />
                            <div
                              className={`w-full p-6 border-2 border-dashed rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 ${
                                cvFile
                                  ? "border-indigo-200 bg-indigo-50/50"
                                  : "border-slate-200 hover:border-blue-300 hover:bg-blue-50/30"
                              }`}
                            >
                              <div
                                className={`p-3 rounded-full transition-colors ${
                                  cvFile
                                    ? "bg-indigo-100 text-indigo-600"
                                    : "bg-slate-100 text-slate-400"
                                }`}
                              >
                                {cvFile ? (
                                  <FileText size={24} />
                                ) : (
                                  <UploadCloud size={24} />
                                )}
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-bold text-slate-900">
                                  {cvFile || "Upload Resume / CV"}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {cvFile
                                    ? "Click to change"
                                    : "PDF or DOCX up to 5MB"}
                                </p>
                              </div>
                            </div>
                          </div>
                          {cvFile && formData.department && (
                            <button
                              type="button"
                              onClick={analyzeCvWithAi}
                              disabled={isAnalyzingCv}
                              className="stagger-enter delay-500 w-full py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70 active:scale-95"
                            >
                              {isAnalyzingCv ? (
                                <Loader2 className="animate-spin" size={16} />
                              ) : (
                                <>
                                  <Wand2 size={16} /> Run AI Analysis
                                </>
                              )}
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          <InputGroup
                            className="stagger-enter delay-500"
                            icon={BookOpen}
                            type="text"
                            name="qualification"
                            placeholder={
                              role === "student"
                                ? "Last Qualification"
                                : "Current Occupation"
                            }
                            onChange={handleInputChange}
                            value={formData.qualification}
                          />
                          {role === "student" && (
                            <InputGroup
                              className="stagger-enter delay-500"
                              icon={MessageSquareText}
                              type="text"
                              name="languageProficiency"
                              placeholder="Language Score (IELTS/TOEFL)"
                              onChange={handleInputChange}
                              value={formData.languageProficiency}
                            />
                          )}
                          {role === "tourist" && (
                            <SelectGroup
                              className="stagger-enter delay-500 z-10"
                              icon={BookUser}
                              name="hasPassport"
                              options={["Yes", "No", "Application in progress"]}
                              onChange={handleInputChange}
                              placeholder="Do You Have Any Valid Passport?"
                            />
                          )}

                          {formData.country && !aiRoadmap && (
                            <button
                              type="button"
                              onClick={generateAiRoadmap}
                              disabled={isGeneratingRoadmap}
                              className="stagger-enter delay-500 w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70 active:scale-95"
                            >
                              {isGeneratingRoadmap ? (
                                <Loader2 className="animate-spin" size={16} />
                              ) : (
                                <>
                                  <Lightbulb size={16} /> Generate Travel Plan
                                </>
                              )}
                            </button>
                          )}
                        </>
                      )}
                    </div>

                    <div className="pt-6 stagger-enter delay-500">
                      <button
                        type="submit"
                        disabled={isSubmitting || isUploadingCv}
                        className="w-full h-16 bg-slate-900 rounded-2xl flex items-center justify-between px-8 text-white group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-70 overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-xy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="font-bold tracking-wide relative z-10">
                          {isUploadingCv
                            ? "UPLOADING CV..."
                            : isSubmitting
                            ? "SENDING..."
                            : "SUBMIT REQUEST"}
                        </span>
                        {isSubmitting || isUploadingCv ? (
                          <Loader2 className="animate-spin relative z-10" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform relative z-10">
                            <ArrowRight size={20} />
                          </div>
                        )}
                      </button>
                      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <ShieldCheck size={12} className="text-green-500" />{" "}
                        Secure SSL Connection
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* --- AI Chat Widget --- */}
      {/* --- AI Chat Widget --- */}
      <AIChatWidget />

      {/* --- Footer --- */}
      <Footer className="bg-[#002060] text-white py-12 px-6" />
    </div>
  );
};

// Reusable Components to keep main clean
const InputGroup = ({
  icon: IconComponent,
  type,
  name,
  placeholder,
  onChange,
  value,
  className = "",
}) => (
  <div className={`relative group ${className}`}>
    <IconComponent
      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300"
      size={18}
    />
    <input
      type={type}
      name={name}
      value={value}
      required
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 text-sm font-medium placeholder:text-slate-400 hover:bg-white/80"
    />
  </div>
);

const SelectGroup = ({
  icon: IconComponent,
  name,
  options,
  onChange,
  placeholder,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className={`relative group ${className}`} ref={dropdownRef}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} />

      <IconComponent
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 z-10 ${
          isOpen || selected ? "text-blue-500" : "text-slate-400"
        }`}
        size={18}
      />

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-12 pl-12 pr-10 rounded-xl border text-left flex items-center transition-all duration-300 outline-none
          ${
            isOpen
              ? "bg-white border-blue-500 ring-4 ring-blue-500/10 shadow-lg"
              : "bg-slate-50/50 border-slate-200 hover:bg-white"
          }
        `}
      >
        <span
          className={`text-sm font-medium truncate ${
            selected ? "text-slate-900" : "text-slate-400"
          }`}
        >
          {selected || placeholder}
        </span>
      </button>

      {/* Arrow Icon */}
      <div
        className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 transition-transform duration-300 ${
          isOpen ? "rotate-270" : "rotate-90"
        }`}
      >
        <ChevronRight size={14} />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-top">
          <div className="max-h-60 overflow-y-auto py-1 custom-scrollbar">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between group/item
                  ${
                    selected === option
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >
                {option}
                {selected === option && (
                  <CheckCircle2
                    size={14}
                    className="text-blue-600 animate-in zoom-in"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalAccess;
