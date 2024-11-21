import React from "react";
import logo_light_mode from "../assets/images/light_logo.jpg";
import logo_dark_mode from "../assets/images/dark_logo.png";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavLinks = [
  { id: 1, name: "سەرەکی", link: "#" },
  { id: 2, name: "دۆکیۆمێنتارییەکان", link: "#" },
  { id: 3, name: "زنجیرە دۆکیۆمێنتارییەکان", link: "#" },
  { id: 4, name: "وەرگێڕەکان", link: "#" },
];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const toggleNav = () => setShowNavbar(!showNavbar);

  return (
    <div
      className={`${
        isDarkMode ? "bg-dark-primary" : "bg-light-primary"
      }  top-0 left-0 w-full z-50`}
      style={{
        backgroundColor: isDarkMode
          ? "rgba(14, 32, 54, 0.8)"
          : "rgba(207, 207, 207, 0.8)",
      }}
    >
      <div className="container py-2 md:py-0 z-10">
        <div className="flex justify-between items-center">
          {/* LOGO SECTION */}
          <img
            src={isDarkMode ? logo_dark_mode : logo_light_mode}
            className="h-16"
            alt="logo"
          />
          {/* NAVBAR SECTION */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className={`${
                      isDarkMode ? "text-light-primary" : "text-dark-primary"
                    } relative cursor-pointer after:content-[''] ${
                      isDarkMode
                        ? "after:bg-light-primary"
                        : "after:bg-dark-primary"
                    }  after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[9px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Switch Icon */}
              <li className="py-4">
                <button
                  onClick={toggleTheme}
                  className="text-2xl flex items-center justify-center"
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
          </nav>
          {/* RESPONSIVE NAVBAR */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Menu Icon */}
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
            {/* Theme Switch Icon in Mobile */}
            <button
              onClick={toggleTheme}
              className="text-2xl flex items-center justify-center"
            >
              {isDarkMode ? (
                <MdOutlineLightMode
                  className={`${
                    isDarkMode ? "text-dark-secondary" : "text-light-secondary"
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
            className={` absolute top-full left-0 w-full ${
              isDarkMode ? "bg-dark-primary" : "bg-light-primary"
            } fixed top-0 left-0 w-full z-50`}
            style={{
              backgroundColor: isDarkMode
                ? "rgba(14, 32, 54, 0.8)"
                : "rgba(207, 207, 207, 0.8)",
            }}
          >
            <ul className="flex flex-col items-start gap-4 p-4">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <a
                    href={link}
                    className={`${
                      isDarkMode ? "text-light-primary" : "text-dark-primary"
                    } relative cursor-pointer after:content-[''] ${
                      isDarkMode
                        ? "after:bg-light-primary"
                        : "after:bg-dark-primary"
                    }  after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[9px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                  >
                    {name}
                  </a>
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
