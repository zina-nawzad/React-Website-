import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SeaAnimals from "../assets/images/SeaAnimals.jpeg";
import Image2 from "../assets/images/image2.webp";
import Horse from "../assets/images/Horse.jpeg";
import logo_light_mode from "../assets/images/light_logo.jpg";
import logo_dark_mode from "../assets/images/dark_logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavLinks = [
  { id: 1, name: "سەرەکی", link: "/", isActive: false },
  {
    id: 2,
    name: "دۆکیۆمێنتارییەکان",
    link: "/DocumenterisFilter",
    isActive: false,
    submenu: [
      { id: 1, name: "ژیانی دەریاییەکان", imgSrc: SeaAnimals, link: "#" },
      { id: 2, name: "ژیانی ئاژەڵە کێوییەکان", imgSrc: Image2, link: "#" },
      { id: 3, name: "ژیانی ئەسپەکان", imgSrc: Horse, link: "#" },
      { id: 4, name: "ژیانی دەریاییەکان", imgSrc: SeaAnimals, link: "#" },
      { id: 5, name: "ژیانی ئاژەڵە کێوییەکان", imgSrc: Image2, link: "#" },
    ],
  },
  {
    id: 3,
    name: "زنجیرەکان",
    link: "/SeriesFilter",
    isActive: false,
    submenu: [
      { id: 6, name: "ژیانی دەریاییەکان", imgSrc: SeaAnimals, link: "#" },
      { id: 7, name: "ژیانی ئاژەڵە کێوییەکان", imgSrc: Image2, link: "#" },
      { id: 8, name: "ژیانی ئەسپەکان", imgSrc: Horse, link: "#" },
      { id: 9, name: "ژیانی دەریاییەکان", imgSrc: SeaAnimals, link: "#" },
      { id: 10, name: "ژیانی ئاژەڵە کێوییەکان", imgSrc: Image2, link: "#" },
    ],
  },
  { id: 5, name: "وەرگێڕەکان", link: "/TranslatorsPages", isActive: false },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNav = () => setShowNavbar(!showNavbar);
  const location = useLocation();
  const currentPath = location.pathname;
  const getNavbarOpacity = () => {
    return currentPath === "/" && !openSubmenu
      ? `bg-opacity-100 lg:bg-opacity-70 `
      : `bg-opacity-100`;
  };

  const [openSubmenu, setOpenSubmenu] = useState(false);
  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? false : id);
    consy;
  };
  return (
    <div
      className={` ${getNavbarOpacity()} ${
        isDarkMode
          ? `bg-dark-primary text-dark-secondary`
          : `bg-light-primary text-light-secondary`
      }  absolute top-0 w-full z-10`}
    >
      <div className={`container py-2 md:py-0 z-20`}>
        <div className={`flex justify-between items-stretch`}>
          <img
            src={isDarkMode ? logo_dark_mode : logo_light_mode}
            className="h-24 w-36"
          />
          <ul className={`hidden md:flex justify-between items-stretch gap-8`}>
            {NavLinks.map(({ id, name, link, submenu }) => (
              <li key={id} className=" group font-semibold flex h-full">
                <div className="flex justify-aroud items-center ">
                  <Link
                    to={link}
                    className={`flex-col justify-between items-center${
                      isDarkMode ? "text-light-primary" : "text-dark-primary"
                    } relative cursor-pointer after:content-[''] ${
                      isDarkMode
                        ? "after:bg-light-primary"
                        : "after:bg-dark-primary"
                    } after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[4px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                  >
                    {name}
                  </Link>
                  {submenu && (
                    <div className="flex w-full left-0">
                      <button
                        onClick={() => toggleSubmenu(id)}
                        className="pr-1 text-xl  transition-transform duration-200 group-hover:rotate-180"
                      >
                        <RiArrowDropDownLine />
                      </button>
                      <ul
                        className={` ${getNavbarOpacity()} hidden group-hover:flex justify-between items-center absolute top-[96px] right-0 left-0  ${
                          isDarkMode
                            ? "bg-dark-primary text-dark-secondary "
                            : "bg-light-primary text-light-secondary "
                        }  duration-200`}
                      >
                        {submenu.map(({ id, name, imgSrc, link }) => (
                          <li key={id} className="px-5 py-2">
                            <Link
                              to={link}
                              className={`${
                                isDarkMode
                                  ? "text-light-primary"
                                  : "text-dark-primary"
                              }`}
                            >
                              <div className="flex-col justify-between items-center gap-4">
                                <div className="flex justify-center items-center ">
                                  <img
                                    src={imgSrc}
                                    className="relative hidden md:grid "
                                  />
                                  <FaCirclePlay
                                    className={`hidden md:block absolute text-2xl lg:text-3xl text-dark-primary`}
                                  />
                                </div>
                                <p className="text-center text-sm lg:text-base py-2 font-medium">
                                  {name}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}

            {/* Dark and Light mode icon */}
            <li className="my-auto">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center text-2xl"
              >
                {isDarkMode ? (
                  <MdOutlineLightMode
                    className={`${
                      isDarkMode
                        ? "text-dark-secondary"
                        : "text-light-secondary"
                    }`}
                  />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Navbar */}
          <div
            className={`  ${getNavbarOpacity()} md:hidden flex items-center gap-4`}
          >
            <div>
              {!showNavbar ? (
                <HiMenuAlt2
                  onClick={toggleNav}
                  className={`cursor-pointer ${
                    isDarkMode ? "text-dark-secondary" : "text-light-secondary"
                  }`}
                  size={24}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleNav}
                  className={`cursor-pointer ${
                    isDarkMode ? "text-dark-secondary" : "text-light-secondary"
                  }`}
                  size={24}
                />
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="text-2xl flex items-center justify-center"
            >
              {isDarkMode ? (
                <MdOutlineLightMode
                  className={`${
                    isDarkMode ? "text-dark-secondary " : "text-light-secondary"
                  }`}
                />
              ) : (
                <MdOutlineDarkMode />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navbar Menu */}
        {showNavbar && (
          <div
            className={`  ${getNavbarOpacity()} relative top-0 left-0 w-full  ${
              isDarkMode ? "bg-dark-primary " : "bg-light-primary"
            } `}
          >
            <ul className={`flex flex-col items-start gap-4 p-4 min-h-screen `}>
              {NavLinks.map(({ id, name, link, submenu }) => (
                <li key={id} className="py-2 font-semibold w-full">
                  <div
                    className={`flex items-center justify-between ${
                      isDarkMode ? "text-light-primary" : "text-dark-primary"
                    }`}
                  >
                    <Link
                      to={link}
                      onClick={() => setShowNavbar(false)}
                      className={`group ${
                        isDarkMode ? "text-light-primary" : "text-dark-primary"
                      } relative cursor-pointer after:content-[''] ${
                        isDarkMode
                          ? "after:bg-light-primary "
                          : "after:bg-dark-primary "
                      } after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[9px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                    >
                      <span>{name}</span>
                    </Link>
                    {submenu && (
                      <button
                        onClick={() => toggleSubmenu(id)}
                        className={`pr-1 text-xl duration-200 group-hover:rotate-180 `}
                      >
                        <RiArrowDropDownLine />
                      </button>
                    )}
                  </div>
                  {submenu && openSubmenu === id && (
                    <ul
                      className={`w-full mt-2 absolute${
                        isDarkMode ? "bg-dark-primary " : "bg-light-primary "
                      }`}
                    >
                      {submenu.map(({ id, name, link }) => (
                        <li key={id} className="py-2 pr-10">
                          <Link
                            onClick={() => setShowNavbar(false)}
                            className={`flex-col justify-between items-center${
                              isDarkMode
                                ? "text-light-primary"
                                : "text-dark-primary"
                            } relative cursor-pointer after:content-[''] ${
                              isDarkMode
                                ? "after:bg-light-primary"
                                : "after:bg-dark-primary"
                            } after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[9px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
