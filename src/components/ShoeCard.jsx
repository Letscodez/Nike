import { motion } from "framer-motion";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
      ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }
      cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <motion.div 
      className="flex justify-center items-center bg-card bg-center bg-cover w-40 h-40 max-sm:h-[25vw] max-sm:w-[25vw] rounded-xl sm:p-4"
      whileHover={{scale:1.05}}
      whileTap={{scale:0.99}}
      transition={{ease:'easeInOut',duration:0.2 }}

      >
        <img
          src={imgURL.thumbnail}
          alt="shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default ShoeCard;
