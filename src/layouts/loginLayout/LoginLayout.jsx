import React from "react";
import MenuBar from "../../pages/menuBar/MenuBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      LoginLayout here ....
      <MenuBar></MenuBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
