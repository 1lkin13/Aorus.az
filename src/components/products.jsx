import React from 'react';
import AdminPanel from '../components/Adminpanel'; // Yolu kontrol edin

const Products = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdate = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AdminPanel products={products} onUpdate={handleUpdate} onAdd={handleAdd} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Products;
