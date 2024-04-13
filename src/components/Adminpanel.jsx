import React, { useState } from 'react';
import '../css/AdminPanel.css';

const AdminPanel = ({ products, onUpdate, onAdd, onDelete }) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    price: '',
    image: '',
    stock: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product = null) => {
    if (product) {
      setNewProduct(product);
    } else {
      setNewProduct({
        id: '',
        title: '',
        price: '',
        image: '',
        stock: false,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    onAdd(newProduct);
    const updatedProducts = [...products, newProduct];
    onUpdate(updatedProducts);
    closeModal();
    alert('Ürün başarıyla eklendi!');
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Bu ürünü silmek istediğinizden emin misiniz?');
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      onDelete(id);
      onUpdate(updatedProducts);
      alert('Ürün başarıyla silindi!');
    }
  };

  const handleUpdate = () => {
    onUpdate(newProduct);
    closeModal();
    alert('Ürün başarıyla güncellendi!');
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <button onClick={() => openModal()} className="add-button">Ürün Ekle</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Ürün {newProduct.id ? 'Güncelle' : 'Ekle'}</h2>
            <form onSubmit={newProduct.id ? handleUpdate : handleAdd}>
              <div className="input-container">
                <label className="label" htmlFor="title">Başlık:</label>
                <input
                  type="text"
                  id="title"
                  className="input-field"
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                  required
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="price">Fiyat:</label>
                <input
                  type="text"
                  id="price"
                  className="input-field"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  required
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="image">Resim URL:</label>
                <input
                  type="text"
                  id="image"
                  className="input-field"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  required
                />
              </div>

              <div className="input-container">
                <label className="label">
                  Stok Durumu:
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.checked })}
                  />
                  {newProduct.stock ? 'Stok Var' : 'Stok Yok'}
                </label>
              </div>

              <div className="button-container">
                <button type="button" onClick={closeModal} className="cancel-button">İptal</button>
                <button type="submit" className="add-update-button">{newProduct.id ? 'Güncelle' : 'Ekle'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Başlık</th>
            <th>Fiyat</th>
            <th>Resim</th>
            <th>Stok Durumu</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt={product.title} className="product-image" /></td>
              <td>{product.stock ? 'Stok Var' : 'Stok Yok'}</td>
              <td>
                <button onClick={() => openModal(product)} className="edit-button">Düzenle</button>
                <button onClick={() => handleDelete(product.id)} className="delete-button">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
