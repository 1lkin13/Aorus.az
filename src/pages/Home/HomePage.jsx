import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import Card from "../../components/Card";
import Sectionone from "../../components/sectionone";
import Footer from "../../components/footer";
import Review from "../../components/Review";
import Header from "../../components/Header";


import api from "../../api/crud";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      if (response.data.length) {
        setProductList(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === productList.length - 3 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? productList.length - 3 : prevSlide - 1));
  };

  return (
    <>
      <Header/>
      <div className="w-full bg-white">
        <div className="bg-white h-20">
          <h1 className="text-center font-bold text-3xl font-sans pt-10 h-8">Populyar Məhsullar</h1>
        </div>
        <div className="flex flex-wrap h-auto justify-around bg-white relative">
          <button className="absolute top-1/2 transform -translate-y-1/2 left-0 text-gray-700 text-4xl bg-white rounded-full p-2 hover:bg-gray-200 transition duration-300" onClick={handlePrevSlide}>
            <FiChevronLeft />
          </button>
          <button className="absolute top-1/2 transform -translate-y-1/2 right-0 text-gray-700 text-4xl bg-white rounded-full p-2 hover:bg-gray-200 transition duration-300" onClick={handleNextSlide}>
            <FiChevronRight />
          </button>
          {productList.slice(currentSlide, currentSlide + 3).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8 bg-white">
          <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
           <Link to={`/productspage`} className="flex font-sans items-end justify-end text-white">
             Daha Çox

            </Link>
          </button>
        </div>
      </div>
      <div className=" w-full  bg-white h-[500px]">
        
      <h1 className="text-center font-bold text-3xl font-sans mt-24  h-8">Onlar Bizi Seçdilər</h1>
        <Review/>
        
        </div>
    
      <div className="mt-20">
        <Footer />
      </div>
      </>
  );
};

export default HomePage;
