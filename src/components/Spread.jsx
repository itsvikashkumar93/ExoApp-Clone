import { motion } from "framer-motion";
import React from "react";

function Spread() {
  return (
    <div className="w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-speed=".2"
        className="text-container h-[75vh] sm:h-[100vh] w-full py-20 text-black flex items-center justify-between flex-col"
      >
        <div className="text-top flex gap-2 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h4 className="text-sm sm:text-base">In the media</h4>
        </div>

        {["Spread", "the News"].map((elem, i) => (
          <h1 key={i} className="text-6xl text-center leading-none -my-8 sm:-my-8 sm:text-[10vw] sm:tracking-tight overflow-hidden">
            <motion.span
              initial={{ rotate: 70, y: "60%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 1.3,
              }}
              className="inline-block origin-left"
            >
              {elem}
            </motion.span>
          </h1>
        ))}

        <p className="text-center px-16 text-lg sm:text-2xl sm:px-[35%]">
          Find out more about our work on these leading design and technology
          platforms.
        </p>

        <div className="link flex gap-1 ">
          <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 stroke-zinc-500 stroke-2 fill-transparent"
            data-v-5152decb=""
          >
            <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
          </svg>
          <a
            href="#"
            className="border-b-2 border-zinc-400 leading-none sm:text-lg sm:leading-[1.1vw]"
          >
            Browse all news
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spread;
