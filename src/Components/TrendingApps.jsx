import React from "react";
import Card from "./Card";
import { Link } from "react-router";

const TrendingApps = ({ items }) => {
  //   const items = data.slice(0, 7);
  //   console.log(items);
  console.log(items);

  return (
    <div className=" max-w-8/10 mx-auto mt-20">
      <h5 className="text-4xl mb-4 font-bold text-center">Trending Apps</h5>
      <p className="text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className=" grid grid-cols-4 gap-10">
        {items.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
      <div className=" flex items-center justify-center mt-10">
        <Link to={"/apps"} className=" text-white border px-3 py-2  rounded-xl">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
