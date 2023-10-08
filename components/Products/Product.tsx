import React from "react";
import Pricing from "../Pricing/Pricing";
import Gallery from "../Gallery/Gallery";
import Details from "../Details/Details";
import Tabs from "../Tabs/Tabs";

const Product = () => {
  return (
    <div className="flex flex-col px-28">
      <div className="flex">
        <Gallery />
        <Details />
        <Pricing />
      </div>
      <Tabs />
    </div>
  );
};

export default Product;
