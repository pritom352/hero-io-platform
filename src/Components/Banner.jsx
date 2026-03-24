import React from "react";
import play from "../assets/play-store.png";
import app from "../assets/app-store.png";
import banner from "../assets/hero.png";
const Banner = () => {
  return (
    <div className=" flex flex-col b items-center mt-20 ">
      <h4 className=" text-center text-6xl font-bold">
        We Build
        <br />
        <span className="text-[#9F62F2]">Productive</span> Apps
      </h4>
      <p className=" text-center mt-4 mb-10 max-w-4/6 text-xl">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className=" flex gap-4 mb-10">
        <button className=" flex items-center gap-2 bg-white rounded-xl px-3 py-2 ">
          <img className="max-w-8 max-h-8" src={play} alt="" />
          Google Play
        </button>
        <button className=" flex items-center gap-2 bg-white rounded-xl px-3 py-2 ">
          <img className="max-w-8 max-h-8" src={app} alt="" />
          App Store
        </button>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
