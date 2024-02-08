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

  return (
    <>
      <div className="relative w-full h-[700px] text-white">
        <div className="w-full h-full">
          <div
            className="absolute w-full h-[700px] bg-gradient-to-r from-[#000]"
            style={{
              filter: "drop-shadow(2px 4px 6px black)",
            }}
          ></div>
          <img
            className="w-full h-full object-cover"
            // {`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            src="https://images.pexels.com/photos/1963622/pexels-photo-1963622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt={movie?.title}
          />
          <div className="absolute w-full top-[60%] transform translate-y-[-50%] px-[42px] md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              Kubernetes Community
              <br />
              Days Lahore
            </h1>
            <p className="text-gray-400 text-sm max-w-[500px] mt-[12px]">
              Experience the power of community at the Kubernetes Community Days
              in Lahore! When a diverse group of experts comes together to
              learn, network, and share knowledge on all things cloud native
            </p>
            <div className="mt-[24px]">
              <button className="bg-white text-black py-3 px-5 rounded-[6px]">
                Get Your Tickets
              </button>
              <button className="border text-white border-[#3a3838] bg-[#3a3838] py-3 px-5 ml-4 rounded-[6px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
