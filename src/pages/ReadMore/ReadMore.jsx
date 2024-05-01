import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../../components/footer";


const ReadMore = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/DB/database.json');
        if (!response.ok) {
          throw new Error('Veri getirme hatası: ' + response.status);
        }
        const data = await response.json();
        const foundProduct = data.products.find((item) => item.id === id);
        if (!foundProduct) {
          throw new Error('Ürün bulunamadı');
        }
        setProduct(foundProduct);
      } catch (error) {
        console.error('Ürün getirme hatası:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.additionalImages.length ? 0 : prevIndex + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.additionalImages.length : prevIndex - 1));
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <>
    <section className="text-gray-700 body-font pt-10">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto rounded shadow-yellow-300 flex flex-wrap bg-white relative">
          <div className="lg:w-1/2 w-full md:w-3/4 rounded relative">
            <div className="relative border-purple-800  border-4 rounded-lg ">
              <img
                alt="ecommerce"
                className="w-full h-full object-cover object-center"
                src={currentImageIndex === 0 ? product.image : product.additionalImages[currentImageIndex - 1]}
              />
              {(product.additionalImages.length > 0 || product.image) && (
                <div className="absolute bottom-0 right-0 mr-2 mb-2 flex gap-2">
                  <button onClick={previousImage} className="bg-gray-200   hover:bg-purple-400   rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={nextImage} className="bg-gray-200 hover:bg-purple-400 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm font-bold title-font text-purple-800 tracking-widest">Model Adı</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
          
            <div className="flex mt-6 items-center pb-5 border-b-2 border-purple-200 mb-5">
              <ul className="leading-relaxed">
                <li><strong>CPU:</strong> {product.CPU}</li>
                <li><strong>RAM:</strong> {product.RAM}</li>
                <li><strong>SSD:</strong> {product.SSD}</li>
                <li><strong>GFX:</strong> {product.GFX}</li>
                <li><strong>LCD:</strong> {product.LCD}</li>
                <li><strong>OS:</strong> {product.OS}</li>
              </ul>
            </div>
            <div className="flex items-center justify-around flex-wrap">
              <span><strong>{product.title}</strong> modelini ölkədaxili PULSUZ çatdırılma ilə mağazamızdan onlayn sifariş edə bilərsiniz.</span>
              <span><strong>{product.title}</strong> modeli gaming, dizayn kimi ağır təchizat tələb olunan işlərdə işlədə bilərsiz.</span>
              <span><strong>{product.title}</strong> modelini iş və dərs üçün də həmçinin istifadə edə bilərsiz.</span>
            </div>
            <div className="flex items-center justify-start mt-5">
              <span className="mr-10 title-font font-medium text-2xl text-gray-900">{product.price} Azn</span>
              <button className="flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                Sifariş Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default ReadMore;
