import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="flex text-[#717171] text-lg pl-28 pt-6 pb-10 font-light" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center hover:text-blue-600"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ml-1 hover:text-blue-600 md:ml-2"
            >
              Products
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-3 h-3 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ml-1 md:ml-2 border-b-[1px] border-blue-600">
              Laptops
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
