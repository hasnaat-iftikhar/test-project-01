import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import logo from "./image 2 (1).svg";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute ">
      <div className="flex items-center justify-start gap-[5vw] text-zinc-50  w-[80%] ">
        <div className="flex w-[30%]">
          <Link to="/">
            <img className="w-[100%]  " src={logo} alt="" />
          </Link>
          <div className="flex justify-center items-start p-[5px] flex-col">
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-50">
              Kubernetes
            </h1>
            <h1 className="text-zinc-50">Community Days Lahore</h1>
          </div>
        </div>
        <p>Speakers</p>
        <p>Sponsors</p>
        <p>Media Parterns</p>
      </div>

      <div>
        {/* <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link> */}
        <Link to="/signup">
          <button className="bg-[#195efe] px-6 py-2 cursor-pointer rounded-[8px] text-white">
            Get in touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
