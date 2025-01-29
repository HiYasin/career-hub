import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile";
import ServiceDetails from "../components/ServiceDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <ProtectedRoute><ServiceDetails></ServiceDetails></ProtectedRoute>,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile></Profile></ProtectedRoute>
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

export default Router;
