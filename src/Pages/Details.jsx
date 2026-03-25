import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { AiFillLike } from "react-icons/ai";

const Details = () => {
  const cardId = useParams();
  console.log(cardId);
  const itemID = useLoaderData();
  console.log(itemID);

  const allItem = itemID.find((data) => data?.id == cardId?.id);
  console.log(allItem);
  const green = { color: "green" };
  const yellow = { color: "yellow" };
  const purple = { color: "purple" };

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
  } = allItem;
  return (
    <div className=" max-w-8/10  mx-auto ">
      <div className=" flex gap-10">
        <img className=" max-w-[350px] max-h-[350px]" src={image} alt="" />
        <div className=" flex-1">
          <p>{title}</p>
          <p>{companyName}</p>
          <div className="w-full border my-7"></div>
          <div className=" flex gap-8">
            <div>
              <MdOutlineFileDownload size={30} style={green} />
              <p>Downloads</p>
              <p className=" font-bold text-2xl">{downloads}</p>
            </div>
            <div>
              <FaStar size={30} style={yellow} />
              <p>Average Ratings</p>
              <p className=" font-bold text-2xl">{ratingAvg}</p>
            </div>
            <div>
              <AiFillLike size={30} style={purple} />
              <p>Total Reviews</p>
              <p className=" font-bold text-2xl">{reviews}</p>
            </div>
          </div>
          <button className="mt-7  bg-green-400 px-4 py-3 rounded-xl text-white font-bold ">
            Install Now ({size})
          </button>
        </div>
      </div>
      <div className="w-full border my-7"></div>
    </div>
  );
};

export default Details;
