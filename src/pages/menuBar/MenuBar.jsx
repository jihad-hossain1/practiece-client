import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <div>
        <Link className="me-3" to="/">
          Home
        </Link>
        <Link className="me-3" to="/services">
          Services
        </Link>
        <Link className="me-3" to="/login">
          login
        </Link>
        <Link className="me-3" to="/login">
          logout
        </Link>
        <Link className="me-3" to="/register">
          register
        </Link>
        {/* <Link to="/register">register</Link> */}
      </div>
    </div>
  );
};

export default MenuBar;
