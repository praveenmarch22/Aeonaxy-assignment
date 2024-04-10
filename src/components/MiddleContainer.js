import React from "react";

const MiddleContainer = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto mt-96">
      <div className="w-[30%] ">
        <h3 className="font-bold  text-blue-900"> Small-to-Medium Business</h3>
        <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
        <div className="flex mt-7 justify-between">
          <div className="text-blue-950 font-medium ">
            <div>Introduction</div>
            <div className="mt-2">Getting Started</div>
          </div>
          <div className="ml-7">
            <div className="text-blue-950 font-medium">All Solutions</div>
            <div className="mt-2 text-gray-700">Accept Payments</div>
            <div className="mt-1 text-gray-700">Make Payments</div>
            <div className="mt-1 text-gray-700">Manage Risk</div>
            <div className="mt-1 text-gray-700">Accelerate Growth</div>
            <div className="mt-1 text-gray-700">StreamLine Operations</div>
          </div>
        </div>
      </div>
      <div className="w-[35%] ">
        <h3 className="font-bold  text-blue-900"> Enterprise</h3>
        <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
        <div className="flex mt-7 justify-between">
          <div className="text-blue-950 font-medium ">
            <div>Introduction</div>
            <div className="mt-2">Market Places & Partners</div>
          </div>
          <div className="ml-7">
            <div className="text-blue-950 font-medium">
              Platform & Solutions
            </div>
            <div className="mt-2 text-gray-700">Accept Payments</div>
            <div className="mt-1 text-gray-700">Make Payments</div>
            <div className="mt-1 text-gray-700">Manage Risk</div>
            <div className="mt-1 text-gray-700">Accelerate Growth</div>
            <div className="mt-1 text-gray-700">StreamLine Operations</div>
          </div>
        </div>
      </div>
      <div className="w-[10%] ">
        <h3 className="font-bold  text-blue-900"> More</h3>
        <div className="w-full h-[1px] bg-gray-300 mt-1"></div>
        <div className="flex mt-7 justify-between">
          <div className="text-blue-950 font-medium ">
            <div>Nonprofits</div>
            <div className="mt-2">Pricing</div>
            <div className="mt-2">Resource Center</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleContainer;
