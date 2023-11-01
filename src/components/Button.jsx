import { motion } from "framer-motion";
import { useState } from "react";

const Button = ({
  label,
  iconURL,
  textColor,
  backgroundColor,
  borderColor,
  fullWidth,
}) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <motion.button
      className={`${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        fullWidth ? "w-full" : ""
      }`}
      whileHover={{ scale: 1.03 }}
      onHoverStart={toggleHover}
      onHoverEnd={toggleHover}
    >
      {label}

      {iconURL && (
        <motion.img
          src={iconURL}
          alt="img"
          className={`ml-2 rounded-full w-5 h-5 ${hover ? "hovered" : ""}`}
          initial={{ x: 0 }}
          animate={{ x: hover ? 5 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};

export default Button;
