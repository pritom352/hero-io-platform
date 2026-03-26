import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import "../Navbar.css"
const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between items-center px-2 py-2 shadow-lg ">
      <div className=" flex  items-center gap-2">
        <img className=" max-h-10" src={logo} alt="" />
        <h1>HERO.IO</h1>
      </div>
      <div className=" flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/apps"}>Apps</NavLink>
        <NavLink to={"/installation"}>Installation</NavLink>
      </div>
      <div>
        <button className=" flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 py-2 rounded-xl">
          <FaGithub />
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
