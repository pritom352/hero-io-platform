import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const Card = ({ item }) => {
  console.log(item);
  const {
    id,
    companyName,
    description,
    downloads,
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = item;
  return (
    <div className="  bg-white p-3 rounded-xl shadow-lg">
      <img className="w-[300px] rounded-xl" src={image} alt="" />
      <p className=" font-bold mt-1 text-xl">{title}</p>
      <div className=" flex justify-between">
        <button className="flex items-center gap-1  mt-4 p-2 bg-[#F1F5E8] text-green-400 rounded-xl">
          <MdOutlineFileDownload /> {downloads}
        </button>
        <button className="flex items-center gap-1  mt-4 p-2 bg-orange-100 text-orange-400 rounded-xl ">
          <FaStar /> {downloads}
        </button>
      </div>
    </div>
  );
};

export default Card;
