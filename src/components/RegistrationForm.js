import React, { useState } from "react";
import { countries } from "../utils/constants";

const RegistrationForm = () => {
  const [inputValues, setInputValues] = useState({
    FirstName: "",
    LastName: "",
    WorkEmail: "",
    PhoneNumber: "",
    CompanyName: "",
    CompanyWebsite: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValues({ ...inputValues, [id]: value });
  };

  return (
    <div className="w-[560px] rounded-md shadow-md mr-14 absolute right-1 -mt-52 z-20 bg-white pb-20">
      <div className="text-2xl font-semibold text-gray-700 mt-10 ml-[53px]">
        Get Started
      </div>
      <p className="font-semibold text-gray-600 my-2 ml-[53px] w-[420px]">
        Tell us a little about your business so we can connect you with the
        right people.
      </p>
      <form className="mx-auto w-[450px] mt-6">
        {Object.entries(inputValues).map(([inputName, inputValue]) => (
          <div key={inputName} className="relative my-3">
            <input
              type="text"
              className="w-full border-2 border-gray-500 rounded-sm py-2 pt-3 pl-1 peer mx-auto"
              id={inputName}
              value={inputValue}
              onChange={handleInputChange}
            />
            <label
              htmlFor={inputName}
              className={`absolute left-0 py-2 pl-2 text-gray-500 cursor-text ${
                inputValue
                  ? "-top-2 text-xs"
                  : "peer-focus:-top-2 peer-focus:text-xs"
              } transition-all duration-500`}
            >
              {inputName.split(/(?=[A-Z])/).join(" ")}*{" "}
            </label>
          </div>
        ))}
        <div className="relative my-3">
          <select
            className="w-full border-2 border-gray-500 rounded-sm py-2 pt-3 pl-1  mx-auto"
            id="countries"
          >
            {countries.map((country) => (
              <option className="cursor-pointer">{country}</option>
            ))}
          </select>
          <label
            htmlFor="countries"
            className="absolute left-0 py-2 pl-2 text-gray-500 text-xs  -mt-2"
          >
            Country*
          </label>
        </div>
        <div className="relative my-3">
          <select
            className="w-full border-2 border-gray-500 rounded-sm py-2 pt-3 pl-1  mx-auto"
            id="sales"
          >
            <option className="cursor-pointer">Select Annual Sales</option>
          </select>
          <label
            htmlFor="sales"
            className="absolute left-0 py-2 pl-2 text-gray-500 text-xs m -mt-2"
          >
            Estimated annual sales*
          </label>
        </div>
        <div className="relative my-3">
          <select
            className="w-full border-2 border-gray-500 rounded-sm py-2 pt-3 pl-1  mx-auto"
            id="countries"
          >
            <option className="cursor-pointer">Yes</option>
            <option className="cursor-pointer">No</option>
          </select>
          <label
            htmlFor="countries"
            className="absolute left-0 py-2 pl-2 text-gray-500 text-xs  -mt-2"
          >
            Do you already hve a PayPal Business account?*
          </label>
        </div>
        <div className="text-xs flex items-center font-semibold">
          <input type="checkbox" className="h-5 w-5 mr-1" /> I have read and
          accepted{" "}
          <span className="text-blue-700 ml-1"> PayPal Privacy Policy.</span>
        </div>
        <div className="text-xs mt-3 mx-auto w-full text-center">
          <p className="ml-6 w-full font-semibold text-left text-xs">
            I consent to PayPal contacting me by phone or by email, and to
            sending me product or industry informtion relevant to my query. I
            know I csn unsubscribe at any time.
          </p>
          <button className="rounded-full border-2 w-[80%] text-xl text-white bg-customBlue px-8 py-3 mr-3 my-6 mx-auto text-center font-semibold cursor-pointer">
            Submit
          </button>
          <p className="font-semibold text-base mx-auto">*Required fields.</p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
