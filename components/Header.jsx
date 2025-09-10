import React, { useEffect, useState } from "react";
import logo from "../assets/header-images/logo_RP.png";
import fb from "../assets/header-images/icon_f.png";
import insta from "../assets/header-images/icon_insta.png";
import twitter from "../assets/header-images/icon_t.jpg";
const Header = () => {
  const [searchQuery, setSearch] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-full h-full  overflow-hidden">
              <img
                src={logo}
                alt="Radio Pakistan Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="text-sm text-gray-500 sm:mt-0 sm:ml-0">{dateTime}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex">
              <a
                href="#"
                className="w-10 h-10 rounded flex items-center justify-center"
              >
                <img src={fb} alt="Facebook" className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded flex items-center justify-center"
              >
                <img src={twitter} alt="X" className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-10 h-10  rounded flex items-center justify-center"
              >
                <img src={insta} alt="Instagram" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
