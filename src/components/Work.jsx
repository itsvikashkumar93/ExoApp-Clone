import React from "react";
import Videos from "./Videos";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import { motion } from "framer-motion";

function Work() {
  const data = [
    {
      video: video1,
      title: "Columbia Pictures",
      desc: "Celebrating a Century of Cinema",
      img: img1,
    },
    {
      video: video2,
      title: "Rino & Pelle",
      desc: "Effortless chic lifestyle",
      img: img2,
    },
    {
      video: video3,
      title: "Aebele Interiors",
      desc: "Luxurious design experience",
      img: img3,
    },
    {
      video: video4,
      title: "Pixelflakes",
      desc: "Architectural marketing agency",
      img: img4,
    },
  ];
  return (
    <div className="w-full min-h-screen relative ">
      <div className="max-w-screen-2xl mx-auto text-black px-7 py-20 pb-32 sm:pl-52">
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
          <h4 className="text-sm ">Featured Projects</h4>
        </div>
        <div className="work">
          <h1 className="text-6xl my-6 sm:text-[17vw] overflow-hidden">
            <motion.span
              initial={{ rotate: 70, y: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{once: true}}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                duration: 1,
              }}
              className="inline-block origin-left"
            >
              Work
            </motion.span>
          </h1>
          <p className="pr-1 leading-snug text-lg">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
        <div className="videos py-3 sm:flex flex-wrap gap-5 ">
          {data.map((elem, i) => (
            <Videos item={elem} key={i} />
          ))}
        </div>
        <div className="link absolute bottom-20 left-[50%] sm:left-[72%] -translate-x-[50%] flex gap-1 mt-16 ">
          <svg
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="w-2 stroke-zinc-500 stroke-2 fill-transparent"
            data-v-5152decb=""
          >
            <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
          </svg>
          <a href="#" className="border-b-2 border-zinc-400 leading-none">
            Browse all work
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
