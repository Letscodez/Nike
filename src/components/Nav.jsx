import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";

const Nav = ({ setDark, isDark }) => {
  const themeChange = () => {
    setDark(isDark === 0 ? 1 : 0);
  };

  return (
    <motion.header
      className="padding-x py-8 absolute z-10 w-full"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <motion.img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="w-[129px] h-[29px]"
            initial={{ opacity: 0, x: -100, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              ease: "ease",
              duration: 0.5,
              damping: 10,
              type: "spring",
            }}
            whileHover={{ scale: [0.8, 1.2, 1] }}
            viewport={{ once: true }}
          />
        </a>
        <ul
          className={`${
            isDark === 1 ? "text-white" : "text-slate-gray"
          } flex-1 flex justify-center items-center m-auto gap-16 max-lg:hidden`}
        >
          {navLinks.map((item) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "linear", duration: 0.2 }}
              whileHover={{ scale: 1.2 }}
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg "
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          className={`${
            isDark === 0
              ? "bg-[#9191d3b2] text-gray-50"
              : "bg-[#2b3861] ml-3 mr-3"
          } rounded-xl p-2 font-palanquin max-sm:ml-[2.5vh] max-sm:max-w-[80px] max-sm:text-xs ml-auto`}
          onClick={themeChange}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "ease",
            duration: 0.5,
            damping: 10,
            type: "spring",
          }}
          viewport={{ once: true }}
          whileHover={{scale : 1.04}}
        >
          Switch Theme
        </motion.button>
        <div className="lg:hidden max-lg:block mt-3 ml-4">
          <Menu as="div">
            <Menu.Button>
              <div className={isDark === 1 ? "hidden" : "flex"}>
                <img src={hamburger} width={24} height={24} alt="" />
              </div>
              <button
                className={`bg-[#4d279469] px-4 rounded-3xl py-[2px] ${
                  isDark === 0 ? "hidden" : "flex"
                }`}
              >
                Menu
              </button>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 divide-y divide-[#afafaf] text-white origin-top-right rounded-md bg-gradient-to-br from-slate-400 to-gray-700 top-[74px] right-2 shadow-4xl p-3 z-0">
                <Menu.Item disabled>
                  <a href="/" className="font-palanquin">
                    Home
                  </a>
                </Menu.Item>
                <br />
                <Menu.Item disabled>
                  <a href="#about-us" className="font-palanquin">
                    About Us
                  </a>
                </Menu.Item>
                <br />
                <Menu.Item>
                  <a href="#products" className="font-palanquin">
                    Products
                  </a>
                </Menu.Item>
                <br />
                <Menu.Item>
                  <a href="#contact-us" className="font-palanquin">
                    Contact Us
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </motion.header>
  );
};

export default Nav;
