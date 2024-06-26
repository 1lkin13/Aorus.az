import React from "react";
import Footer from "../../components/footer";

const About = () => {
  return (
    < div className="w-full dark:bg-gray-900 ">
      <section className="w-full mx-auto dark:bg-gray-900  pt-32 flex max-w-lg flex-col  py-10 lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-md pr-0 sm:pr-16  rounded-md lg:pt-28">
          <img
          className="rounded-xl"
            src="https://dlcdnrog.asus.com/rog/media/1652407699784.webp"
            alt=""
          />
        </div>
        <div className="">
          <div className="mb-10 max-w-lg sm:mt-0 mt-10 font-bold text-center sm:text-start  leading-snug lg:text-3xl text-3xl text-white lg:leading-snug">
            <span className="text-purple-400 text-4xl">AORUS</span> sizin üçün edir
          </div>
          <div className="grid gap-y-12 gap-x-8  text-center  sm:text-start lg:grid-cols-2">
            <div>
              <p className="mb-6 border-l-4 text-purple-400 font-bold border-purple-600 pl-4 text-2xl leading-10">
                Komputer Servisi
              </p>
              <p className="text-lg text-white  ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 font-bold text-purple-400 border-purple-600 pl-4 text-2xl leading-10">
                Komputer Yığılması
              </p>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 font-bold text-purple-400 border-purple-600 pl-4 text-2xl leading-10">
                Tenxiki Proqram Təminatı
              </p>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
            <div>
              <p className="mb-6 border-l-4 font-bold text-purple-400 border-purple-600 pl-4 text-2xl leading-10">
                Lisenziya Xidmətləri
              </p>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                nihil reprehenderit laboriosam, exercitationem consectetur
                deserunt aliquam ab maiores!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-indigo-600">
          Niyə Biz?
        </div>
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto  sm:flex xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full">
            <img
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
              src="https://mattthecomputerman.com/wp-content/uploads/2022/03/gaming-pc-repair.jpg"
              alt="billboard image"
            />
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl  mt-2 text-center sm:text-start font-semibold text-gray-900 dark:text-purple-400">
              Zəmanətli servis xidməti 
            </h2>
            <p className="text-md text-start pl-2 sm:pl-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              placeat assumenda nam veritatis, magni doloremque pariatur quos
              fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat.
              Delectus hic error eligendi sed repellat natus fuga nobis tempora
              possimus ullam!
            </p>
          </div>
        </div>
        {/* col-2 */}
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto  sm:flex   xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/*  */}
          <div className="md:hidden sm:block xs:block xs:w-full">
            <img
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
              src="https://media.currys.biz/i/currysprod/tech-talk-pc-graphics-card"
              alt="billboard image"
            />
          </div>
          {/*  */}
          <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold mt-2 text-gray-900 text-center sm:text-start dark:text-purple-400">
             Peşəkar mütəxəssis komandası
            </h2>
            <p className="text-md mt-2 pl-2 sm:pl-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              placeat assumenda nam veritatis, magni doloremque pariatur quos
              fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat.
              Delectus hic error eligendi sed repellat natus fuga nobis tempora
              possimus ullam!
            </p>
          </div>
          {/*  */}
          <div className="md:block mt-2 sm:hidden xs:hidden lg:w-[50%] xs:w-full">
            <img
              className="lg:rounded-t-lg xs:rounded-sm"
              src="https://img.zen-shop.sk/2022/03/110644-herny-notebook-asus-rog-strix-scar-17-06.png"
              alt="billboard image"
            />
          </div>
        </div>
      </section>
      {/* Photo by '@candjstudios' & '@framesforyourheart' on Unsplash */}
      <Footer />
    </div>
  );
};

export default About;
