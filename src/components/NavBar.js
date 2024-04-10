import React from "react";
import logo from "../images/logo.jpg";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="h-[80px]  flex justify-center items-center">
      <img src={logo} alt={"Logo_image"} className=" h-10 ml-6 " />
      <NavLinks />
    </div>
  );
};

export default NavBar;
