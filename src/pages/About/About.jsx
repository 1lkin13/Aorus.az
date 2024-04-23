import React from "react";
import Footer from "../../components/footer";

const About = () => {
  return (
    <>
      <section className="mx-auto dark:bg-gray-900 flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
        <div className="max-w-md pr-20 lg:pt-28">
          <img
            src="https://dlcdnrog.asus.com/rog/media/1652407699784.webp"
            alt=""
          />
        </div>
        <div className="">
          <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl text-white lg:leading-snug">
            <span className="text-purple-400">AORUS</span> sizin üçün edir
          </h2>
          <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
            <div>
              <p className="mb-6 border-l-4 text-purple-400 font-bold border-purple-600 pl-4 text-2xl leading-10">
                Komputer Servisi
              </p>
              <p className="text-lg text-white ">
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
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full">
            <img
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
              src="https://dlcdnrog.asus.com/rog/media/1652407699784.webp"
              alt="billboard image"
            />
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-md mt-4">
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
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          {/*  */}
          <div className="md:hidden sm:block xs:block xs:w-full">
            <img
              className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
              src="https://img.zen-shop.sk/2022/03/110644-herny-notebook-asus-rog-strix-scar-17-06.png"
              alt="billboard image"
            />
          </div>
          {/*  */}
          <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-md mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              placeat assumenda nam veritatis, magni doloremque pariatur quos
              fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
              sed necessitatibus aliquam error laborum delectus quaerat.
              Delectus hic error eligendi sed repellat natus fuga nobis tempora
              possimus ullam!
            </p>
          </div>
          {/*  */}
          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
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
    </>
  );
};

export default About;
