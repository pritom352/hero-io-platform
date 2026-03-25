import React from "react";
import Banner from "../Components/Banner";
import Counter from "../Components/Counter";
import TrendingApps from "../Components/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const items = data.slice(0, 8);
  // console.log(items);

  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <TrendingApps items={items}></TrendingApps>
    </div>
  );
};

export default Home;
