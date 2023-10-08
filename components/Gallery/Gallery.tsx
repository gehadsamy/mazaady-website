"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery5.png",
  "/gallery6.png",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const remainingImages = images.filter((image) => image !== selectedImage);

  const handleClick = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <div className="w-[31rem] ">
      <div className="h-[21.125rem] w-full">
        <Image
          src={selectedImage}
          alt="image"
          width={496}
          height={338}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex justify-between mt-4">
        {remainingImages.map((image, index) => (
          <div
            key={index}
            onClick={() => handleClick(image)}
            className={`cursor-pointer p-2 ${
              selectedImage === image ? "border border-blue-500" : ""
            }`}
          >
            <Image
              src={image}
              alt="image"
              width={80}
              height={71}
              className="w-20 h-[4.4375rem] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
