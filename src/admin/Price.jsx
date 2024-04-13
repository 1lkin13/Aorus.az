import React from "react";

function Price() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              {/* Price */}
              <h2 id="price-heading">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  data-accordion-target="#price-body"
                  aria-expanded="true"
                  aria-controls="price-body"
                >
                  <span>Price</span>
                  <svg
                    aria-hidden="true"
                    data-accordion-icon=""
                    className="w-5 h-5 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
              </h2>
              <div id="price-body" className="hidden" aria-labelledby="price-heading">
                <div className="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">
                  <select
                    id="price-from"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option disabled selected>
                      From
                    </option>
                    <option>$500</option>
                    <option>$2500</option>
                    <option>$5000</option>
                  </select>
                  <select
                    id="price-to"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option disabled selected>
                      To
                    </option>
                    <option>$500</option>
                    <option>$2500</option>
                    <option>$5000</option>
                  </select>
                </div>
              </div>
              {/* End Price */}
            </div>
          </div>
          {/* End Filters */}

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start justify-start col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <div className="w-full flex-shrink-0 h-64 sm:h-72 lg:h-80 xl:h-96 bg-gray-200 dark:bg-gray-800"></div>
                <div className="mt-4 w-full h-20 bg-gray-200 dark:bg-gray-800"></div>
                <div className="mt-2 w-full h-6 bg-gray-200 dark:bg-gray-800"></div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <div className="w-full flex-shrink-0 h-64 sm:h-72 lg:h-80 xl:h-96 bg-gray-200 dark:bg-gray-800"></div>
                <div className="mt-4 w-full h-20 bg-gray-200 dark:bg-gray-800"></div>
                <div className="mt-2 w-full h-6 bg-gray-200 dark:bg-gray-800"></div>
              </div>
              <div className="flex flex-col items-start justify-start col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                <div className="w-full flex-shrink-0 h-64 sm:h-72 lg:h-80 xl:h-96 bg-gray-200 dark:bg-gray-800"></div>
                <div className="mt-4 w-full h-20 bg-gray-200 dark:bg-gray-800"></div>
                <div className="mt-2 w-full h-6 bg-gray-200 dark:bg-gray-800"></div>
              </div>
            </div>
          </div>
          {/* End Products */}
        </div>
      </div>
    </div>
  );
}

export default Price;
_