import React from "react";
import { Link } from "react-router-dom";

import Image1 from "../assets/images/image1.webp";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image4.jpeg";
import SeaAnimals from "../assets/images/SeaAnimals.jpeg";
import Horse from "../assets/images/Horse.jpeg";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const DocLists = [
  {
    id: 1,
    name: "ژیانی ئاژەڵە کێوییەکان",
    img: Image1,
    link: "./src/Pages/documenterisFilter.jsx",
  },

  { id: 6, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
  { id: 8, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 9, name: "ژیانی دەریاییەکان", img: SeaAnimals, link: "#" },
  { id: 10, name: "ژیانی ئەسپەکان", img: Horse, link: "#" },
];

const Series = ({ isDarkMode }) => {
  return (
    <section
      className={` px-2 md:px-8 ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className=" flex flex-col justify-around gap-8 lg:gap-12">
        <div className="txt flex flex-col items-start gap-2 mt-24">
          <h1 className="text-yellow-color font-bold text-2xl">
            نوێترین زنجیرەکان
          </h1>
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
      </div>
    </section>
  );
};

export default Series;
