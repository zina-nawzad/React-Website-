import React from "react";
import Image1 from "../assets/images/team-1.jpg";
import Image2 from "../assets/images/team-2.jpg";
import Image3 from "../assets/images/team-3.jpg";
import Image4 from "../assets/images/team-4.jpg";

const translatorsList = [
  {
    id: 1,
    name: "ناوی وەرگێڕ",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    img: Image1,
    number: 25,
    link: "#",
  },
  {
    id: 2,
    name: "ناوی وەرگێڕ",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    img: Image2,
    number: 25,
    link: "#",
  },
  {
    id: 3,
    name: "ناوی وەرگێڕ",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    img: Image3,
    number: 25,
    link: "#",
  },
  {
    id: 4,
    name: "ناوی وەرگێڕ",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    img: Image4,
    number: 25,
    link: "#",
  },
  {
    id: 5,
    name: "ناوی وەرگێڕ",
    title: "بەرهەمە وەرگێڕدراوەکانی",
    img: Image1,
    number: 25,
    link: "#",
  },
];

const Translators = ({ isDarkMode }) => {
  return (
    <section
      className={`flex flex-col justify-around items-start px-2 md:px-8  ${
        isDarkMode ? "bg-dark-primary" : "bg-light-primary"
      }`}
    >
      <div className="flex flex-col justify-start items-center mt-24">
        <div>
          <h1
            className={`uppercase ${
              isDarkMode ? "text-dark-secondary" : "text-light-secondary"
            } font-extrabold text-3xl group relative cursor-pointer`}
          >
            وەرگێڕەکان
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:grid-cols-5 w-full mb-24">
        {translatorsList.map(({ id, name, title, img, number, link }) => (
          <div
            key={id}
            href={link}
            className="group p-2  h-[400px] relative cursor-pointer overflow-hidden flex justify-center rounded-md mt-8 w-full"
          >
            <img
              src={img}
              className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-105"
            />
            <div
              className={`w-full absolute left-0 -bottom-full space-y-2 py-2${
                isDarkMode
                  ? "bg-dark-primary text-dark-secondary"
                  : "bg-light-primary text-light-secondary"
              }  transition-all duration-300 group-hover:bottom-0`}
              style={{
                backgroundColor: isDarkMode
                  ? "rgba(14, 32, 54, 0.4)"
                  : "rgba(207, 207, 207, 0.4)",
              }}
            >
              <h1 className="font-bold text-xl pt-1 text-center">{name}</h1>
              <p className=" text-center">{title}</p>
              <p className=" text-center pb-1 font-light ">{number}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Translators;
