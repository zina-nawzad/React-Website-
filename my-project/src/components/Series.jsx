import React from "react";
import Image1 from "../assets/images/image1.webp";
import Image2 from "../assets/images/image2.webp";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image4.jpeg";
import Image5 from "../assets/images/birds.jpg";
import Image6 from "../assets/images/image6.webp";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const DocLists = [
  { id: 1, name: "ژیانی ئاژەڵە کێوییەکان", img: Image1, link: "#" },
  { id: 2, name: "ژیانی ئاژەڵە کێوییەکان", img: Image2, link: "#" },
  { id: 3, name: "ژیانی ئاژەڵە کێوییەکان", img: Image3, link: "#" },
  { id: 4, name: "ژیانی ئاژەڵە کێوییەکان", img: Image4, link: "#" },
];

const Series = ({ isDarkMode }) => {
  return (
    <div>
      <section
        className={` ${
          isDarkMode
            ? "bg-dark-primary text-dark-secondary"
            : "bg-light-primary text-light-secondary"
        }`}
      >
        <div className=" flex flex-col justify-around gap-16 px-8">
          <div className="txt flex flex-col items-start gap-2 mt-24">
            <h1 className="text-yellow-color font-bold text-2xl">
              نوێترین ژێرنوسکراوەکان
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:grid-cols-5 w-full">
            {DocLists.map(({ id, name, img, link }) => (
              <div
                key={id}
                href={link}
                className="group relative h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full"
              >
                <div>
                  <img
                    src={img}
                    className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-110"
                  />
                  <h1
                    className={`absolute z-10 flex justify-center items-center bottom-0 left-0 right-0 p-3 font-semibold ${
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
                    className={`flex justify-between items-center w-full top-0 left-0 right-0 absolute z-10 ${
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Series;
