import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const Card = ({ item }) => {
  const { id, downloads, image, ratingAvg, title } = item;

  return (
    <Link to={`/details/${id}`}>
      <div className="bg-white p-3 rounded-xl shadow-lg h-full flex flex-col">
        
        {/* ✅ Fixed image size */}
        <img
          className="w-full h-40 object-cover rounded-xl"
          src={image}
          alt=""
        />

        {/* ✅ Content grow */}
        <div className="flex flex-col flex-grow">
          <p className="font-bold mt-2 text-lg line-clamp-2">
            {title}
          </p>

          {/* ✅ Push buttons to bottom */}
          <div className="flex justify-between mt-auto">
            <button className="flex items-center gap-1 mt-4 px-2 py-1 bg-[#F1F5E8] text-green-400 rounded-xl">
              <MdOutlineFileDownload /> {downloads}
            </button>

            <button className="flex items-center gap-1 mt-4 px-2 py-1 bg-orange-100 text-orange-400 rounded-xl">
              <FaStar /> {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;