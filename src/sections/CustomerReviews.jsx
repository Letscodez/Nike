import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";

const CustomerReviews = ({ dark }) => {
  return (
    <section>
      <motion.h3
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className={`font-palanquin text-center text-4xl font-bold ${
          dark === 0 ? "" : "text-[#b7b7e0]"
        }`}
      >
        What Our <span className="text-coral-red">Customers</span> Say?
      </motion.h3>
      <motion.p
        className={`${
          dark === 0
            ? "info-text"
            : "font-montserrat text-lg leading-7 text-gray-300"
        } m-auto mt-4 max-w-lg text-center`}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </motion.p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            dark={dark}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
