import { useState, useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  MessageSquare,
  ChevronRight,
  User,
  Hash,
} from "lucide-react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { PiMapPinLight } from "react-icons/pi";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactCard({ icon, title, detail, subtitle, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ">
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg bg-${color}-100 flex items-center justify-center `}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 cooper                                                                                                                                                                                                                                                           ">
            {title}
          </h3>
          <p className="text-gray-700 font-medium cooper ">{detail}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS credentials from environment variables
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setSubmitStatus("success");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            country: "",
            message: "",
          });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full mt-15">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] sm:min-h-[60vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
            alt="Consultancy Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002060]/95 to-blue-900/85 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block py-1.5 px-4 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6"
          >
            ESTABLISH YOUR FUTURE
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight cooper"
          >
            Connect with Global <br className="hidden sm:block" />
            <span className="text-blue-400">Education Experts</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-lg md:text-xl text-blue-100/90 max-w-xs sm:max-w-2xl mx-auto font-light leading-relaxed"
          >
            Your international academic journey begins with a single
            conversation. Reach out to NSEC Global for personalized pathways to
            top universities.
          </motion.p>
        </motion.div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-[35px] sm:h-[60px]"
            viewBox="0 0 1100 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
              82.39-16.72,168.19-17.73,250.45-.39
              C823.78,31,906.67,72,985.66,92.83
              c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8
              C58.33,105.41,114.16,113.34,172,113.34
              c51.17,0,103.11-4.14,151.39-22.38Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative z-20 -mt-10 sm:-mt-20 px-4 sm:px-6 md:px-10 lg:px-20 mb-14 sm:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: <Phone className="text-blue-600" size={22} />,
              title: "Phone Support",
              detail: "+880 1805021560",
              subtitle: "Speak with an expert",
              color: "blue",
            },
            {
              icon: <Mail className="text-emerald-600" size={22} />,
              title: "Email Inquiry",
              detail: "nsecglobal@gmail.com",
              subtitle: "Response in 24 hours",
              color: "emerald",
            },
            {
              icon: <MapPin className="text-purple-600" size={22} />,
              title: "Main Office",
              detail: "4 Chowdhury Para, Dhaka",
              subtitle: "Visit our premises",
              color: "purple",
            },
            {
              icon: <Clock className="text-orange-600" size={22} />,
              title: "Office Hours",
              detail: "Sat - Thu: 10AM - 6:30PM",
              subtitle: "Closed on Friday",
              color: "orange",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <ContactCard {...card} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map Section */}
      <div className="w-full px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT – FORM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold mb-2 cooper text-[#002060]">
              SEND US A MESSAGE
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our counselors will get back to you
              within 24 hours.
            </p>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-semibold">✓ Message sent successfully!</p>
                <p className="text-sm">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-semibold">✗ Failed to send message</p>
                <p className="text-sm">
                  Please try again or contact us directly.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="font-medium">Preferred Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="select select-bordered w-full"
                    required
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Tell us about your study abroad goals..."
                  maxLength={500}
                ></textarea>
                <p className="text-gray-400 text-sm">
                  {formData.message.length}/500 characters
                </p>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#002060",
                  borderColor: "#002060",
                }}
                className="btn bg-[#002060] text-white w-full disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <FaRegPaperPlane className="inline ml-2" />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT – MAP + OFFICES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* MAP */}
            <div className="w-full h-78 rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.199984700589!2d90.4164045!3d23.7563503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29f0a50632380783%3A0xacead44da94f5e6b!2sNSEC%20Global!5e0!3m2!1sen!2sus!4v1732380000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* OFFICE LIST */}
            <div className="mt-6 space-y-6">
              <div className="bg-base-100 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-3">Dhaka Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex gap-2 items-start">
                    <PiMapPinLight className="text-xl" /> 4 Chowdhury Para, DIT
                    Rd Dhaka 1219, Bangladesh
                  </p>
                  <p className="flex gap-2 items-center">
                    <FiPhone /> +880 1805021560
                  </p>
                  <p className="flex gap-2 items-center">
                    <FiMail /> nsecglobal@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
