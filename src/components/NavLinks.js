import React from "react";

const NavLinks = () => {
  return (
    <div className="flex flex-grow justify-between  items-center">
      <ul className="flex">
        <li className="text-xl ml-8 text-blue-950 font-semibold cursor-pointer ">
          Personal
        </li>
        <li className="text-xl ml-8 text-blue-950 font-semibold cursor-pointer">
          Business
        </li>
        <li className="text-xl ml-8 text-blue-950 font-semibold cursor-pointer">
          Developer
        </li>
        <li className="text-xl ml-8 text-blue-950 font-semibold cursor-pointer">
          Help
        </li>
      </ul>
      <div className="flex">
        <button className="rounded-full border-2 w-32 text-xl border-blue-950 px-5 py-3 mr-3 text-center font-semibold cursor-pointer">
          Log In
        </button>
        <button className="rounded-full border-2 w-32 text-xl bg-blue-950 text-white px-5 py-3 mr-3 text-center font-semibold cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
