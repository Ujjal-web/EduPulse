import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import MainLayouts from "../Layouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
