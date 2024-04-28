import { motion } from "framer-motion";
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";

function Videos({ item }) { 
  return (
    <div className="w-full sm:w-[40%] mt-8">
      <div className="container w-full h-[60vh] sm:h-[90vh] relative overflow-hidden">
        <motion.img
          initial={{opacity: 1}}
          whileHover={{opacity: 0}}
          data-scroll
          data-scroll-speed="-0.3"
          className="hidden sm:block sm:z-[2] sm:absolute top-0 left-o w-full h-[110%] object-cover "
          src={item.img}
          alt=""
        />
        <video
          className=" w-full z-[1] absolute h-full object-cover"
          autoPlay
          muted
          loop
          src={item.video}
        ></video>
      </div>
      <div className="text-cont mt-3 sm:flex sm:gap-1 items-center">
        <h3 className="text-sm">{item.title}</h3>
        {<IoRemoveOutline className="hidden sm:block" />}
        <h4 className="text-sm text-zinc-400">{item.desc}</h4>
      </div>
    </div>
  );
}

export default Videos;
