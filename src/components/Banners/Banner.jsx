import React from "react";
import BannerImg from "../../assets/fruits-splash.png";
import { FadeUp, FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section className="bg-secondary/35">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow-md"
          />
        </div>
        <div className="font-averia flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase "
            >
              Why Choose
              <span className="font-extrabold uppercase text-yellow-800 mx-1 mr-1">
                RadhaKrishna
              </span>
              furit store ?
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-semibold  mb-2 text-cyan-950 mr-1">
                Crafted with Love and Care:
              </span>
              Every product we offer is chosen with your needs in mind. We blend
              quality with style, ensuring that each item adds value to your
              day.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-semibold  mb-2 text-cyan-950 mr-1">
                Memorable Experience:
              </span>
              Our promise is simple – once you try RadhaKrishnabrand, it will
              become an essential part of your routine, from the first light of
              morning to the last moments of your day.
            </motion.p>
            <motion.p
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-semibold  mb-2 text-cyan-950 mr-1">
                Expanding Offerings Just for You:
              </span>
              RadhaKrishnabrand is always evolving, introducing new items that
              cater to your lifestyle. We’re committed to bringing you only the
              best.
            </motion.p>
            <motion.div
              variants={FadeLeft(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start tracking-tighter mt-10"
            >
              <button className="primary-btn ">Know More...</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
