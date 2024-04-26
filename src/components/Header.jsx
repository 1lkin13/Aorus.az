import React from 'react'

function Header() {
  return (
    <>
 
   
      <div className="relative flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
        {/* Left Column */}
        <div className="my-auto mx-auto  ml-4 w-full max-w-xl md:mt-20 lg:max-w-screen-xl">
          <div className=" lg:mb-0 lg:max-w-lg">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-indigo-900">
                 2021-ci ildən etibarən
                </p>
              </div>
              <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                Azərbaycanın <br />
                <span className="inline-block font-bold text-purple-600">
                  Ən Böyük Komputer Mağazası
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Aourus, elektronika və kompüter satışı ilə məşğul olan bir mağazadır. Biz müştərilərimizə son texnologiyalarla uyğun elektronika və kompüter məhsullarını təqdim edirik
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="/"
                className="mr-6 inline-flex h-12 items-center justify-center rounded bg-purple-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-orange-400 focus:ring"
              >
              
               Haqqımızda
              </a>
             
            </div>
          </div>
        </div>
        {/* /Left Column */}
        {/* Right Column */}
        <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end lg:px-2">
          {/* Col 2 */}
          <div className="my-auto hidden w-56 flex-col space-y-3 md:mt-20 lg:flex">
            <div className="rounded-xl bg-yellow-400 h-96">
              <img
                className="h-full w-full object-cover mx-auto rounded-xl"
                src="https://i.redd.it/o8e37stdby571.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="my-auto flex space-x-3 rounded-xl md:mt-16 md:w-60 md:flex-col md:space-y-3 md:space-x-0 md:px-4">
            <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
              <img
                className="mx-auto h-full w-full object-cover"
                src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/734546229001/869bfaca-9962-4ad1-892e-61110c5407c9/2212939c-5b90-4be2-9cee-673c290b8a1a/1920x1080/match/image.jpg"
                alt=""
              />
            </div>
            <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
              <img
                className="mx-auto h-full w-full object-cover"
                src="https://dlcdnrog.asus.com/rog/media/1694045201898.webp"
                alt=""
              />
            </div>
            <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
              <img
                className="mx-auto h-full w-full object-cover "
                src="https://www.hindustantimes.com/ht-img/img/2024/01/12/1600x900/gaming_laptops_1705053367280_1705053397282.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* /Right Column */}
      </div>
 
  </>
  
  )
}

export default Header