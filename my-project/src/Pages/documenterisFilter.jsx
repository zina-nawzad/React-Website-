import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/image1.webp";
import Image2 from "../assets/images/image2.webp";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image4.jpeg";
import Image5 from "../assets/images/birds.jpg";
import Image6 from "../assets/images/image6.webp";
import SeaAnimals from "../assets/images/SeaAnimals.jpeg";
import Horse from "../assets/images/Horse.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";

const DocLists = [
  {
    id: 1,
    name: "ژیانی ئاژەڵە کێوییەکان",
    img: Image1,
    link: "#",
  },
  { id: 2, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  {
    id: 3,
    name: "ژیانی ئاژەڵە کێوییەکان",
    img: Image3,
    link: "/DocDescription",
  },
  { id: 4, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 5, name: "ژیانی ئاژەڵە کێوییەکان", img: Image5, link: "#" },
  { id: 6, name: "ژیانی ئاژەڵە کێوییەکان", img: Image6, link: "#" },
  { id: 7, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 8, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 9, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 10, name: "ژیانی ئەسپەکان", img: Horse, link: "#" },
  { id: 11, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 12, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
  { id: 13, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 14, name: "ژیانی ئەسپەکان", img: Horse, link: "#" },
  { id: 15, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 16, name: "ژیانی ئاژەڵە کێوییەکان", img: Image5, link: "#" },
  { id: 17, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 18, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
  { id: 19, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 20, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 1, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
  { id: 2, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 3, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 4, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 5, name: "ژیانی ئاژەڵە کێوییەکان", img: Image5, link: "#" },
  { id: 6, name: "ژیانی ئاژەڵە کێوییەکان", img: Image6, link: "#" },
  { id: 7, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 8, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 9, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 10, name: "ژیانی ئەسپەکان", img: Horse, link: "#" },
  { id: 11, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 12, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
  { id: 13, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 14, name: "ژیانی ئەسپەکان", img: Horse, link: "#" },
  { id: 15, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 16, name: "ژیانی ئاژەڵە کێوییەکان", img: Image5, link: "#" },
  { id: 17, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 18, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
];

const DocFilter = [
  {
    id: 1,
    name: "جۆری دۆکیۆمێنتاری",
    dropdown: [
      { id: 1, name: "ژیانی ئاژەڵە کێوییەکان", link: "#" },
      { id: 2, name: "ژیانی ئەسپەکان", link: "#" },
      { id: 3, name: "ژیانی دەریاییەکان", link: "#" },
      { id: 4, name: "ژیانی ئاژەڵە کێوییەکان", link: "#" },
      { id: 5, name: "ژیانی ئەسپەکان", link: "#" },
      { id: 6, name: "ژیانی دەریاییەکان", link: "#" },
    ],
  },
];

const DocumenterisFilter = ({ isDarkMode }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const totalRecords = DocLists.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  // Slice the DocLists array to get the items for the current page
  const currentRecords = DocLists.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section
      className={`px-2 md:px-8 pt-20 ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className="flex flex-col justify-around gap-8 lg:gap-12">
        {/* Header */}
        <div className="flex items-center gap-2 mt-10">
          <div className="pl-2 md:pl-8">
            <h1 className="font-bold text-xl md:text-2xl">دۆکیۆمێنتارییەکان</h1>
          </div>
          <div className={`flex justify-between items-center relative`}>
            {DocFilter.map(({ id, name, dropdown }) => (
              <div key={id} className="inline-block text-right">
                <button
                  className={`flex items-center text-sm md:text-base justify-between gap-2 px-2 md:px-4 py-1 md:py-2 pb-2 md:pb-3 ${
                    openDropdown ? "rounded-t-3xl " : "rounded-full"
                  } ${
                    isDarkMode
                      ? "bg-gray-200 text-dark-primary"
                      : "bg-light-secondary text-white"
                  }`}
                  onClick={() => toggleDropdown(id)}
                >
                  {name}
                  <RiArrowDropDownLine
                    size={24}
                    className={`${openDropdown ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {openDropdown === id && (
                  <div
                    className={`absolute  w-full min-h-screen rounded-b-3xl z-20`}
                  >
                    {dropdown.map((item) => (
                      <Link
                        to={item.link}
                        key={item.id}
                        className={`block text-sm md:text-base p-2 md:px-4 md:py-3 border-t-[1px] ${
                          isDarkMode
                            ? "bg-dark-secondary text-dark-primary  hover:bg-gray-100"
                            : "bg-light-secondary text-white border-t-slate-600 hover:bg-[#0B1A2B]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {currentRecords.map(({ id, name, img, link }) => (
            <Link to={link} key={id}>
              <div className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full">
                <div>
                  <img
                    src={img}
                    className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-110"
                  />
                  <h1
                    className={`absolute z-10 flex justify-center items-center bottom-0 left-0 right-0 p-3 font-semibold text-sm md:text-base ${
                      isDarkMode
                        ? "bg-dark-primary text-dark-secondary"
                        : "bg-light-primary text-light-secondary"
                    }`}
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(14, 32, 54, 0.5)"
                        : "rgba(207, 207, 207, 0.9)",
                    }}
                  >
                    {name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}

        <div className="flex font-medium items-center justify-start md:items-start mt-3 md:mt-6 gap-2 text-sm md:text-base">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={` border-[1px]  border-opacity-50 p-1 px-3 md:p-2 md:px-4 rounded-full ${
              isDarkMode
                ? "text-light-primary border-light-primary "
                : "text-dark-primary border-dark-primary "
            } ${currentPage === 1 ? "text-gray-500 cursor-not-allowed" : ""} `}
          >
            پێشتر
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const isActive = currentPage === index + 1;
            return (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`p-1 px-3 md:p-2 md:px-4 rounded-full border-[1px] ${
                  isActive
                    ? isDarkMode
                      ? "bg-dark-secondary text-dark-primary border-dark-secondary" // Dark mode active
                      : "bg-light-secondary text-light-primary border-light-secondary" // Light mode active
                    : isDarkMode
                    ? "border-light-primary text-light-primary border-opacity-50" // Dark mode notActive
                    : "border-dark-primary text-dark-primary border-opacity-50" // Light mode notActive
                }`}
              >
                {index + 1}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`border-[1px]  border-opacity-50 p-1 px-3 md:p-2 md:px-4   rounded-full ${
              isDarkMode
                ? "text-light-primary border-light-primary "
                : "text-dark-primary border-dark-primary "
            }  ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : ""
            } `}
          >
            دواتر
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumenterisFilter;
