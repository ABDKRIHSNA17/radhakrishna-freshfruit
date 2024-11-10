import React from "react";
import BannerImg from "../../assets/banner-bg.jpg";
import { FadeLeft  } from "../../utility/animation";
import { motion } from "framer-motion";
const bgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}
const Banner3 = () => {
  return (
    <section className="container">
      <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
        <div className="">

        </div>
        <div className="font-averia flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase "
            >
              GREAT FRESH TODAY!
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6"
            >
              Every product we offer is chosen with your needs in mind. We blend
              quality with style, ensuring that each item adds value to your
              day.
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

export default Banner3;
