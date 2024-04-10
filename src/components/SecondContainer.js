import React from "react";

const SecondContainer = () => {
  return (
    <div className="mt-20 ml-32">
      <div className="text-4xl font-medium w-[70%]">
        Some other ways to connect with us
      </div>
      <div className="my-8">
        <p className="font-semibold text-medium">
          Want to speak with sales right away?
        </p>
        <p className="text-blue-800 text-lg font-bold">Call 877-794-7639</p>
      </div>
      <div className="my-8">
        <p className="font-semibold text-medium">
          Need help with your existing account?
        </p>
        <p className="text-blue-800 text-lg font-bold flex items-center">
          Visit our Help Center
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-blue-200 rounded-full  ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </p>
      </div>
      <div className="my-8">
        <p className="font-semibold text-medium">
          Want helpful business insights?
        </p>
        <p className="text-blue-800 text-lg font-bold flex items-center ">
          Visit our Business Resource Center
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 bg-blue-200 rounded-full  ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default SecondContainer;
