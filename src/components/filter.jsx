import React, { useEffect } from "react";

export default function Modal() {
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

  return (
    <>
      <button
        className="bg-purple-900 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 h-16 mt-24 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ətraflı Axtarış
      </button>
      {showModal ? (
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
                  <div className=" text-blueGray-500 text-lg leading-relaxed">
                    <div className=" max-w-screen-md">
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
                              htmlFor="status"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Model
                            </label>
                            <select
                              id="status"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            >
                              <option>Asus</option>
                              <option>Lenova</option>
                              <option>HP</option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="status"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Color
                            </label>
                            <select
                              id="status"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            >
                              <option>Red</option>
                              <option>Blue</option>
                              <option>Silver</option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="status"
                              className="text-stone-600 text-sm font-medium"
                            >
                              Size
                            </label>
                            <select
                              id="status"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            >
                              <option>Small 14"</option>
                              <option>Medium 15.6"</option>
                              <option>Grant 17" </option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor="status"
                              className="text-stone-600 text-sm font-medium"
                            >
                              CPU
                            </label>
                            <select
                              id="status"
                              className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            >
                              <option>Intel</option>
                              <option>AMD Ryzen 5800h</option>
                              <option>Intel I9 13gen</option>
                              <option>AMD Ryzen7 6800h In</option>
                            </select>
                          </div>
                          <form
                            action=""
                            className="flex border-t border-gray-200 lg:border-t-0"
                          >
                            <fieldset className="w-full">
                              <legend className="block w-full bg-gray-50 px-5 py-3 text-base font-medium">
                                İstifadəsi
                              </legend>
                              <div className="space-y-2 px-5 py-6">
                                <div className="flex items-center">
                                  <input
                                    id="New"
                                    type="checkbox"
                                    name="type[New]"
                                    className="h-5 w-5 rounded border-gray-300"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="New"
                                    className="ml-3 text-sm font-medium"
                                  >
                                    {" "}
                                    Gaming{" "}
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="Used"
                                    type="checkbox"
                                    name="type[Used]"
                                    className="h-5 w-5 rounded border-gray-300"
                                  />
                                  <label
                                    htmlFor="Used"
                                    className="ml-3 text-sm font-medium"
                                  >
                                    {" "}
                                    Business{" "}
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="Branded"
                                    type="checkbox"
                                    name="type[Branded]"
                                    className="h-5 w-5 rounded border-gray-300"
                                  />
                                  <label
                                    htmlFor="Branded"
                                    className="ml-3 text-sm font-medium"
                                  >
                                    {" "}
                                    Oficce{" "}
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                            <fieldset className="w-full">
                              <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                                Price
                              </legend>
                              <div className="space-y-2 px-5 py-6">
                                <div className="flex items-center">
                                  <input
                                    id="300+"
                                    type="range"
                                    name="Price"
                                    defaultValue="300+"
                                    className="h-5 w-5 rounded border-gray-300"
                                  />
                                  <label
                                    htmlFor="300+"
                                    className="ml-3 text-sm font-medium"
                                  >
                                    {" "}
                                    300+{" "}
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="600+"
                                    type="radio"
                                    name="Price"
                                    defaultValue="600+"
                                    className="h-5 w-5 rounded border-gray-300"
                                  />
                                  <label
                                    htmlFor="600+"
                                    className="ml-3 text-sm font-medium"
                                  >
                                    {" "}
                                    600+{" "}
                                  </label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="1500+"
                                    type="radio"
                                    name="Price"
                                    defaultValue="1500+"
                                    className="h-5 w-5 rounded border-gray-300"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="1500+"
                                    className="ml-3 text-sm font-medium"
                                  >
                                    {" "}
                                    1500+{" "}
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </form>
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
      ) : null}
    </>
  );
}
