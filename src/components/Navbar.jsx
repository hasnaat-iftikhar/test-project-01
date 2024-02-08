import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import Container from "./Container";

const Navbar = () => {
  const links = [
    {
      name: "Our Speakers",
      url: "/"
    },
    {
      name: "Event Agenda",
      url: "/"
    },
    {
      name: "Our Partners",
      url: "/"
    },
  ]

  return (
    <div className="py-[32px] z-[100] w-full absolute">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-[64px]">
          <div className="w-[80px] h-[80px]">
            <Link to="/">
              <img className="w-full h-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex justify-start items-center gap-[42px]">
            {
              links?.map((eachLink, index) => <Link key={index} to={eachLink.url} className="text-[16px] text-white opacity-80 hover:opacity-100">{eachLink.name}</Link>)
            }
          </div>
        </div>

        <Link to="/signup">
          <button className="bg-primary px-6 py-3 cursor-pointer rounded-[8px] text-white">
            Get in touch
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;
