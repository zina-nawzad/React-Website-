import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import video1 from "../assets/images/Video1.mp4";
import video3 from "../assets/images/Video3.mp4";
import video4 from "../assets/images/Video4.mp4";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const videosList = [
  {
    id: 1,
    vid: video1,
    title: "ژیانی دەریایی",
    description:
      "ژیانی دەریایی کە بە ژیانی دەریایی یان ژیانی دەریایی ناسراوە، لە ڕووەک و گیاندار و زیندەوەرانی دیکە پێکهاتووە کە لە ئاوی خوێی دەریا و زەریاکانی زەویدا دەژین. زیاتر لە ٢٠٠ هەزار جۆری دەریایی بەڵگەدار کراون و ڕەنگە دوو ملیۆن جۆری دەریایی هێشتا بەڵگەدار نەبن.",
    btn: "زانیاری زیاتر",
    link: "#",
  },
  {
    id: 3,
    vid: video3,
    title: "ژیانی ئەسپەکان",
    description:
      "تێکڕای ئەسپ ٢٥ بۆ ٣٠ ساڵ دەژی. بەڵام لە حاڵەتە دەگمەنەکاندا ئەسپی ماڵی تا تەمەنی ٥٠ یان ٦٠ ساڵی ژیاوە. چەندین هۆکار هەن کە کاریگەرییان لەسەر تەمەنی ئەسپ هەیە لەوانە: خۆراک",
    btn: "زانیاری زیاتر",
    link: "#",
  },
  {
    id: 4,
    vid: video4,
    title: "کرمە خاوەکان",
    description:
      "کرمی خاو، کۆترە، هەرچەندە زۆرجار بە هەڵە بە مار دەزانرێت. بە پێچەوانەی مارەکانەوە پێڵوی چاویان هەیە، زمانێکی چەقۆی تەختە و دەتوانن کلکیان بخەنە خوارەوە بۆ ئەوەی لە دەستی نێچیرێک ڕزگاریان بێت. کرمی خاو ڕوخسارێکی بریقەداریان هەیە. نێرەکان قاوەیی خۆڵەمێشی و مێینەکان قاوەیی و لایەکی تۆخن.",
    btn: "زانیاری زیاتر",
    link: "#",
  },
];

const Hero = ({ isDarkMode, toggleTheme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videosList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videosList.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextVideo, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      {videosList.map(({ id, vid, title, description, btn, link }, index) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-32 2xl:top-48 xl:top-44 lg:top-44 w-full lg:w-3/4 h-full flex items-center text-center lg:text-start z-10 px-16 ">
            <div className="text-white w-full pb-4 text-center lg:text-start">
              <h1 className="lg:text-2xl xl:text-3xl text-xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-xs lg:text-base text-light-primary mb-7 leading-[1.5]">
                {description}
              </p>
              <Link to={link}>
                <button className="group relative py-1 md:py-2 px-6 md:px-8 rounded-full z-10 bg-white font-medium w-44 mx-auto mb-7">
                  <div className="circle absolute w-1/4 h-full bg-light-tertiary rounded-full right-0 z-20 top-0 group-hover:w-full duration-200">
                    <FaChevronRight className="absolute text-primary-color top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 duration-75 group-hover:opacity-0" />
                  </div>
                  <div className="text-light-tertiary text-base relative z-20 transition-all group-hover:text-white">
                    {btn}
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <video
            src={vid}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      ))}

      {/* Left and Right Navigation Buttons */}
      <div className="hidden lg:block absolute top-1/2 left-16 transform -translate-y-1/2 z-20">
        <button
          onClick={prevVideo}
          className={`xl:p-3 p-2 xl:text-xl rounded-full ${
            isDarkMode
              ? "bg-dark-primary text-dark-secondary"
              : "bg-light-primary text-light-secondary"
          }`}
          style={{
            backgroundColor: isDarkMode
              ? "rgba(14, 32, 54, 0.8)"
              : "rgba(207, 207, 207, 0.8)",
          }}
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="hidden lg:block absolute top-1/2 right-16 transform -translate-y-1/2 z-20">
        <button
          onClick={nextVideo}
          className={`xl:p-3 p-2 xl:text-xl  rounded-full ${
            isDarkMode
              ? "bg-dark-primary text-dark-secondary"
              : "bg-light-primary text-light-secondary"
          }`}
          style={{
            backgroundColor: isDarkMode
              ? "rgba(14, 32, 54, 0.8)"
              : "rgba(207, 207, 207, 0.8)",
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
