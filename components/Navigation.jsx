import React, { useState } from "react";
import urdu from "../assets/header-images/btn_urdu.jpg";
import suno from "../assets/header-images/sunofm_logo.png";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    "HOME",
    "NATIONAL",
    "WORLD",
    "KASHMIR",
    "CURRENT AFFAIRS",
    "PROGRAMS",
    "FM 101",
    "URDU DICTIONARY",
    "SAUT-UL-QURAN",
  ];

  return (
    <nav className="bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="hidden lg:flex items-center space-x-5 py-5 text-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`nav-link text-sm font-medium ${
                  item === "SAUT-UL-QURAN" ? "blink text-white" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <img
                src={suno}
                alt="SunoFm-logo"
                className="w-14 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <img src={urdu} alt="Urdu-logo" className="w-12 object-contain" />
            </div>
            <div className=" text-white px-4 py-2 rounded font-medium text-xl">
              LIVE
            </div>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white py-2 px-4 hover:bg-green-600 rounded"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
