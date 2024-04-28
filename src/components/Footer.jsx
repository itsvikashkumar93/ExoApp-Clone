import React from "react";
import video9 from "../assets/video-6.mp4";

function Footer() {
  return (
    <div className="w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.5"
        className="h-[90vh] w-full bg-[#080608] text-[#E0CCBB] py-12 sm:h-[120vh] sm:py-32"
      >
        <div className="top-text w-full h-[65%] sm:h-[75%] relative px-8 sm:px-32 flex items-end">
          <div className="w-[70%] h-28 absolute top-0 -right-8 sm:h-[50vh] ">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              src={video9}
            ></video>
          </div>
          <div className="items-center w-full absolute top-0 pr-8 ">
            <h1 className="text-6xl leading-none sm:text-[10vw]">
              Our <br />
              Story
            </h1>
            <h3 className="my-7 text-lg opacity-75 sm:text-2xl sm:w-[33%]">
              The story behind Exo Ape is one of exploration, creativity and
              curiosity.
            </h3>
            <div className="link flex gap-2 sm:hidden ">
              <svg
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 stroke-[#E0CCBB] stroke-2 fill-transparent"
                data-v-5152decb=""
              >
                <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
              </svg>
              <a
                href="#"
                className="border-b-[0.1vw] border-[#E0CCBB] leading-none sm:text-lg sm:leading-[1.1vw]"
              >
                Our Story
              </a>
            </div>
          </div>
          <div className="h-[0.2vh] w-full bg-[#9F9085]"></div>
        </div>

        <div className="bottom-text w-full h-[35%] relative px-8 py-10 flex sm:px-32 sm:py-10 sm:justify-between sm:items-end">
          <div className="flex w-full sm:w-[60%] sm:justify-between">
            <div className="w-full w-[20%] hidden sm:block">
              {[
                "Willem II Singel 8",
                "6041 HS, Roermond",
                "The Netherlands",
                "hello@exoape.com",
              ].map((elem, i) => (
                <h5
                  className="text-sm opacity-75 my-1 sm:text-[1.1vw] sm:my-3"
                  key={i}
                >
                  {elem}
                </h5>
              ))}
            </div>
            <div className="w-full sm:w-[15%]">
              {["Work", "Studio", "News", "Contact"].map((elem, i) => (
                <h5
                  className="text-sm opacity-75 my-1 sm:text-[1.1vw] sm:my-3"
                  key={i}
                >
                  {elem}
                </h5>
              ))}
            </div>
            <div className="w-full sm:w-[15%]">
              {["Behance", "Dribble", "Twitter", "Instagram"].map((elem, i) => (
                <h5
                  className="text-sm opacity-75 my-1 sm:text-[1.1vw] sm:my-3"
                  key={i}
                >
                  {elem}
                </h5>
              ))}
            </div>
          </div>

          <div className=" hidden sm:block py-5">
            <div className="link flex gap-2  ">
              <svg
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 stroke-[#E0CCBB] stroke-2 fill-transparent"
                data-v-5152decb=""
              >
                <circle cx="25" cy="25" r="23" data-v-5152decb=""></circle>
              </svg>
              <a
                href="#"
                className="border-b-[0.1vw] border-[#E0CCBB] leading-none sm:text-lg sm:leading-[1.1vw]"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
