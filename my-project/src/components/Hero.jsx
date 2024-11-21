import React, { useState, useEffect } from "react";
import video1 from "../assets/images/Video1.mp4";
import video3 from "../assets/images/Video3.mp4";
import video4 from "../assets/images/Video4.mp4";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const videosList = [
  {
    id: 1,
    vid: video1,
    tittle: "ژیانی دەریایی",
    description:
      "ژیانی دەریایی کە بە ژیانی دەریایی یان ژیانی دەریایی ناسراوە، لە ڕووەک و گیاندار و زیندەوەرانی دیکە پێکهاتووە کە لە ئاوی خوێی دەریا و زەریاکانی زەویدا دەژین. زیاتر لە ٢٠٠ هەزار جۆری دەریایی بەڵگەدار کراون و ڕەنگە دوو ملیۆن جۆری دەریایی هێشتا بەڵگەدار نەبن.",
  },
  {
    id: 3,
    vid: video3,
    tittle: "ژیانی ئەسپەکان",
    description:
      "تێکڕای ئەسپ ٢٥ بۆ ٣٠ ساڵ دەژی. بەڵام لە حاڵەتە دەگمەنەکاندا ئەسپی ماڵی تا تەمەنی ٥٠ یان ٦٠ ساڵی ژیاوە. چەندین هۆکار هەن کە کاریگەرییان لەسەر تەمەنی ئەسپ هەیە لەوانە: خۆراک",
  },
  {
    id: 4,
    vid: video4,
    tittle: "کرمە خاوەکان",
    description:
      "کرمی خاو، کۆترە، هەرچەندە زۆرجار بە هەڵە بە مار دەزانرێت. بە پێچەوانەی مارەکانەوە پێڵوی چاویان هەیە، زمانێکی چەقۆی تەختە و دەتوانن کلکیان بخەنە خوارەوە بۆ ئەوەی لە دەستی نێچیرێک ڕزگاریان بێت. کرمی خاو ڕوخسارێکی بریقەداریان هەیە. نێرەکان قاوەیی خۆڵەمێشی و مێینەکان قاوەیی و لایەکی تۆخن.",
  },
];

const Hero = ({ isDarkMode, toggleTheme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videosList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videosList.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextVideo, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      <div className="absolute top-32 lg:top-40 w-full lg:w-1/2  h-full flex  items-center text-center lg:text-start z-10  ">
        <div className="text-white w-full pb-4 px-8 text-center lg:text-start">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 py-5 ">
            {videosList[currentIndex].tittle}
          </h1>
          <p className="text-xs lg:text-base text-light-primary mb-8 leading-[1.5]">
            {videosList[currentIndex].description}
          </p>
          <button className="group relative py-1 md:py-2 px-6 md:px-8 rounded-full z-10 bg-white font-medium w-44 mx-auto mb-8">
            <div className="circle absolute w-1/4 h-full bg-light-tertiary rounded-full right-0 z-20 top-0 group-hover:w-full duration-200">
              <FaChevronRight className="absolute text-primary-color top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 duration-75 group-hover:opacity-0" />
            </div>
            <div className="text-light-tertiary text-base relative z-20 transition-all group-hover:text-white">
              زانیاری زیاتر
            </div>
          </button>
        </div>
      </div>

      {/* Video */}
      <video
        src={videosList[currentIndex].vid}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      {/* Left and Right Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevVideo}
          className={` ${
            isDarkMode
              ? "bg-dark-primary text-dark-secondary"
              : "bg-light-primary text-light-secondary"
          } p-2 rounded-full`}
          style={{
            backgroundColor: isDarkMode
              ? "rgba(14, 32, 54, 0.8)"
              : "rgba(207, 207, 207, 0.8)",
          }}
        >
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextVideo}
          className={` ${
            isDarkMode
              ? "bg-dark-primary text-dark-secondary"
              : "bg-light-primary text-light-secondary"
          } p-2 rounded-full`}
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
