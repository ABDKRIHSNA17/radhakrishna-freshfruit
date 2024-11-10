import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 1,
    title: "Products",
    link: "/",
  },
  {
    id: 1,
    title: "About",
    link: "/",
  },
  {
    id: 1,
    title: "Shop",
    link: "/",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0, x: 20 , y:-20 }}
          animate={{ opacity: 1, x: 0, y:0  }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="container flex justify-between items-center"
        >
          <div className="text-2xl flex items-center gap-2 font-bold">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-800" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavBarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className=" inline-block py-1 px-3 text-gray-500 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          <div className="md:hidden " onClick={handleOpen}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
