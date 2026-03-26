import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className=" text-white  bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-15">
      <h5 className=" text-3xl font-bold  text-center mb-10">
        Trusted By Millions, Built For You
      </h5>

      <div className="flex flex-col md:flex-row  justify-center items-center gap-10 md:gap-20 ">
        <div className=" flex flex-col items-center space-y-3">
          <p>Total Downloads</p>
          <p className=" text-3xl md:text-6xl font-bold">29.6M</p>
          <p>21% more than last month</p>
        </div>

        <div className=" flex flex-col items-center space-y-3">
          <p>Total Reviews</p>
          <p className=" text-3xl md:text-6xl font-bold">906M</p>
          <p>46% more than last month</p>
        </div>

        <div className=" flex flex-col items-center space-y-3">
          <p>Total Apps</p>
          <p className=" text-3xl md:text-6xl font-bold">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
