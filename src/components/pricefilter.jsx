import React, { useState } from "react";

const Pricefilter = () => {
  const [currencyValue, setCurrencyValue] = useState(1000);

  // Function to update the currency input
  const updateCurrencyInput = (event) => {
    setCurrencyValue(event.target.value);
  };

  // Function to update currency input when range changes
  const updateCurrencyOnRangeChange = (event) => {
    setCurrencyValue(event.target.value);
  };

  return (
    <div>
      <form className="max-w-[24rem] mx-auto mt-[105px]">
        <div className="flex mb-4">
          <button
            id="dropdown-currency-button"
            data-dropdown-toggle="dropdown-currency"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            <svg
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 me-2"
              viewBox="0 0 20 15"
            >
              <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
              <mask
                id="a"
                style={{ maskType: "luminance" }}
                width={20}
                height={15}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
              >
                <rect width="19.6" height={14} y=".5" fill="#fff" rx={2} />
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#D02F44"
                  fillRule="evenodd"
                  d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                  clipRule="evenodd"
                />
                <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                <g filter="url(#filter0_d_343_121520)">
                  <path
                    fill="url(#paint0_linear_343_121520)"
                    fillRule="evenodd"
                    d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                    clipRule="evenodd"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_343_121520"
                  x1=".933"
                  x2=".933"
                  y1="1.433"
                  y2="6.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset={1} stopColor="#F0F0F0" />
                </linearGradient>
                <filter
                  id="filter0_d_343_121520"
                  width="6.533"
                  height="5.667"
                  x=".933"
                  y="1.433"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy={1} />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_343_121520"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_343_121520"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            USD{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown-currency"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-currency-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <rect
                        width="19.6"
                        height={14}
                        y=".5"
                        fill="#fff"
                        rx={2}
                      />
                      <mask
                        id="a"
                        style={{ maskType: "luminance" }}
                        width={20}
                        height={15}
                        x={0}
                        y={0}
                        maskUnits="userSpaceOnUse"
                      >
                        <rect
                          width="19.6"
                          height={14}
                          y=".5"
                          fill="#fff"
                          rx={2}
                        />
                      </mask>
                      <g mask="url(#a)">
                        <path
                          fill="#D02F44"
                          fillRule="evenodd"
                          d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                          clipRule="evenodd"
                        />
                        <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                        <g filter="url(#filter0_d_343_121520)">
                          <path
                            fill="url(#paint0_linear_343_121520)"
                            fillRule="evenodd"
                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                            clipRule="evenodd"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_343_121520"
                          x1=".933"
                          x2=".933"
                          y1="1.433"
                          y2="6.1"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#F0F0F0" />
                        </linearGradient>
                        <filter
                          id="filter0_d_343_121520"
                          width="6.533"
                          height="5.667"
                          x=".933"
                          y="1.433"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy={1} />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_343_121520"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_343_121520"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    USD
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                ></button>
              </li>
            </ul>
          </div>
          <label
            htmlFor="currency-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <div className="relative w-full">
            <input
              type="number"
              id="currency-input"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:bg-purple-500 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-black-500"
              placeholder="Enter amount"
              value={currencyValue}
              onChange={updateCurrencyInput}
              required=""
            />
          </div>
        </div>
        <div className="relative">
          <label htmlFor="price-range-input" className="sr-only">
            Default range
          </label>
          <input
            id="price-range-input"
            type="range"
            defaultValue={1000}
            min={100}
            max={1500}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-purple-400"
            onChange={updateCurrencyOnRangeChange}
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
            Min ($100)
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            $500
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
            $1000
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
            Max ($1500)
          </span>
        </div>
      </form>
    </div>
  );
};

export default Pricefilter;
