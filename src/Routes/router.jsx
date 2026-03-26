import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Details from "../Pages/Details";
import NotFound from "../Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<NotFound></NotFound>,
    children: [
      { path: "/", element: <Home></Home>, loader: () => fetch("/data.json") },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
export default router;
