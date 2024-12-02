import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/image1.webp";
import Image2 from "../assets/images/image2.webp";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image4.jpeg";
import Image5 from "../assets/images/birds.jpg";
import Image6 from "../assets/images/image6.webp";

// Document List
const DocLists = [
  { id: 1, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
  { id: 2, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 3, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 4, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 5, name: "ژیانی ئاژەڵە کێوییەکان", img: Image5, link: "#" },
  { id: 6, name: "ژیانی ئاژەڵە کێوییەکان", img: Image6, link: "#" },
];

// Translator Description Component
const TranslatorDescription = ({ isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6; // Change if needed
  const totalRecords = DocLists.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  // Get records for the current page
  const currentRecords = DocLists.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  // Handlers
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section
      className={`flex flex-col px-4 md:px-8 pt-20 ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      {/* Header */}
      <div className="mt-14">
        <h1 className="font-bold text-xl md:text-2xl">ناوی وەرگێڕ</h1>
        <p>بەرهەمە وەرگێڕدراوەکانی</p>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mt-10 md:mt-14">
        {currentRecords.map(({ id, name, img, link }) => (
          <Link to={link} key={id}>
            <div className="group relative h-64 md:h-80 cursor-pointer overflow-hidden rounded-md">
              <img
                src={img}
                alt={`Image of ${name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
              />
              <h1
                className={`absolute bottom-0 left-0 right-0 p-3 text-sm md:text-base font-semibold ${
                  isDarkMode
                    ? "bg-dark-primary bg-opacity-50 text-dark-secondary"
                    : "bg-light-primary bg-opacity-90 text-light-secondary"
                }`}
              >
                {name}
              </h1>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-start gap-2 mt-6">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 px-4 rounded-full border ${
            isDarkMode
              ? "text-light-primary border-light-primary"
              : "text-dark-primary border-dark-primary"
          } ${
            currentPage === 1 ? "text-gray-500 cursor-not-allowed" : ""
          } hover:bg-opacity-80 transition`}
        >
          پێشتر
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`p-2 px-4 rounded-full border ${
              currentPage === index + 1
                ? isDarkMode
                  ? "bg-dark-secondary text-dark-primary border-dark-secondary"
                  : "bg-light-secondary text-light-primary border-light-secondary"
                : isDarkMode
                ? "text-light-primary border-light-primary"
                : "text-dark-primary border-dark-primary"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 px-4 rounded-full border ${
            isDarkMode
              ? "text-light-primary border-light-primary"
              : "text-dark-primary border-dark-primary"
          } ${
            currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : ""
          } hover:bg-opacity-80 transition`}
        >
          دواتر
        </button>
      </div>
    </section>
  );
};

export default TranslatorDescription;
