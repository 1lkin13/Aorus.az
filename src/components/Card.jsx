import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, image, title, price, stock } = product;

  return ( 
    <>
      <article className=" cursor-pointer relative w-72 mt-10 flex flex-col overflow-hidden rounded-lg border hover:shadow-purple-900 hover:scale-105 transition-transform duration-1000  shadow-md">
        <div className="aspect-square h-56 pt-0 overflow-hidden">
          <img
            className="h-50 w-64 m-auto object-cover object-center transition-all duration-300 group-hover:scale-125"
            src={product.image}
            alt=""
          />
        </div>
        <div className="absolute top-0 m-2 rounded-full bg-white">
          <p className="rounded-full bg-purple-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            20%
          </p>
        </div>
        <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between"> 
          <h3 className="mb-1 text-m text-center font-semibold text-black-400">{product.title}</h3>
          <div className="mb-2  justify-between items-center">
            <div className=""> 
            <del className="text-m text-red-400"> $79.00 </del>
            <div className=" flex justify-between items-center">
              <p className="text-xl font-semibold">{product.price} Azn</p>
             
  <span  className="ml-20 text-l font-bold items-center" style={{ color: product.stock ? 'green' : 'red' }}>
    {product.stock ? " Stok ✔" : "Stok ✘"}
  </span>
              </div>
            </div>
          </div>
        </div>
        <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div className="flex w-full items-center justify-center bg-purple-500 text-xs uppercase transition group-hover:bg-purple-600 group-hover:text-white">
            <Link to={`/readmore/${id}`} className="flex font-bold items-end justify-end text-white">
              Daha Ətraflı
            </Link>
          </div>
        </button>
      </article>
    </>
  );
};

export default Card;
