import React from 'react';

const Card = ({ product, onDelete }) => {
  const { id, image, title, price, stock } = product;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="relative m-10 flex w-[230px] h-80 max-w-xs flex-col overflow-hidden rounded-lg border cursor-pointer border-gray-100 hover:shadow-purple-300  hover:scale-110 transition-transform duration-1000 bg-white shadow-xl">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-scale-down w-full" src={image} alt="product" />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-lg tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">{price}</span>
            <span className="w-20 h-6 ml-3 font-bold text-purple-600">{stock ? 'Stok var' : 'Stokta yok'}</span>
          </p>
        </div>
        <div className="button-group">
          <button onClick={handleDelete}>Sil</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
