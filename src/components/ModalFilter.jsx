import React, { useEffect } from "react";
import api from "../api/crud";


const ModalFilter = ({ product }) => {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  if (!product) {
    return null; // Product prop tanımlı değilse modalı gösterme
  }

  const { id, model, processor, type, videocard, stock } = product;

  return (
    <>
      <button
        className="bg-purple-900 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 h-16 mt-24 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ətraflı Axtarış
      </button>
      {showModal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
          {/* Modal */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mt-0 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="text-blueGray-500 text-lg leading-relaxed">
                    <div className="max-w-screen-md">
                      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                        <h2 className="text-stone-700 text-xl font-bold">
                          Filtirləmə Edin
                        </h2>
                        <p className="mt-1 text-sm">
                          Sizin üçün ən yaxşı seçimi edirik
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          <div className="flex flex-col">
                            <label
                              htmlFor="model"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Model
                            </label>
                            <input
                              id="model"
                              type="text"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                              value={model}
                              readOnly
                            />
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="processor"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Processor
                            </label>
                            <input
                              id="processor"
                              type="text"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                              value={processor}
                              readOnly
                            />
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="type"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Type
                            </label>
                            <input
                              id="type"
                              type="text"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                              value={type}
                              readOnly
                            />
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="videocard"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Videocard
                            </label>
                            <input
                              id="videocard"
                              type="text"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                              value={videocard}
                              readOnly
                            />
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="stock"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Stock
                            </label>
                            <input
                              id="stock"
                              type="text"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                              value={stock ? "In Stock" : "Out of Stock"}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="mt-0 pt-4 border-t border-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalFilter;
