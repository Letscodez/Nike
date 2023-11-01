import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

const Services = ({ dark }) => {
  return (
    <motion.section 
    className="max-container flex justify-center flex-wrap gap-9"
    initial={{ opacity: 0, x: -800 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
    viewport={{once: true}}
    >
      {services.map((service) => (
        <ServiceCard key={service.label} dark={dark} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;
