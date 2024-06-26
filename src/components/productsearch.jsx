import React, { useState } from "react";

const Productsearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Ana bileşene arama terimini iletiyoruz
  };

  return (
    <div className=" w-screen max-w-screen-md pt-10 pb-5 leading-6">
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
      >
        <svg
          className="absolute left-2 block h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={11} cy={11} r={8} className="" />
          <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
        </svg>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
          placeholder="Gaming, VideoCard, CPU:"
        />
        <button
          type="submit"
          className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-6 font-medium text-white focus:ring-4 hover:bg-gray-700"
        >
          Axtar
        </button>
      </form>
    </div>
  );
};

export default Productsearch;
