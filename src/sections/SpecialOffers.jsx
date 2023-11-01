import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

const SpecialOffer = ({ dark }) => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div 
      className="flex-1"
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: 0.5 }}
      viewport={{ threshold: 0.3,once: true }}
      >
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full cursor-auto"
        />
      </motion.div>
      <div className="flex flex-1 flex-col">
        <motion.h2 
        className="text-4xl font-palanquin font-bold"
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        >
          <span className="text-coral-red">Special </span>
          Offer
        </motion.h2>
        <motion.p
          className={
            dark === 0
              ? "info-text"
              : "font-montserrat text-lg leading-7 text-gray-300"
          }
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
        >
          <p className={`mt-4`}>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </motion.p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
