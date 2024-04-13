import React from 'react';

function ProductList() {
  return (
    
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="flex-1 flex items-center space-x-2">
              <h5>
                <span className="text-gray-500">All Products:</span>
                <span className="dark:text-white">123456</span>
              </h5>
              <h5 className="text-gray-500 dark:text-gray-400 ml-1">1-100 (436)</h5>
              <button type="button" className="group" data-tooltip-target="results-tooltip">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">More info</span>
              </button>
              <div id="results-tooltip" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Showing 1-100 of 436 results
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
            <div className="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3">
              <button type="button" className="flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
                </svg>
                Table settings
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" placeholder="Search for products" required="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button type="button" id="createProductButton" data-modal-toggle="createProductModal" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg className="h-3.5 w-3.5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add product
              </button>
              <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-1.5 -ml-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filter options
                <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div id="filterDropdown" className="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0">
                <div className="flex items-center justify-between pt-2">
                  <h6 className="text-sm font-medium text-black dark:text-white">Filters</h6>
                  <div className="flex items-center space-x-3">
                    <a href="#" className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">Save view</a>
                    <a href="#" className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">Clear all</a>
                  </div>
                </div>
                <div className="pt-3 pb-2">
                  <label htmlFor="input-group-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                      </svg>
                    </div>
                    <input type="text" id="input-group-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search keywords..." />
                  </div>
                </div>
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-black dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                  {/* Category */}
                  <h2 id="category-heading">
                    <button type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#category-body" aria-expanded="true" aria-controls="category-body">
                      <span>Category</span>
                      <svg aria-hidden="true" data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  </h2>
                  <div id="category-body" className="hidden" aria-labelledby="category-heading">
                    <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <input id="apple" type="checkbox" defaultValue="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="microsoft" type="checkbox" defaultValue="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="microsoft" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (45)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="logitech" type="checkbox" defaultValue="" defaultChecked className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="logitech" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Logitech (97)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="sony" type="checkbox" defaultValue="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="sony" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Sony (234)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="asus" type="checkbox" defaultValue="" defaultChecked className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Asus (97)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="dell" type="checkbox" defaultValue="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Dell (56)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="msi" type="checkbox" defaultValue="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="msi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">MSI (97)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="canon" type="checkbox" defaultValue="" defaultChecked className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="canon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Canon (49)</label>
                        </li>
                        <li className="flex items-center">
                          <input id="benq" type="checkbox" defaultValue="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label htmlFor="benq" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (89)</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Price */}
                  <h2 id="price-heading">
                    <button type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#price-body" aria-expanded="false" aria-controls="price-body">
                      <span>Price</span>
                      <svg aria-hidden="true" data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  </h2>
                  <div id="price-body" className="hidden" aria-labelledby="price-heading">
                    <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between">
                        <input type="text" id="price-from" className="w-1/2 p-2 text-sm border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="From" />
                        <input type="text" id="price-to" className="w-1/2 p-2 text-sm border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="To" />
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Range:</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">$0 - $2000</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <button type="button" className="text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">Apply</button>
                        <button type="button" className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline">Reset</button>
                      </div>
                    </div>
                  </div>
                  {/* Rating */}
                  <h2 id="rating-heading">
                    <button type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#rating-body" aria-expanded="false" aria-controls="rating-body">
                      <span>Rating</span>
                      <svg aria-hidden="true" data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  </h2>
                  <div id="rating-body" className="hidden" aria-labelledby="rating-heading">
                    <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                      <ul className="flex flex-col items-start space-y-2">
                        <li>
                          <input type="radio" id="rating-1" name="rating" defaultValue="1" className="sr-only" />
                          <label htmlFor="rating-1" className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-500">
                            <span className="sr-only">1 star</span>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="rating-2" name="rating" defaultValue="2" className="sr-only" />
                          <label htmlFor="rating-2" className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-500">
                            <span className="sr-only">2 stars</span>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="rating-3" name="rating" defaultValue="3" className="sr-only" />
                          <label htmlFor="rating-3" className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-500">
                            <span className="sr-only">3 stars</span>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="rating-4" name="rating" defaultValue="4" className="sr-only" />
                          <label htmlFor="rating-4" className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-500">
                            <span className="sr-only">4 stars</span>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="rating-5" name="rating" defaultValue="5" className="sr-only" />
                          <label htmlFor="rating-5" className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-500">
                            <span className="sr-only">5 stars</span>
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                            <svg className="w-5 h-5 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.696 1.855a1 1 0 011.12 0l2.55 1.53 2.55-1.53a1 1 0 111.12 1.664l-2.86 1.716 2.86 1.717a1 1 0 01-1.12 1.664l-2.55-1.53-2.55 1.53a1 1 0 01-1.12-1.664l2.86-1.717-2.86-1.716a1 1 0 010-1.664z" />
                            </svg>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    
    </section>
  
   
  );
}

export default ProductList;
