import React, { useEffect,useState } from 'react';
import Card from '../../components/Card';
import { fakeData } from '../../constants/constant';
import Productsearch from '../../components/productsearch';
import PriceFilter from '../../components/pricefilter';
import Filter from '../../components/filter';
import Sectionone from '../../components/sectionone';
import Footer from '../../components/footer';
import api from '../../api/crud'
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
const [productlist,setProductList]=useState();

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredProducts = fakeData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
const getProducts=async()=>{
const response=await api.get("/products")
if (response.data.length) {
  setProductList(response.data)
  
}
}
useEffect(() => {
    getProducts()

}, []);

  return (
    <div className="mt-[80px] md:mt-0">
      <Sectionone />
      <div className="w-full bg-neutral-100">
        <h1 className="text-center font-bold text-3xl font-sans pt-10 h-8">
          Populyar Məhsullar
        </h1>
        <div className="flex flex-wrap justify-center">   
        <Filter />
          <Productsearch onSearch={handleSearch} />
          <PriceFilter />
       
        </div>

        <div className="flex flex-wrap justify-around bg-neutral-100">
          {productlist && productlist.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;