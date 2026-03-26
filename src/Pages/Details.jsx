import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { AiFillLike } from "react-icons/ai";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//  import localStorage utils
import { getStoredApps, saveApp } from "../utils/localStorage";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const allItem = data.find((item) => item.id == id);

  const [installed, setInstalled] = useState(false);

  //  check already installed
  useEffect(() => {
    const stored = getStoredApps();
    const exists = stored.find((item) => item.id == id);
    setInstalled(!!exists);
  }, [id]);

  // install handler
  const handleInstall = () => {
    const success = saveApp(allItem);

    if (success) {
      setInstalled(true);
      toast.success("App Installed Successfully");
    } else {
      toast.error("Already Installed");
    }
  };

  const {
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

  const sortedRatings = [...ratings].reverse();

  return (
    <div className="max-w-6xl mx-auto px-4 mt-20">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          className="max-w-[350px] max-h-[350px] mx-auto"
          src={image}
          alt=""
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-500 mt-2">{companyName}</p>

          <div className="w-full border my-7"></div>

          <div className="flex gap-8 flex-wrap">
            <div>
              <MdOutlineFileDownload size={30} className="text-green-500" />
              <p>Downloads</p>
              <p className="font-bold text-2xl">{downloads}</p>
            </div>

            <div>
              <FaStar size={30} className="text-yellow-500" />
              <p>Average Ratings</p>
              <p className="font-bold text-2xl">{ratingAvg}</p>
            </div>

            <div>
              <AiFillLike size={30} className="text-purple-500" />
              <p>Total Reviews</p>
              <p className="font-bold text-2xl">{reviews}</p>
            </div>
          </div>

          {/*  Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-7 px-6 py-3 rounded-xl text-white font-bold transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="w-full border my-10"></div>

      {/* Chart */}
      <p className="text-2xl font-bold mb-4">Ratings</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sortedRatings} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />

          <Bar
            dataKey="count"
            fill="#f97316"
            radius={[0, 10, 10, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="w-full border my-10"></div>

      <p className="text-2xl font-bold mb-6">Description</p>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Details;