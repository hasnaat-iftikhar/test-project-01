import React from "react";
import Container from "./Container"

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, data, rowID }) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  

  const divArray = data.map((item, index) => (
    <div
      key={index}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        className="w-full h-auto block rounded-[7px] relative"
        src={item.backdrop_path}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/50 opacity-0 hover:opacity-100">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.title}
        </p>
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center mt-[20px] text-center absolute top-0 left-0 w-full h-full">
          {item.about}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="pt-[42px]">
      <Container>
        <h2 className="text-white font-bold md:text-3xl">{title}</h2>
      </Container>
      <div className="mt-[42px] relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {divArray}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
