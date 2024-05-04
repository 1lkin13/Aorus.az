import React from 'react'

function Stats() {
  return (
    <div>
        <section className="relative overflow-hidden bg-slate-50  sm:py-16 lg:py-20">
    <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
      <div className="absolute h-60 w-60 rounded-2xl border-4 border-purple-600" />
      <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-purple-600" />
      <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-purple-600" />
    </div>
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
     
        <h3 className="font-semibold  sm:text-center text-gray-900 text-3xl ">
          Biz 
          sürətlə böyüyürük
        </h3>
        <hr className="mt-4 h-1.5 w-32 border-none bg-purple-600 sm:mx-auto sm:mt-8" />
      
      <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
        <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
          <p className="relative text-5xl font-black text-purple-600">2500+</p>
          <p className="relative mt-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            doloremque vel
          </p>
        </div>
        <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
          <p className="relative text-5xl font-black text-purple-600">90+</p>
          <p className="relative mt-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            doloremque vel
          </p>
        </div>
        <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
          <p className="relative m-0 text-5xl font-black text-purple-600">8529+</p>
          <p className="relative mt-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            doloremque vel
          </p>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Stats