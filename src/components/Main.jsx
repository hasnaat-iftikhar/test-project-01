import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import Container from "./Container";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  const [title, setTitle] = useState("Kubernetes");

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prevTitle) =>
        prevTitle === "Kubernetes" ? "Tech" : "Kubernetes"
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-[700px] text-white">
        <div className="w-full h-full flex items-center">
          <div
            className="absolute w-full h-[700px] bg-gradient-to-r from-[#000]"
            style={{
              filter: "drop-shadow(2px 4px 6px black)",
            }}
          ></div>
          <img
            className="absolute z-[-1] w-full h-full object-cover"
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
            alt={movie?.title}
          />
          <Container className="mt-[96px] relative z-[1]">
            <h1 className="text-3xl md:text-5xl font-bold">
              {title} Community
              <br />
              Days Lahore
            </h1> 
            <p className="text-gray-400 text-sm max-w-[500px] mt-[12px]">
              Experience the power of community at the Kubernetes Community Days
              in Lahore! When a diverse group of experts comes together to learn,
              network, and share knowledge on all things cloud native
            </p>
            <div className="mt-[24px]">
              <button className="bg-primary text-white py-3 px-5 rounded-[6px]">
                Get Your Tickets
              </button>
              <button className="border text-white border-[#3a3838] bg-[#3a3838] py-3 px-5 ml-4 rounded-[6px]">
                Learn More
              </button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Main;
