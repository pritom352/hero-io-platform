import React from "react";
import Card from "./Card";
import { Link } from "react-router";

const TrendingApps = ({ items }) => {
  //   const items = data.slice(0, 7);
  //   console.log(items);
  console.log(items);

  return (
    <div className=" max-w-8/10 mx-auto mt-20">
      <h5 className=" text-3xl md:text-4xl mb-4 font-bold text-center">Trending Apps</h5>
      <p className="text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className=" grid  md:grid-cols-3 lg:grid-cols-4 gap-10">
        {items.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
      <div className=" flex items-center justify-center mt-10">
        <Link to={"/apps"} className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 py-2 rounded-xl">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
