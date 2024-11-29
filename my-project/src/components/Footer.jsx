import React from "react";
import logo_light_mode from "../assets/images/light_logo.jpg";
import logo_dark_mode from "../assets/images/dark_logo.png";

const Footer = ({ isDarkMode }) => {
  return (
    <section
      className={` pt-10 ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div
        className={`flex flex-col lg:flex-row justify-between items-center mx-2 md:mx-8 border-t-[1px] pb-4 lg:pb-0 ${
          isDarkMode ? "border-dark-secondary" : "border-light-secondary"
        }`}
      >
        <img
          src={isDarkMode ? logo_dark_mode : logo_light_mode}
          className="h-24 w-40"
        />
        <h1 className="font-light text-center md:text-start">
          کوردوس یەکەمین ماڵپەڕەی تایبەتە بە فیلمی دۆکیۆمێنتاری بە ژێرنووسی
          کوردی، هەواڵ و تێڕوانین بۆ ژیانی ئاژەڵان و فیلمی دیکۆمێنتاری پێشکەش
          دەکات
        </h1>
      </div>
    </section>
  );
};

export default Footer;
