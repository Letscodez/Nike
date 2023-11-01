import { motion } from "framer-motion";
const ServiceCard = ({ imgURL, label, subtext, dark }) => {
  return (
    <motion.div
      className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16 shadow-3xl ${
        dark === 0 ? "" : "shadow-[#112229] cursor-pointer"
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ ease: "easeOut", duration: 0.2}}
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p
        className={`mt-3 break-words font-montserrat text-lg leading-normal ${
          dark === 0 ? "text-slate-gray" : "text-gray-300"
        }`}
      >
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
