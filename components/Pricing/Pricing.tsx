import Image from "next/image";
import React from "react";

const Pricing = () => {
  return (
    <div className="w-[19.5rem] h-fit flex flex-col gap-4 p-6 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div className="flex justify-between items-start">
        <div>
        <p className="text-lg font-medium text-[#0C0C0C]">$ 1299.00</p>
        <p className="mt-1 text-sm font-light text[#717171]">
          last price $ 1410,87
        </p>
        </div>
        <div className="flex gap-1 items-center text-[#F45E0C] font-medium">
            <Image src={'/discount.svg'} alt="discount" width={24} height={24} />
            <p>-12%</p>
        </div>
      </div>

      <div className="font-light">
        <p className="text-[#444444] flex gap-1 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM1.2 10C1.2 14.8601 5.13989 18.8 10 18.8C14.8601 18.8 18.8 14.8601 18.8 10C18.8 5.13989 14.8601 1.2 10 1.2C5.13989 1.2 1.2 5.13989 1.2 10Z"
              fill="#444444"
            />
          </svg>
          Pay Now
        </p>
        <p className="text-[#444444] flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM1.2 10C1.2 14.8601 5.13989 18.8 10 18.8C14.8601 18.8 18.8 14.8601 18.8 10C18.8 5.13989 14.8601 1.2 10 1.2C5.13989 1.2 1.2 5.13989 1.2 10Z"
              fill="#0C68F4"
            />
            <circle cx="10" cy="10" r="7" fill="#0C68F4" />
          </svg>
          Buy in installments
        </p>
        <p className="text-sm font-light text[#717171] ml-6">
          choose your installments period
        </p>

        <div className="flex gap-2 my-4 font-light text-[#0951BE] text-center">
            <div className="w-fit border-[1px] border-[#0951BE] rounded px-[0.375rem] py-[0.4375rem]">
                <p className="text-lg">3</p>
                <p className="text-xs">Months</p>
            </div>
            <div className="w-fit border-[1px] border-[#0951BE] rounded px-[0.375rem] py-[0.4375rem]">
                <p className="text-lg">6</p>
                <p className="text-xs">Months</p>
            </div>
            <div className="w-fit border-[1px] border-[#0951BE] rounded px-[0.375rem] py-[0.4375rem]">
                <p className="text-lg">12</p>
                <p className="text-xs">Months</p>
            </div>
            <div className="w-fit border-[1px] border-[#0951BE] rounded px-[0.375rem] py-[0.4375rem]">
                <p className="text-lg">18</p>
                <p className="text-xs">Months</p>
            </div>
        </div>

        <p className="text-[#0C0C0C] font-light">
          $433.00 <span className="text-[#717171]">Month</span>
        </p>
      </div>

      <div className="text-center">
        <p className="w-full mb-2 py-4 bg-[#0C68F4] text-white rounded-lg cursor-pointer">
          Buy Now
        </p>
        <p className="w-full py-4 bg-white text-[#0C68F4] rounded-lg border-2 border-[#0C68F4] cursor-pointer">
          Add to cart
        </p>
      </div>
    </div>
  );
};

export default Pricing;
