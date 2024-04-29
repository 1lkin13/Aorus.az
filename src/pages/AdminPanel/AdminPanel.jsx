import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import api from "../../api/crud";

const AdminPanel = () => {
  const [newProduct, setNewProduct] = useState({
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
    model: "",
    processor: "",
    type: "",
    videocard: "",
  });

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    productsPerPage: 4,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [models, setModels] = useState([]);
  const [processors, setProcessors] = useState([]);
  const [types, setTypes] = useState([]);
  const [videoCards, setVideoCards] = useState([]);

  useEffect(() => {
    getProducts();
    fetchModels();
    fetchProcessors();
    fetchTypes();
    fetchVideoCards();
  }, []);

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchModels = async () => {
    try {
      const response = await api.get("/models");
      setModels(response.data);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  const fetchProcessors = async () => {
    try {
      const response = await api.get("/processors");
      setProcessors(response.data);
    } catch (error) {
      console.error("Error fetching processors:", error);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await api.get("/types");
      setTypes(response.data);
    } catch (error) {
      console.error("Error fetching types:", error);
    }
  };

  const fetchVideoCards = async () => {
    try {
      const response = await api.get("/videocards");
      setVideoCards(response.data);
    } catch (error) {
      console.error("Error fetching video cards:", error);
    }
  };

  const openModal = (product = null) => {
    if (product) {
      setNewProduct(product);
    } else {
      setNewProduct({
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
        model: "",
        processor: "",
        type: "",
        videocard: "",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const request = { ...newProduct };
    await api.post("/products", request);
    setNewProduct({
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
      model: "",
      processor: "",
      type: "",
      videocard: "",
    });
    getProducts();
    closeModal();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const request = {
      ...newProduct,
      additionalImages: newProduct.additionalImages.filter(
        (image) => image !== ""
      ),
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

  const toggleStock = () => {
    setNewProduct({ ...newProduct, stock: !newProduct.stock });
  };

  const stockStatusText = newProduct.stock ? "Stokta Var" : "Stokta Yok";

  const indexOfLastProduct =
    pagination.currentPage * pagination.productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - pagination.productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setPagination({ ...pagination, currentPage: pageNumber });
  };

  const count = (number) => {
    return pagination.currentPage * pagination.productsPerPage + number + 1;
  };

  return (
    <div className="admin-panel">
      <div className="flex justify-between">
        <h2 className="h2 font-bold">Salam Dəyərli Admin ❤️</h2>
        <button onClick={() => openModal()} className="add-button">
          Məhsul Əlavə Et
        </button>
      </div>

      {isModalOpen && (
        <div className="modal ">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="font-bold text-purple-700">
              {newProduct.id ? "Düzəliş Et" : "Əlavə Et"}
            </h2>
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
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="price">
                    Endirimsiz Qiyməti:
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="input-field"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="discountedPrice">
                    Yekun Qiymət:
                  </label>
                  <input
                    type="number"
                    id="discountedPrice"
                    className="input-field"
                    value={newProduct.discountedPrice}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        discountedPrice: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="image">
                    Əsas Rəsim Linki :
                  </label>
                  <input
                    type="text"
                    id="image"
                    className="input-field"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                    required
                  />
                </div>

                {newProduct.additionalImages &&
                  newProduct.additionalImages.map((image, index) => (
                    <div className="input-container" key={index}>
                      <label
                        className="label"
                        htmlFor={`additionalImage${index + 1}`}
                      >
                        Əlavə Rəsim Linki {index + 1}:
                      </label>
                      <input
                        type="text"
                        id={`additionalImage${index + 1}`}
                        className="input-field"
                        value={image}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            additionalImages: newProduct.additionalImages.map(
                              (item, i) => (i === index ? e.target.value : item)
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
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, CPU: e.target.value })
                    }
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
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, RAM: e.target.value })
                    }
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
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, SSD: e.target.value })
                    }
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
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, GFX: e.target.value })
                    }
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
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, LCD: e.target.value })
                    }
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="OS">
                    Əməliyyat Sistemi:
                  </label>
                  <input
                    type="text"
                    id="OS"
                    className="input-field"
                    value={newProduct.OS}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, OS: e.target.value })
                    }
                  />
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="model">
                    Model:
                  </label>
                  <select
                    id="model"
                    className="input-field"
                    value={newProduct.model}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, model: e.target.value })
                    }
                  >
                    <option value="">Model seçin</option>
                    <option value="Asus">Asus</option>
                    <option value="MSI">MSI</option>
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Digər">Digər</option>

                    {models.map((model) => (
                      <option key={model.id} value={model.name}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="processor">
                    Prosessor:
                  </label>
                  <select
                    id="processor"
                    className="input-field"
                    value={newProduct.processor}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        processor: e.target.value,
                      })
                    }
                  >
                    <option value="">Prosessor seçin</option>
                    <option value="Intel">Intel</option>
                    <option value="AMD">AMD</option>
                    <option value="Digər">Digər</option>

                    {processors.map((processor) => (
                      <option key={processor.id} value={processor.name}>
                        {processor.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="type">
                    Tip:
                  </label>
                  <select
                    id="type"
                    className="input-field"
                    value={newProduct.type}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, type: e.target.value })
                    }
                  >
                    <option value="">Tip seçin</option>
                    <option value="Business">Business</option>
                    <option value="Dizayn">Dizayn</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Digər">Digər</option>

                    {types.map((type) => (
                      <option key={type.id} value={type.name}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-container">
                  <label className="label" htmlFor="videocard">
                    Video Kartı:
                  </label>
                  <select
                    id="videocard"
                    className="input-field"
                    value={newProduct.videocard}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, videocard: e.target.value })
                    }
                  >
                    <option value="">Video Kartı seçin</option>
                    <option value="4050">RTX 4050</option>
                    <option value="4060">RTX 4060</option>
                    <option value="4070">RTX 4070</option>
                    <option value="4080">RTX 4080</option>
                    <option value="4090">RTX 4090</option>
                    <option value="Digər">Digər</option>

                    {videoCards.map((videoCard) => (
                      <option key={videoCard.id} value={videoCard.name}>
                        {videoCard.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-container w-40 rounded items-center bg-purple-100">
                  <div className="stock flex justify-start">
                    <label className="label mr-3" htmlFor="stock">
                      Stok Statusu:
                    </label>
                    <input
                      type="checkbox"
                      id="stock"
                      className="stock-checkbox cursor-pointer"
                      checked={newProduct.stock}
                      onChange={toggleStock}
                    />
                  </div>
                  <span className="stock-text text-purple-600 font-bold">
                    {newProduct.stock ? "Var" : "Yoxdur"}
                  </span>
                </div>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  onClick={closeModal}
                  className="cancel-button"
                >
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
            <th>Məhsul Adı</th>
            <th>Endirimsiz Qiyməti</th>
            <th>Yekun Qiymət</th>
            <th>Stok Statusu</th>
            <th>Şəkli</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{count(index)}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.discountedPrice}</td>
                <td className="text-center font-bold text-2xl">
                  <span style={{ color: product.stock ? "green" : "red" }}>
                    {product.stock ? (
                      <i className="fas fa-check-circle"></i>
                    ) : (
                      <i className="fas fa-times-circle"></i>
                    )}
                  </span>
                </td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </td>
                <td>
                  <button
                    onClick={() => openModal(product)}
                    className="edit-button"
                  >
                    Düzəlt
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="delete-button"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                Henüz ürün bulunmamaktadır.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(products.length / pagination.productsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={pagination.currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
