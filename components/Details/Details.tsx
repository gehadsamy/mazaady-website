import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div className="w-[21.4375rem] ml-6 mr-12">
      <p className="text-xl font-medium">
        MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch
      </p>

      <div className="mt-2 mb-6 font-medium flex items-center">
        <div className="py-[0.1875rem] px-[0.4375rem] bg-[#063A88] w-fit flex justify-center items-center gap-1">
          <Image
            src={"/star.svg"}
            alt="star"
            width={18}
            height={18}
            className="w-[1.125rem] h-[1.125rem]"
          />
          <p className="text-xs text-white h-fit">4.9</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="27"
          viewBox="0 0 2 27"
          fill="none"
          className="mx-4"
        >
          <path d="M1 1L0.999999 26" stroke="#717171" stroke-linecap="round" />
        </svg>
        <p className="text-sm text-[#717171]">sold 125</p>
      </div>

      <div className="flex gap-8 text-xs text-[#717171] font-medium">
        <div className="flex items-center gap-1">
          <Image
            src={"/shop.svg"}
            alt="shop"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <p>In Stock</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={"/verify.svg"}
            alt="shop"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <p>Guaranteed</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src={"/truck.svg"}
            alt="shop"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <p>Free Delivery</p>
        </div>
      </div>

      <div className="mt-6 mb-10 text-[#0C0C0C] font-light flex">
        <p className="mr-10">Select color</p>
        <div className="w-6 h-6 rounded-[2rem] bg-[#959595] mr-2"></div>
        <div className="w-6 h-6 rounded-[2rem] bg-[#353535]">
          <Image src={"tick.svg"} alt="tick" width={24} height={24} />
        </div>
      </div>

      <div className="pl-4 flex flex-col gap-4">
        <div className="flex">
          <li className="text-[#717171] w-[11.5rem]">brand</li>
          <p className="text-[#0C0C0C]">Apple</p>
        </div>
        <div className="flex">
          <li className="text-[#717171] w-[11.5rem]">Model Name </li>
          <p className="text-[#0C0C0C]">Macbook Pro</p>
        </div>
        <div className="flex">
          <li className="text-[#717171] w-[11.5rem]">Screen Size</li>
          <p className="text-[#0C0C0C]">13.3 Inches</p>
        </div>
        <div className="flex">
          <li className="text-[#717171] w-[11.5rem]">Hard Disk Size</li>
          <p className="text-[#0C0C0C]">256 GB</p>
        </div>
        <div className="flex">
          <li className="text-[#717171] w-[11.5rem]">CPU Model</li>
          <p className="text-[#0C0C0C]">core i5</p>
        </div>
      </div>

      <div className="flex items-center text-sm ml-10 mt-2 text-[#0C68F4]">
        <p>Show More</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.74 16.28C10.55 16.28 10.36 16.21 10.21 16.06C9.91999 15.77 9.91999 15.29 10.21 15L13.21 12L10.21 8.99997C9.91999 8.70997 9.91999 8.22997 10.21 7.93997C10.5 7.64997 10.98 7.64997 11.27 7.93997L14.8 11.47C15.09 11.76 15.09 12.24 14.8 12.53L11.27 16.06C11.12 16.21 10.93 16.28 10.74 16.28Z"
            fill="#0C68F4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Details;
