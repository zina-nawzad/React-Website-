import React from "react";
import Image3 from "../assets/images/Image3.jpeg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"; // Ensure you import this icon

const videosList = [
  {
    id: 1,
    img: Image3,
    title: "پودل",
    description:
      "پودل سەگێکی زۆر ڕاهێنانکراوە و بە شێوەیەکی گشتی لە ڕاهێنانی گوێڕایەڵیدا سەرکەوتووە. لە ڕووی مێژووییەوە سەگێکی بەناوبانگی سێرک بوون. جگە لە تاقیکردنەوەکانی ڕاوکردن، لە چالاکی و گردبوونەوەدا ئاستێکی باشیان هەیە. ئەوان لە بەناوبانگترین جۆرەکانی سەگی خزمەتگوزاریدان.",
    btn: "بینینی ڤیدیۆ",
    link: "#",
  },
];

const DocDescription = ({ isDarkMode }) => {
  return (
    <section
      className={`flex flex-col px-4 md:px-8 pt-20 w-full  ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      {videosList.map((video) => (
        <div
          key={video.id}
          className={`flex flex-col md:flex-row mt-10 items-center md:py-[97px] `}
        >
          <div className={`flex-shrink-0`}>
            <img
              src={video.img}
              alt={video.title}
              className="max-w-full h-96 "
            />
          </div>

          {/* Content Section */}
          <div className={`flex-grow flex flex-col space-y-3 px-2 mt-10`}>
            {/* Title and Description */}
            <div className="flex flex-col items-start border-r-[1.5px] rounded-md border-dark-tertiary pr-5">
              <h1 className={`font-bold text-xl`}>{video.title}</h1>
              <span className={`text-base opacity-80`}>
                {video.description}
              </span>
            </div>

            {[
              { label: "زمان", value: "ئینگلیزی" },
              { label: "وەرگێڕ", value: "ناوی وەرگێڕ" },
              { label: "ماوە", value: "١٢ خولەک" },
              { label: "بینراو", value: "١٤" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-r-[1.5px] rounded-md border-dark-tertiary pr-5 "
              >
                <h1 className="font-bold text-xl">{item.label}</h1>
                <p className="text-base opacity-80">{item.value}</p>
              </div>
            ))}

            {/* Button */}
            <Link to={video.link}>
              <button className="group mt-4 relative py-1 px-6 md:px-8 rounded-full z-10 bg-white font-medium w-44 mx-auto mb-7">
                <div className="circle absolute w-1/4 h-full bg-light-tertiary rounded-full right-0 z-20 top-0 group-hover:w-full duration-200">
                  <FaChevronRight className="absolute text-primary-color top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 duration-75 group-hover:opacity-0" />
                </div>
                <div className="text-light-tertiary text-lg font-medium relative z-20 transition-all group-hover:text-white">
                  {video.btn}
                </div>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DocDescription;
