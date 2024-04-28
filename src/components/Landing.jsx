import React from "react";
import exoImg from "../assets/exo-ape-hero-1.jpg";
import { motion } from "framer-motion";
import { Power0, Power4 } from "gsap";
function Landing() {
  return (
    <div className="h-[135vh] sm:h-[280vh] w-full relative font-['TWK_Lausanne_300']">
      <div className="picture w-full h-full overflow-hidden ">
        <img
          data-scroll
          data-scroll-speed="-1"
          src={exoImg}
          className="w-full h-full object-cover"
          alt="logo"
        />
      </div>

      <div className="text1 absolute top-[30%] sm:top-[22%] max-w-screen-2xl px-7 sm:px-32">
        <div className="para1">
          {[
            "Global digital design studio partnering",
            "with brands and businesses that create",
            "exceptional experiences where people",
            "live, work, and unwind.",
          ].map((el, i) => (
            <p
              key={i}
              className="text-lg tracking-tight leading-snug w-fit sm:text-[1.7vw] overflow-hidden"
            >
              <motion.span
                initial={{ rotate: 30, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.4,
                  delay: i * 0.2,
                }}
                className="inline-block origin-left "
              >
                {el}
              </motion.span>
            </p>
          ))}
        </div>

        <div className="big-text mt-5 sm:mt-24">
          {["Digital", "Design", "Experience"].map((el, i) => (
            <h1
              key={i}
              className="text-[16vw] leading-[18vw] sm:-mt-12 tracking-tight overflow-hidden"
            >
              <motion.span
                initial={{ rotate: 30, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  duration: 1.4,
                  delay: 1 + i * 0.3,
                }}
                className="inline-block  "
              >
                {el}
              </motion.span>
            </h1>
          ))}
          <h1 className=""></h1>
        </div>

        <div className="para2 mt-16">
          <p className="text-lg pr-1 leading-snug sm:w-[39%] sm:text-2xl ">
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
          <div className="link-container flex justify-between items-center  mt-10">
            <a
              href="#"
              className="border-b-2 border-zinc-400 text-base w-fit inline-block"
            >
              The Studio
            </a>
            <div className="links hidden sm:flex justify-between w-[30%]">
              <div className="part1">
                {["Work", "Studio", "News", "Contact"].map((elem, i) => (
                  <h3 className="text-[1.1vw] py-1" key={i}>
                    {elem}
                  </h3>
                ))}
              </div>
              <div className="part2">
                <h3 className="text-[1.1vw] py-1">hello@exoape.com</h3>
                <a
                  href="#"
                  className="text-[1.1vw] py-1 hover:border-b-2 border-zinc-400"
                >
                  +31 772 086 200
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
