import React from "react";
import MenuBar from "../../pages/menuBar/MenuBar";
import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <div>
      services layout here ....
      <MenuBar></MenuBar>
      <Outlet></Outlet>
    </div>
  );
};

export default ServicesLayout;
