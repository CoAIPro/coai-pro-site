import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import footerLogo from "../../../assets/images/logo-footer.png";


const Footer = () => {
  return (
    <footer className="bg-[#191919] text-light pt-14">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 items-start">

          {/* Logo + Description + Social */}
          <div>
            <div>
              <img src={footerLogo} className="max-w-60 object-contain" alt="logo" />
            </div>
            <p className="opacity-70 text-sm pt-6 pb-3">
              Spark is a platform designed to help you explore, share, and showcase powerful ideas with clarity and impact
            </p>
            <div className="flex gap-3">
              <button className="w-8 h-8 bg-[#4B4B4B] rounded-full flex items-center justify-center">
                <FaTwitter size={14} />
              </button>
              <button className="w-8 h-8 bg-[#4B4B4B] rounded-full flex items-center justify-center">
                <FaFacebookF size={14} />
              </button>
              <button className="w-8 h-8 bg-[#4B4B4B] rounded-full flex items-center justify-center">
                <FaInstagram size={14} />
              </button>
              <button className="w-8 h-8 bg-[#4B4B4B] rounded-full flex items-center justify-center">
                <FaGithub size={14} />
              </button>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-5 lg:gap-20">
            {/* Company */}
            <div>
              <h4 className="text-sm lg:text-lg font-medium mb-5 font-secondary">Company</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#">Service</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">About us</a></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-sm lg:text-lg font-medium mb-5 font-secondary">Help</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-sm lg:text-lg font-medium mb-5 font-secondary">Subscribe to Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-[#1F1F1F] text-sm text-light px-4 py-2 rounded-l-lg outline-none w-full placeholder:text-light"
              />
              <button className="bg-primary font-secondary text-dark text-sm px-10 rounded-r-lg font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/10 py-6 lg:py-10 text-center text-xs lg:text-sm">
          <span className="hidden lg:inline opacity-50">©</span> Copyright 2024. All Rights Reserved by Spark.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
