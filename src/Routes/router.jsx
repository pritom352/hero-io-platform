import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
