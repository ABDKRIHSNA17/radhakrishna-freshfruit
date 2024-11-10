import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-white py-12 mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Radha</p>
          <p className="text-secondary">Krishna</p>
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
        </div>
        <div className="text-3xl flex items-center gap-4 my-6 text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
          <FaLeaf />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
