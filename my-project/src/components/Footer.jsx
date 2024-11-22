import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className="flex">
          <h1>Footer</h1>
        </div>
    </div>
  );
};

export default Footer;
