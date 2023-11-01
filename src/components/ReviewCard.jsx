import React from "react";
import { star } from "../assets/icons";
import { motion } from "framer-motion";

const ReviewCard = ({ imgURL, customerName, rating, feedback, dark }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <motion.img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      />
      <motion.p
        className={`mt-6 max-w-sm text-center ${
          dark === 0
            ? "info-text"
            : "font-montserrat text-lg leading-7 text-gray-300"
        }`}
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
      >
        {feedback}
      </motion.p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p
          className={`text-xl font-montserrat ${
            dark === 0 ? "info-text" : "font-montserrat leading-7 text-gray-300"
          }`}
        >
          ({rating})
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
