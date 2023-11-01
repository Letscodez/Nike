import Button from "../components/Button";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <motion.h3 
      className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3, delay: 0.3 }}
      >
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </motion.h3>
      <motion.div 
      className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border bg-white sm:border-slate-gray rounded-3xl'
      initial={{ opacity: 0, x: 400 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
      >
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;