import React from "react";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";

const Apps = () => {
  const data = useLoaderData();
  const totalData = data.length;
  // console.log(totalData);

  return (
    <div className="  max-w-8/10  mx-auto">
      <h4 className=" font-bold text-5xl text-center mt-20 ">
        Our All Applications
      </h4>
      <p className=" mt-4 mb-10 text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className=" flex justify-between mb-4">
        <p className=" font-bold text-xl">{totalData} Apps found</p>
        <input className=" border px-2" placeholder="search Apps" type="text" />
      </div>
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Apps;
