import React, { useState, useEffect } from 'react';
import Slide from "../../components/slide.jsx";
import MarqueeLeft from "../../components/Marquee-left.jsx"; 
import MarqueeRight from "../../components/Marquee-right.jsx"; 
import Footer from "../../components/footer";
import Card from "../../components/Card";
import Productsearch from "../../components/productsearch";
import PriceFilter from "../../components/pricefilter";
import Filter from "../../components/filter";
import api from "../../api/crud";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
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
    getProducts();
  }, []);

  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex  justify-center items-center h-screen bg-black">
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
        <h1 className="text-center font-bold text-3xl font-sans pt-10 h-8">
          Popüler Ürünler
        </h1>
        <div className="flex flex-wrap justify-center">
          <Filter />
          <Productsearch onSearch={handleSearch} />
          <PriceFilter />
        </div>

        <div className="flex flex-wrap h-auto justify-around bg-white">
          {filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
