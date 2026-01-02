import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from 'react-router';
import { SiFacebook } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-[#002060] text-white py-12 px-6 relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <Link to="/">
            <img className='w-40' src="/nsec-logo2.png" alt="" />
          </Link>
          <p className="mt-3 text-sm leading-6 text-gray-200">
            Building futures, not just applications.
            Your trusted partner for international education and career success.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <SiFacebook className="hover:text-gray-300 cursor-pointer" />
            <AiFillInstagram className="hover:text-gray-300 cursor-pointer" />
            <RiWhatsappFill className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3 cooper">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/about">About Us</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/services">Services</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/study-destinations">Destinations</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-md font-semibold mb-3 cooper">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-white cursor-pointer">University Selection</li>
            <li className="hover:text-white cursor-pointer">Visa Assistance</li>
            <li className="hover:text-white cursor-pointer">Documentation Support</li>
            <li className="hover:text-white cursor-pointer">Pre-Departure Support</li>
            <li className="hover:text-white cursor-pointer">Scholarship Guidance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-3 cooper">CONTACT INFO</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <IoLocationSharp className="text-lg mt-1" />
              <span>
                4 Chowdhury Para, DIT Rd
                Dhaka 1219, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />+880 1865821580
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> nsecglobal@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-10 pt-4 text-xs text-gray-300 max-w-7xl mx-auto">
        <p>© 2025 NSEC Global. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;