import React from "react";
import logo from "../images/logo_2.webp";
import flag from "../images/flag.png";

const Footer = () => {
  return (
    <div className="w-full pb-20 mt-20">
      <img src={logo} alt="logo_image" className="w-44 ml-8" />
      <div className="text-blue-950 font-bold  mt-4 flex justify-between text-sm">
        <ul className="flex">
          <li className="ml-8 cursor-pointer">Help</li>
          <li className="ml-5 cursor-pointer">Contact</li>
          <li className="ml-5 cursor-pointer">Fees</li>
          <li className="ml-5 cursor-pointer">Security</li>
          <li className="ml-5 cursor-pointer">Apps</li>
          <li className="ml-5 cursor-pointer">Shop</li>
          <li className="ml-5 cursor-pointer">Enterprise</li>
          <li className="ml-5 cursor-pointer">Partners</li>
          <li className="ml-5 cursor-pointer">Feedback</li>
        </ul>
        <img
          src={flag}
          alt="flag_image"
          className="w-5 h-4 object-cover mr-7 cursor-pointer"
        />
      </div>
      <div className="w-[96%] h-[2px] bg-slate-300 mt-5 mx-auto"></div>
      <div className="text-blue-950 font-bold  mt-4 flex justify-between text-sm">
        <ul className="flex">
          <li className="ml-8 cursor-pointer">About</li>
          <li className="ml-5 cursor-pointer">Newsroom</li>
          <li className="ml-5 cursor-pointer">Jobs</li>
          <li className="ml-5 cursor-pointer">Investor Relations</li>
          <li className="ml-5 cursor-pointer">Values in Action</li>
          <li className="ml-5 cursor-pointer">Public Policy</li>
          <li className="ml-5 cursor-pointer">Sitemap</li>
          <li className="ml-5 cursor-pointer">Partners</li>
          <li className="ml-5 cursor-pointer">Feedback</li>
        </ul>
        <ul className="flex">
          <li className="mr-5 cursor-pointer text-gray-500">© 1999-2022</li>
          <li className="mr-5 cursor-pointer">Accessibility</li>
          <li className="mr-5 cursor-pointer">Privacy</li>
          <li className="mr-5 cursor-pointer">Cookies</li>
          <li className="mr-7 cursor-pointer">Legal</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
