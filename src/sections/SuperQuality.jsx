import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { motion } from "framer-motion";

const SuperQuality = ({ dark }) => (
  <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
  >
    <div className="flex-1 flex-col flex">
      <motion.h2
        className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
        initial={{ opacity: 0, x: -400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.4, delay: 0.5 }}
      >
        We Provide You <span className="text-coral-red">Super</span>
        <br />
        <span className="text-coral-red">Quality</span> Shoes
      </motion.h2>
      <motion.div
        className={
          dark === 0
            ? "info-text"
            : "font-montserrat text-lg leading-7 text-gray-300"
        }
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
      >
        <p className="mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <motion.div
          className="mt-11"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4}}
        >
          <Button label="View details" />
        </motion.div>
      </motion.div>
    </div>
    <div className="flex flex-1 justify-center items-center">
      <motion.img
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeIn", duration: 1, delay: 0.7 }}
        viewport={{once: true}}
      />
    </div>
  </section>
);

export default SuperQuality;
