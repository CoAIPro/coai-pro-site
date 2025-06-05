import React from "react";
import {Link} from "react-router-dom";
import xIcon from "../../../assets/icons/x.png";
import instaIcon from "../../../assets/icons/insta.png";
import printerestIcon from "../../../assets/icons/printerest.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";


const Footer = () => {

  const navLinks = [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: xIcon, href: "#" },
    { icon: instaIcon, href: "#" },
    { icon: printerestIcon, href: "#" },
    { icon: linkedinIcon, href: "#" },
  ];

  return (
    <footer className="text-center py-10 bg-white dark:bg-black">

      {/* Navigation Links */}
      <div className="inline-flex items-center gap-2 lg:gap-4 border border-gray-200 rounded-full px-6 py-2 mb-6 shadow-sm text-xs lg:text-base">
        {navLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            <a href={link.href}>{link.label}</a>
            {index !== navLinks.length - 1 && (
              <span className="w-[6px] h-[6px] bg-primary rounded-full"></span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6 pt-3 text-gray-500 text-xl">
        {socialLinks.map((social, index) => (
          <Link key={index} to={social.href} className="hover:text-black transition">
            <img src={social.icon} className="w-5 object-contain"  alt="icon" />
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 pt-4 lg:pt-14">
        Copyright © {new Date().getFullYear()} - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
