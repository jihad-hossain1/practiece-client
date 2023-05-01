import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/loginLayout/LoginLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import ServicesLayout from "../layouts/servicesLayout/ServicesLayout";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/services",
    element: <ServicesLayout></ServicesLayout>,
    children: [
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: ":id",
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);

export default router;
