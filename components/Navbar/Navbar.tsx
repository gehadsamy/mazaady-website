import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-28 py-[1.15rem] flex justify-between items-center border-b-[1px] border-blue-600 border-opacity-30">
      <Image src={"/logo.svg"} alt="logo" width={56} height={63} className="w-14 h-[3.9375rem] cursor-pointer" />

      <div className="flex gap-12 text-[#0C0C0C] text-lg font-light">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Products</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">FAQ</p>
        <p className="cursor-pointer">Contact Us</p>
      </div>

      <div className="flex gap-2">
        <Image src={'/search.svg'} alt="search" width={24} height={24} className="w-6 h-6 cursor-pointer" />
        <Image src={'/bag.svg'} alt="cart" width={24} height={24} className="w-6 h-6 cursor-pointer" />
        <Image src={'/user.svg'} alt="user" width={24} height={24} className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
