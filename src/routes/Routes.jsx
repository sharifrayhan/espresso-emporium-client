import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Rootpage from "../pages/Rootpage";
import ErrorPage from "../pages/Errorpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/Products.json`),
      },
    ],
  },
]);

export default router;
