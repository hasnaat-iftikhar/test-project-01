import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          // {`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1EthEOmALlWkLQt7gBrj94Pt4mxD6yEczA&usqp=CAU"
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            Kubernetes Community
            <br />
            Days Lahore
          </h1>
          <p className="text-gray-400 text-sm max-w-[500px] mt-[12px]">
            Experience the power of community at the Kubernetes Community Days
            in Lahore! When a diverse group of experts comes together to learn,
            network, and share knowledge on all things cloud native
          </p>
          <div className="mt-[24px]">
            <button className="bg-white text-black py-2 px-5 rounded-[6px]">
              Get Your Tickets
            </button>
            <button className="border text-white border-[#3a3838] bg-[#3a3838] py-2 px-5 ml-4 rounded-[6px]">
              Learn More
            </button>
          </div>

          {/* <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
