import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { motion } from "framer-motion";

const PopularProducts = ({ dark }) => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-center gap-5">
        <motion.h2 
        className="text-4xl font-palanquin font-bold"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.7}}
        viewport={{ threshold: 0.3 }}
        >
          Our <span className="text-coral-red">Popular</span> Products
        </motion.h2>
        <motion.p
          className={`lg:max-w-lg mt-2 font-montserrat ${
            dark === 0 ? "text-slate-gray" : "text-gray-300"
          }`}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7}}
          viewport={{ threshold: 0.3 }}
        >
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </motion.p>
      </div>

      <motion.div 
      className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.7}}
      viewport={{ threshold: 0.3,once: true }}
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} dark={dark} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;
