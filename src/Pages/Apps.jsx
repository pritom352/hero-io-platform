import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";
import AppNotFound from "../Components/AppNotFound";

const Apps = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");

  
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h4 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mt-20">
        Our All Applications
      </h4>

      <p className="mt-4 mb-10 text-center text-gray-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search + Count */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <p className="font-semibold text-xl">
          {filteredData.length} Apps found
        </p>

        {/*  Beautiful Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="🔍 Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-orange-400 
                       focus:border-transparent shadow-sm transition"
          />
        </div>
      </div>

      {/* Apps Grid */}
      {filteredData.length > 0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <AppNotFound></AppNotFound>
      )}
    </div>
  );
};

export default Apps;