import React from "react";
import { star } from "../assets/icons";
import { motion } from "framer-motion";

const PopularProductCard = ({ imgURL, name, price, rating, dark }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <motion.img 
      src={imgURL}
       alt={name} 
      className="w-[280px] cursor-pointer h-[280px]" 
      whileHover={{ scale: 1.1 }}
      transition={{ ease: "easeInOut", duration: 0.4}}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="Rating" width={24} height={24} />
        <p
          className={`font-montserrat text-xl leading-normal ${
            dark === 0 ? "text-slate-gray" : "text-gray-300"
          }`}
        >{`(${rating})`}</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="text-xl font-semibold text-coral-red font-montserrat mt-2 leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
