import React, { useEffect, useState } from "react";
import { getStoredApps } from "../utils/localStorage";
import { toast } from "react-toastify";
import NotFound from "../Components/NotFound";
import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const MyInstallation = () => {
  const [apps, setApps] = useState([]);

  //installed apps
  useEffect(() => {
    const storedApps = getStoredApps();
    setApps(storedApps);
  }, []);

  // uninstall
  const handleUninstall = (id) => {
    const updatedApps = apps.filter((app) => app.id !== id);


    setApps(updatedApps);

    // update localStorage
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    // toast
    toast.error("App Uninstalled ");
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mt-20">
        My Installed Apps
      </h2>

      <p className="text-center text-gray-500 mt-4 mb-10">
        Manage all your installed applications easily
      </p>

      {apps.length > 0 ? (
        <div className="">
          {apps.map((app) => (
            <div
              key={app.id}
              className=" bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition flex justify-between items-center mb-5"
            >
              <div className=" flex gap-5 items-center"><img
                src={app?.image}
                alt={app?.title}
                className="w-[80px] h-[80px]  object-cover rounded-lg"
              />

              <div><p className="mb-3 font-bold">{app?.title}</p>
              <div className=" flex items-center  justify-center  gap-8"><p className="text-sm  flex items-center gap-1 text-green-400 font-semibold"><MdOutlineFileDownload size={25} className="text-green-500" />{app?.downloads}</p>

              <p className="text-sm  flex  items-center gap-1 text-yellow-400 font-semibold">
              <FaStar size={25} className="text-yellow-500" />{app?.ratingAvg} 
              </p>
              <p className="text-sm "> {app?.size} 
              </p></div></div></div>

              <button
                onClick={() => handleUninstall(app?.id)}
                className="mt-4  bg-green-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
};

export default MyInstallation;