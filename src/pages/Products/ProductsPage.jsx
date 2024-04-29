// ProductsPage.jsx

import React, { useState, useEffect } from 'react';
import Slide from "../../components/slide.jsx";
import MarqueeLeft from "../../components/Marquee-left.jsx"; 
import MarqueeRight from "../../components/Marquee-right.jsx"; 
import Footer from "../../components/footer";
import Card from "../../components/Card";
import Productsearch from "../../components/productsearch";
import ModalFilter from "../../components/ModalFilter";
import api from "../../api/crud";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        if (response.data.length) {
          setProductList(response.data);
          setFilteredProducts(response.data); // Initialize filteredProducts with all products
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    // Filter products based on searchTerm
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, productList]);

  const applyFilters = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="w-1/3 h-full flex justify-around">
          <MarqueeLeft /> 
        </div>
        <div className="w-[800px] h-auto relative">
          <div className=" inset-0 flex items-center justify-center">
            <Slide /> 
          </div>
        </div>
        <div className="w-1/3 h-full flex justify-around">
          <MarqueeRight /> 
        </div>
      </div>
      <div className="w-full bg-neutral-100">
        <div className='w-full bg-purple-500'> <h1 className="text-center font-bold text-5xl font-sans pt-5 h-5">
          Məhsullar
        </h1>
        <div className="flex flex-wrap justify-center items-center h-44">
          <ModalFilter products={productList} applyFilters={applyFilters} />
          <Productsearch onSearch={handleSearch} />
        </div>
</div>
       
        <div className="flex flex-wrap h-auto  pl-7 justify-start  bg-white">
          {filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
