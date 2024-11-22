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
import { MdOutlineAccessTime } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const DocLists = [
  {
    id: 1,
    name: "ژیانی ئاژەڵە کێوییەکان",
    img: Image1,
    link: "#",
  },
  { id: 2, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 3, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 4, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 5, name: "ژیانی ئاژەڵە کێوییەکان", img: Image5, link: "#" },
  { id: 6, name: "ژیانی ئاژەڵە کێوییەکان", img: Image6, link: "#" },
  { id: 7, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 8, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 9, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 10, name: "ژیانی ئەسپەکان", img: Horse, link: "#" },
];

const DocFilter = [
  {
    id: 1,
    name: "جۆری دۆکیۆمێنتاری",
    dropdown: [
      { id: 1, name: "ژیانی ئاژەڵە کێوییەکان", link: "#" },
      { id: 2, name: "ژیانی ئەسپەکان", link: "#" },
      { id: 3, name: "ژیانی دەریاییەکان", link: "#" },
      { id: 4, name: "ژیانی ئەسپەکان", link: "#" },
      { id: 5, name: "ژیانی ئاژەڵە کێوییەکان", link: "#" },
    ],
  },
];

const DocumenterisFilter = ({ isDarkMode }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section
      className={` px-2 md:px-8 ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className=" flex flex-col justify-around gap-8 lg:gap-12">
        <div className="flex  items-center gap-2 mt-32 ">
          <div className="pl-10">
            <h1 className="font-bold text-2xl">دۆکیۆمێنتارییەکان</h1>
          </div>
          <div className={`flex justify-between items-center relative`}>
            {DocFilter.map(({ id, name, dropdown }) => (
              <div key={id} className="inline-block text-right">
                <button
                  className={`flex items-center justify-between gap-2  px-4 py-2 pb-3 ${
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
                    className={`absolute w-full min-h-screen shadow-lg rounded-b-3xl z-20`}
                  >
                    {dropdown.map((item) => (
                      <Link
                        to={item.link}
                        key={item.id}
                        className={`block px-4 py-3 border-t-[1px] ${
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {DocLists.map(({ id, name, img, link }) => (
            <Link to={link}>
              <div
                key={id}
                className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full"
              >
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
                    } `}
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(14, 32, 54, 0.5)"
                        : "rgba(207, 207, 207, 0.9)",
                    }}
                  >
                    {name}
                  </h1>
                  <div
                    className={`flex justify-between items-center w-full top-0 left-0 right-0 absolute z-10  ${
                      isDarkMode ? " text-dark-primary" : " text-light-primary"
                    } `}
                  >
                    <div className="flex justify-around items-center p-4">
                      <IoEyeOutline />
                      <p className="p-1 text-xs font-medium">١٤٤</p>
                    </div>
                    <div className="flex justify-around items-center p-4">
                      <MdOutlineAccessTime />
                      <p className="p-1 text-xs font-medium"> ١٤ خولەک</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        
      </div>
    </section>
  );
};

export default DocumenterisFilter;
