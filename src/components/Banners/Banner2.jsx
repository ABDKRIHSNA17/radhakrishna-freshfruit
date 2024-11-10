import React from "react";
import BannerImg from "../../assets/fruit-plate2.png";
import { FadeUp, FadeLeft } from "../../utility/animation";
import { motion } from "framer-motion";
const Banner2 = () => {
  return (
    <section className="container mb-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        <div className="font-averia flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
               Essence of
              <span className="font-extrabold uppercase text-yellow-800 mx-1">
                US
              </span>
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-semibold mb-2 text-cyan-950 mr-1">
                Unmatched Quality, Unforgettable Style:
              </span>
              We handpick each product to reflect the perfect blend of
              craftsmanship and style, making your daily choices as unique as
              you are.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-semibold mb-2 text-cyan-950 mr-1">
                Elevating Your Everyday:
              </span>
              RadhaKrishnabrand isn’t just a product—it’s a daily companion, a
              small reminder to live with intention and joy. Discover the little
              things that make a big difference.
            </motion.p>
            <motion.p
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="font-semibold mb-2 text-cyan-950 mr-1">
                Evolving for You:
              </span>
              We’re constantly expanding, offering new items that align with
              your lifestyle. RadhaKrishnabrand is built on the idea of being a
              part of your journey, every step of the way.
            </motion.p>
            <motion.div
              variants={FadeLeft(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start tracking-tighter mt-10"
            >
              <button className="primary-btn">Download App</button>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x:200,  rotate:75 }}
            whileInView={{ opacity: 1, x:0 , rotate: 0 }} 
            transition={{ duration:1 , delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerImg}
            alt=""
            className="w-[480px] md:max-w-[650px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
