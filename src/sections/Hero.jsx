import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ dark }) => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-conatiner"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p
          className="font-montserrat text-xl text-coral-red"
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.7, }}
        >
          Our Summer collections
        </motion.p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[60px] max-sm:leading-[65px] font-bold">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <span
              className={`${
                dark === 0 ? "xl:bg-white" : "sm:bg-[#040b29]"
              } xl:whitespace-nowrap relative z-10 pr-10`}
            >
              The New Arrival
            </span>
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
          >
            <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </motion.p>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          className={`font-montserrat ${
            dark === 0 ? "text-slate-gray" : "text-gray-300"
          } text-lg leading-8 mt-6 mb-14 sm:max-w-sm`}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Button label="Shop now" iconURL={arrowRight} />
        </motion.button>

        <motion.div
          className="flex cursor-default justify-start items-start flex-wrap w-full mt-20 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1,scale:1.05 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {statistics.map((stat) => (
            <motion.div whileHover={{scale: 1.1}} transition={{duration: 0.2}} key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}

        className={`relative rounded-[12px] flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center ${
          dark === 0
            ? "bg-hero bg-primary"
            : "bg-gradient-to-br from-[#14063b] to-[#012722]"
        }`}
      >
        <motion.img
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.99 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:'easeInOut',duration:3}}
        className="flex sm:gap-6 gap-4 absolute -bottom-[5%] min-[1280px]:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
