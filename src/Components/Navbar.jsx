import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-2 py-2 shadow-lg ">
      <div className=" flex  items-center gap-2">
        <img className=" max-h-10" src={logo} alt="" />
        <h1>HERO.IO</h1>
      </div>
      <div className=" flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>Apps</NavLink>
        <NavLink to={"/"}>Installation</NavLink>
      </div>
      <div>
        <button className=" flex items-center gap-2">
          <FaGithub />
          Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
