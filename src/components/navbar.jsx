import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../constants/constant";
import logo from "../assets/images/aoruslogo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(prevNav => !prevNav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="border-b-2 border-purple-600 fixed w-full  z-10 bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={handleNavToggle}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-purple-500 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={nav ? "true" : "false"}
            >
              <span className="absolute -inset-0.5 "></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="purple"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="purple"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto " src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 pt-2">
                {NavbarLinks.map((link, index) => (
                  <NavLink
                    to={link.value}
                    onClick={closeNav}
                    className={({ isActive, isPending }) =>
                      `text-purple-400 text-[14px] pt-[7px] hover:bg-white hover:text-purple-900 rounded-md px-3 py-2  font-medium ${
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-purple-900 text-white  "
                          : ""
                      }`
                    }
                    aria-current="Home"
                    key={index}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${nav ? "block" : "hidden"} sm:hidden bg-black`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {NavbarLinks.map((link, index) => (
            <NavLink
              to={link.value}
              onClick={closeNav}
              className={({ isActive, isPending }) =>
                `  font-semibold block rounded-md text-center w-32 hover:bg-white hover:text-purple-900 text-purple-400 m-auto px-3 py-2 text-base  ${
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-purple-900 w-24 text-white"
                    : ""
                }`
              }
              aria-current="page"
              key={index}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
