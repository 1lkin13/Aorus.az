import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import api from "../../api/crud";

const AdminPanel = () => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    stock: false,
  });

  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    productsPerPage: 3,
  });

  const getProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product = null) => {
    if (product) {
      setNewProduct(product);
    } else {
      setNewProduct({
        id: "",
        title: "",
        price: "",
        description: "",
        image: "",
        stock: false,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const request = {
      ...newProduct,
      id: String(id),
    };
    setId(id + 1);
    await api.post("/products", request);
    setNewProduct({});
    getProducts();
    closeModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await api.put(`/products/${newProduct.id}`, newProduct);
    getProducts();
    closeModal();
  };

  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
    setNewProduct({});
    getProducts();
    closeModal();
  };

  // Pagination Functions
  const indexOfLastProduct = pagination.currentPage * pagination.productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setPagination({ ...pagination, currentPage: pageNumber });
  };

  const count = (number) => {
    return (pagination.currentPage - 1) * pagination.productsPerPage + number + 1;
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <button onClick={() => openModal()} className="add-button">
        Məhsul Əlavə Et
      </button>

      {isModalOpen && (
        <div className="modal ">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="font-bold text-purple-700">{newProduct.id ?  " Düzəlt" : "Əlavə Et"}</h2>
            <form onSubmit={newProduct.id ? handleUpdate : handleAdd}>
              <div className="input-container">
                <label className="label" htmlFor="title">
                  Məhsul Adı:
                </label>
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
                <label className="label" htmlFor="price">
                 Qiyməti:
                </label>
                <input
                  type="number"
                  id="price"
                  className="input-field"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  required
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="description">
                 Haqqında:
                </label>
                <textarea
                  id="description"
                  className="input-field"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  required
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="image">
                  Şəkil URL:
                </label>
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
                  Stok Statusu:
                  <input
                    type="checkbox"
                    className="checkbox-input ml-5"
                    checked={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.checked })}
                  />
                  {newProduct.stock ? "Var" : "Yoxdur"}
                </label>
              </div>

              <div className="button-container">
                <button type="button" onClick={closeModal} className="cancel-button">
                  Ləğv Et
                </button>
                <button type="submit" className="add-update-button">
                  {newProduct.id ? "Düzəliş Et" : "Əlavə Et"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="product-table">
        <thead>
          <tr  >
            <th >ID</th>
            <th >Məhsulun Adı</th>
            <th>Qiyməti</th>
            <th>Şəkli</th>
            <th>Stok Statusu</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{count(index)}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={product.title} className="product-image" />
              </td>
              <td className="text-center font-bold text-2xl">
  <span style={{ color: product.stock ? 'green' : 'red' }}>
    {product.stock ? "✔" : "✘"}
  </span>
</td>
              <td>
                <button onClick={() => openModal(product)} className="edit-button">
                  Düzenle
                </button>
                <button onClick={() => handleDelete(product.id)} className="delete-button">
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / pagination.productsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={pagination.currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
