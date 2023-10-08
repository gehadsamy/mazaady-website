"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const technicalDetails: Array<Array<string>> = [
    ["Display", "13.3-inch (diagonal) LED-backlit display with IPS technology"],
    ["Graphics", "Apple 10-core GPU"],
    ["Processor", "Apple M2 chip"],
    ["In the box", "67W USB-C Power Adapter, USB-C Charge Cable (2 m)"],
    ["Height", "0.61 inch (1.56 cm)"],
    ["Width", "11.97 inches (30.41 cm)"],
  ];
  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="my-12">
      <ul className="flex mb-4 border-b border-gray-200 text-lg font-light">
        <li
          className={`mr-2 ${
            activeTab === 1
              ? "border-blue-500 text-[#0C68F4]"
              : "border-transparent hover:text-gray-600"
          }`}
        >
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 1 ? "active:border-[#0C68F4]" : "border-transparent"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Technical Details
          </button>
        </li>
        <li
          className={`mr-2 ${
            activeTab === 2
              ? "border-blue-500 text-[#0C68F4]"
              : "border-transparent hover:text-gray-600"
          }`}
        >
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 2 ? "active:border-[#0C68F4]" : "border-transparent"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Similar Products
          </button>
        </li>
        <li
          className={`mr-2 ${
            activeTab === 3
              ? "border-blue-500 text-[#0C68F4]"
              : "border-transparent hover:text-gray-600"
          }`}
        >
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 3 ? "active:border-[#0C68F4]" : "border-transparent"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Comments
          </button>
        </li>
      </ul>
      <div className="pt-8">
        {activeTab === 1 && (
          <div>
            <p className="text-xl font-medium text-[#0C0C0C] pb-4">
              Technical Details
            </p>
            {technicalDetails.map((row, index) => (
              <div
                key={index}
                className={`flex pl-3 py-5 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                <p className="w-[19.5rem] font-medium text-[#717171]">
                  {row[0]}
                </p>
                <p className="w-[31rem] font-light text-[#2D2D2D]">{row[1]}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && <p>This is the content for Similar Products</p>}
        {activeTab === 3 && <p>This is the content for Comments</p>}
      </div>

      <div className="flex items-center gap-2 mt-5 text-sm text-[#0C68F4]">
        Show More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 15.01C11.81 15.01 11.62 14.94 11.47 14.79L7.94 11.26C7.65 10.97 7.65 10.49 7.94 10.2C8.23 9.91001 8.71 9.91001 9 10.2L12 13.2L15 10.2C15.29 9.91001 15.77 9.91001 16.06 10.2C16.35 10.49 16.35 10.97 16.06 11.26L12.53 14.79C12.38 14.94 12.19 15.01 12 15.01Z"
            fill="#0C68F4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tabs;
