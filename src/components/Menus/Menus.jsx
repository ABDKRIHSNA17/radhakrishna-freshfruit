import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";

const MenusData = [
  {
    id: 1,
    title: "Kashmiri  Apples",
    link: "/",
    price: "150/- kg",
    img: Fruit1,
    delay: 0.5,
  },
  {
    id: 1,
    title: " Nagpur Oranges",
    link: "/",
    price: "110/- kg",
    img: Fruit2,
    delay: 0.7,
  },
  {
    id: 1,
    title: " Fresh Avocado",
    link: "/",
    price: "250/- kg",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 1,
    title: "Taja Cherries",
    link: "/",
    price: "500/- kg",
    img: Fruit4,
    delay: 1.1,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20 text-primary ">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {MenusData.map((menu, index) => (
            <motion.div
            key={index}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileInHover={{scale :1.2}}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.25)] flex flex-row justify-around items-center gap-4 "
            >
              <img
                src={menu.img}
                alt=""
                className="w-[55px] md-4 scale-125 transfrom -translate-y-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary font-primary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
