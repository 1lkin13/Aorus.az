import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../constants/constant";
import logo from "../assets/images/aoruslogo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-white  w-full  fixed top-0 z-40">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex   h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
            <button
              type="button"
              onClick={() => setNav((prev) => !prev)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-purple-950 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5 "></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="purple"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="purple"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 pt-2">
                {NavbarLinks.map((link, index) => (
                  <NavLink
                    to={link.value}
                    className={({ isActive, isPending }) =>
                      `text-black-300 text-[18px] pt-[7px] hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                        isPending ? "pending" : isActive ? "bg-purple-900 text-white  " : ""
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
            

<form className="items-center max-w-sm mx-auto hidden sm:flex ">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative  w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-purple-900 dark:purple-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
           
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg border border-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-gray-900 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>

         
        </div>
      </div>

      <div className={`${nav ? "block" : "hidden"} sm:hidden bg-white`} id="mobile-menu" >
        <div className="space-y-1 px-2 pb-3 pt-2">
          
<form className="flex items-center max-w-sm mx-auto  sm:hidden">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path   stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
           
        </div>
        <input type="text" id="simple-search" className="bg-purple-100 border border-black text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  bg-gradient-to-r from-slate-900 to-purple-800 dark:border-blue-600 dark:placeholder-white dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="Search branch name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-black  dark:focus:ring-purple-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>
       
          {NavbarLinks.map((link, index) => (
            <NavLink
              to={link.value}
              className={({ isActive, isPending }) =>
                ` text-black font-semibold block rounded-md text-center m-auto px-3 py-2 text-base  ${
                  isPending ? "pending" : isActive ? "bg-purple-900 w-24 text-white" : ""
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