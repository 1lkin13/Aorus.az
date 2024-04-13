import { useState } from "react";
import {
  FaLaptop,
  FaDesktop,
  FaTabletAlt,
  FaHeadphones,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const CategoryList = () => {
  const categories = [
    {
      name: "Laptop",
      icon: <FaLaptop />,
      subcategories: ["Gaming Laptop", "Business Laptop", "Ultrabook"],
    },
    {
      name: "Masaüstü",
      icon: <FaDesktop />,
      subcategories: ["Gaming Desktop", "Office Desktop", "Mini PC"],
    },
    {
      name: "Masaüstü",
      icon: <FaDesktop />,
      subcategories: ["Gaming Desktop", "Office Desktop", "Mini PC"],
    },
    {
      name: "Tablet",
      icon: <FaTabletAlt />,
      subcategories: ["iPad", "Android Tablet", "Windows Tablet"],
    },
    {
      name: "Tablet",
      icon: <FaTabletAlt />,
      subcategories: ["iPad", "Android Tablet", "Windows Tablet"],
    },
    {
      name: "Aksesuarlar",
      icon: <FaHeadphones />,
      subcategories: ["Kulaklık", "Klavye", "Fare", "Monitör"],
    },
    {
      name: "Aksesuarlar",
      icon: <FaHeadphones />,
      subcategories: ["Kulaklık", "Klavye", "Fare", "Monitör"],
    },
  ];

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };

  return (
    <div className="flex flex-col gap-1 pt-10 w-72 m-auto">
      <div className=" font-medium mb-2 text-white text-center font-sans text-3xl">
        Kategoriyalar
      </div>
      {categories.map((category, index) => (
        <div key={index} className="relative">
          <div
            className="flex items-center p-3 rounded-lg shadow-md dark:border-purple-100 bg-white dark:bg-white-800 cursor-pointer"
            onClick={() => toggleCategory(index)}
          >
            <div className="mr-3 bg-purple">{category.icon}</div>
            <span className="text-lg font-medium">{category.name}</span>
            <div className="ml-auto">
              {expandedCategory === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          {expandedCategory === index && (
            <div className="absolute z-30 top-full right-0    w-56 mt-1 p-2 font-semibold bg-white dark:bg-white-800 rounded-lg shadow-md border dark:border-1 border-black ">
              {category.subcategories.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  className="text-xl py-1 cursor-pointer hover:bg-black-100 dark:hover:text-purple-900"
                >
                  {subCategory}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
