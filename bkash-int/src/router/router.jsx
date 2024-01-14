import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../components/Error";
import Success from "../components/Success";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/error?",
      element: <Error />
    },
    {
      path: "success",
      element: <Success />
    },
  ]);
  
  export default router;