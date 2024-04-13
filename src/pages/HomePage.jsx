import React, { useState } from 'react';
import Sectionone from '../components/sectionone';
import Footer from '../components/footer';
import Products from '../components/products';
import { fakeData } from '../constants/constant';
import Card from '../components/Card'; // Card bileşenini import et

const HomePage = () => {
  const [products, setProducts] = useState(fakeData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="mt-[80px] md:mt-0">
      <Sectionone />
      <div className="w-full bg-neutral-100">
        <h1 className="text-center font-bold text-3xl font-sans pt-10 h-8">
          Popüler Ürünler
        </h1>
        <div className="flex flex-wrap justify-center">
          {/* Diğer filtreleme bileşenleri buraya eklenebilir */}
        </div>

        <div className="flex flex-wrap justify-around bg-neutral-100">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
