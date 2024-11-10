import React from "react";
import {motion , AnimatePresence} from "framer-motion"

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode="wait">
    {
      open && (
        <motion.div 
        initial = {{opacity : 0 , y: -50 , x:-50}}
        animate ={{opacity:1 , y:0 , x:0}}
        exit = {{opacity:0 , y: 100}}
        transition = {{duration: 0.3}}

        className="absolute top-20 left-0 w-full h-screen z-20 ">
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col items-center gap-10">
              <li className="">Home</li>
              <li className="">About</li>
              <li className="">Product</li>
              <li className="">Services</li>
            </ul>
          </div>
        </motion.div>
      )
    }
    </AnimatePresence>
  )
};

export default ResponsiveMenu;
