import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))} */}
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
