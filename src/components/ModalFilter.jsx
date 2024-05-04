import React, { useState } from "react";

const ModalFilter = ({ products, applyFilters }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProcessor, setSelectedProcessor] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedGraphicsCard, setSelectedGraphicsCard] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (selectedProcessor && selectedProcessor !== "Hamısı") {
      filteredProducts = filteredProducts.filter(
        (product) => product.processor === selectedProcessor
      );
    }

    if (selectedType && selectedType !== "Hamısı") {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === selectedType
      );
    }

    if (selectedModel && selectedModel !== "Hamısı") {
      filteredProducts = filteredProducts.filter(
        (product) => product.model === selectedModel
      );
    }

    if (selectedStock === "Stok var") {
      filteredProducts = filteredProducts.filter((product) => product.stock);
    } else if (selectedStock === "Stok Yoxdur") {
      filteredProducts = filteredProducts.filter((product) => !product.stock);
    }

    if (selectedGraphicsCard && selectedGraphicsCard !== "Hamısı") {
      filteredProducts = filteredProducts.filter(
        (product) => product.graphicsCard === selectedGraphicsCard
      );
    }

    applyFilters(filteredProducts);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    < div className="">
     <button onClick={openModal} className=" right-0 mr-1 inline-flex h-12 items-center mb-3 sm:mb-0 justify-center rounded-lg  bg-purple-700  px-6 font-medium text-white focus:ring-4 hover:bg-gray-700">
  Filtirləmə
</button>

      {showModal && (
        <div className="fixed  z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom dark:bg-gray-800 w-full rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="dark:bg-gray-800  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex  flex-wrap sm:items-start">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-white" id="modal-headline">
                      Ətraflı Axtarış
                    </h3>
                    <div className="mb-4">
                      <label htmlFor="selectProcessor" className="text-purple-500  text-sm font-medium">
                        Prossesor Növü
                      </label>
                      <select
                        id="selectProcessor"
                        className="mt-2 block w-full rounded-md border text-sm cursor-pointer border-purple-200 px-2 py-2 shadow-sm outline-none focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                        value={selectedProcessor}
                        onChange={(e) => setSelectedProcessor(e.target.value)}
                        
                      >
                        <option className=""   value="" >Hamısı</option>
                        <option  value="Intel">Intel</option>
                        <option value="AMD Ryzen">AMD Ryzen</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="selectType" className="text-purple-500 text-sm font-medium">
                        İstifadə Sahəsi
                      </label>
                      <select
                        id="selectType"
                        className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none  focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                      >
                        <option value="">Hamısı</option>
                        <option value="Business">Business</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Design">Design</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="selectModel" className="text-purple-500 text-sm font-medium">
                        Model
                      </label>
                      <select
                        id="selectModel"
                        className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none  focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                      >
                        <option value="">Hamısı</option>
                        <option value="Asus">Asus</option>
                        <option value="Acer">Acer</option>
                        <option value="Dell">Dell</option>
                        <option value="MSI">MSI</option>
                        <option value="HP">HP</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Digər">Digər</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="selectStock" className="text-purple-500 text-sm font-medium">
                        Stok Statusu
                      </label>
                      <select
                        id="selectStock"
                        className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none  focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                        value={selectedStock}
                        onChange={(e) => setSelectedStock(e.target.value)}
                      >
                        <option value="">Hamısı</option>
                        <option value="Stok var">Stok var</option>
                        <option value="Stok Yoxdur">Stok Yoxdur</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="selectGraphicsCard" className="text-purple-500 text-sm font-medium">
                        Ekran Kartı
                      </label>
                      <select
                        id="selectGraphicsCard"
                        className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none  focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                        value={selectedGraphicsCard}
                        onChange={(e) => setSelectedGraphicsCard(e.target.value)}
                      >
                        <option value="">Hamısı</option>
                        <option value="RTX 4050">RTX 4050</option>
                        <option value="RTX 4060">RTX 4060</option>
                        <option value="RTX 4070">RTX 4070</option>
                        <option value="RTX 4080">RTX 4080</option>
                        <option value="RTX 4090">RTX 4090</option>
                        <option value="Digər">Digər</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    setSelectedProcessor("");
                    setSelectedType("");
                    setSelectedModel("");
                    setSelectedStock("");
                    setSelectedGraphicsCard("");
                    filterProducts();
                    setShowModal(false);
                  }}
                >
                  Sıfırla
                </button>
                <button
                  type="button"
                  onClick={() => {
                    filterProducts();
                    setShowModal(false);
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Filtirlə
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalFilter;
