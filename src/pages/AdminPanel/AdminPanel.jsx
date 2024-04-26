import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import api from "../../api/crud";

const AdminPanel = () => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    price: "",
    discountedPrice: "",
    image: "",
    additionalImages: ["", ""], // Ek resimler için dizi
    stock: false,
    CPU: "",
    RAM: "",
    SSD: "",
    GFX: "",
    LCD: "",
    OS: "",
    
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
        discountedPrice: "",
        image: "",
        additionalImages: ["", ""],
        stock: false,
        CPU: "",
        RAM: "",
        SSD: "",
        GFX: "",
        LCD: "",
        OS: "",
       
      
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
    setNewProduct({
      id: "",
      title: "",
      price: "",
      discountedPrice: "",
      image: "",
      additionalImages: ["", ""],
      stock: false,
      CPU: "",
      RAM: "",
      SSD: "",
      GFX: "",
      LCD: "",
      OS: "",
      Weight: "",
      Color: "",
      P_N: "",
      Warranty: "",
    });
    getProducts();
    closeModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const request = {
      ...newProduct,
      additionalImages: newProduct.additionalImages.filter((image) => image !== ""),
    };
    await api.put(`/products/${newProduct.id}`, request);
    getProducts();
    closeModal();
  };

  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
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
    return pagination.currentPage * pagination.productsPerPage + number + 1;
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
            <h2 className="font-bold text-purple-700">{newProduct.id ? " Düzəlt" : "Əlavə Et"}</h2>
            <form onSubmit={newProduct.id ? handleUpdate : handleAdd}>
              <div className="main-cover">
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
                    Fiyat:
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
                  <label className="label" htmlFor="discountedPrice">
                    İndirimli Fiyat:
                  </label>
                  <input
                    type="number"
                    id="discountedPrice"
                    className="input-field"
                    value={newProduct.discountedPrice}
                    onChange={(e) => setNewProduct({ ...newProduct, discountedPrice: e.target.value })}
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="image">
                    Ana Resim Linki:
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

                {/* Ek resimler için input alanları */}
                {newProduct.additionalImages.map((image, index) => (
                  <div className="input-container" key={index}>
                    <label className="label" htmlFor={`additionalImage${index + 1}`}>
                      Ek Resim Linki {index + 1}:
                    </label>
                    <input
                      type="text"
                      id={`additionalImage${index + 1}`}
                      className="input-field"
                      value={image}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          additionalImages: newProduct.additionalImages.map((item, i) =>
                            i === index ? e.target.value : item
                          ),
                        })
                      }
                    />
                  </div>
                ))}

                <div className="input-container">
                  <label className="label" htmlFor="CPU">
                    CPU:
                  </label>
                  <input
                    type="text"
                    id="CPU"
                    className="input-field"
                    value={newProduct.CPU}
                    onChange={(e) => setNewProduct({ ...newProduct, CPU: e.target.value })}
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="RAM">
                    RAM:
                  </label>
                  <input
                    type="text"
                    id="RAM"
                    className="input-field"
                    value={newProduct.RAM}
                    onChange={(e) => setNewProduct({ ...newProduct, RAM: e.target.value })}
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="SSD">
                    SSD:
                  </label>
                  <input
                    type="text"
                    id="SSD"
                    className="input-field"
                    value={newProduct.SSD}
                    onChange={(e) => setNewProduct({ ...newProduct, SSD: e.target.value })}
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="GFX">
                    GFX:
                  </label>
                  <input
                    type="text"
                    id="GFX"
                    className="input-field"
                    value={newProduct.GFX}
                    onChange={(e) => setNewProduct({ ...newProduct, GFX: e.target.value })}
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="LCD">
                    LCD:
                  </label>
                  <input
                    type="text"
                    id="LCD"
                    className="input-field"
                    value={newProduct.LCD}
                    onChange={(e) => setNewProduct({ ...newProduct, LCD: e.target.value })}
                  />
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="OS">
                    OS:
                  </label>
                  <input
                    type="text"
                    id="OS"
                    className="input-field"
                    value={newProduct.OS}
                    onChange={(e) => setNewProduct({ ...newProduct, OS: e.target.value })}
                  />
                </div>

                {/* Diğer alanlar da aynı şekilde eklenebilir */}
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
          <tr>
            <th>ID</th>
            <th>Məhsulun Adı</th>
            <th>Fiyat</th>
            <th>İndirimli Fiyat</th>
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
              <td>{product.discountedPrice}</td>
              <td className="text-center font-bold text-2xl">
                <span style={{ color: product.stock ? "green" : "red" }}>{product.stock ? "✔" : "✘"}</span>
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
