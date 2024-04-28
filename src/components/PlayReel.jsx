import React, { useEffect, useRef } from "react";
import video6 from "../assets/video6.mp4";
import gsap, { ScrollTrigger } from "gsap/all";

function PlayReel() {
  const videodiv = useRef(null);
  const parent = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: 'top 0',
        pin: true,
        // markers: true,
        scrub: 1,
      },
    });

    tl.to(videodiv.current, {
      width: "100%"
    }, 'a')
    .to(play.current, {
      x: '62%'
    }, 'a')
    .to(reel.current, {
      x: '-62%'
    }, 'a')
  });

  return (
    <div
      ref={parent}
      className="h-screen w-full bg-black text-white  relative "
    >
      <div className="video-container w-full h-full flex items-center justify-center overflow-hidden">
        <video
          ref={videodiv}
          autoPlay
          muted
          loop
          className="w-48 sm:w-[23%] aspect-video opacity-[50%]"
          src={video6}
        ></video>
      </div>
      <div className="overlay absolute top-0 left-0 py-20 px-8 sm:py-14 w-full h-full flex flex-col items-center justify-between">
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
          <h4 className="text-sm ">Work in motion</h4>
        </div>

        <h1 className="w-full flex justify-center items-center gap-20 sm:gap-96 sm:px-32">
          <div ref={play} className="text-6xl sm:text-[10vw]">Play</div>
          <div ref={reel} className="text-6xl sm:text-[10vw]">Reel</div>
        </h1>

        <p className="text-sm text-center">
          Our work is best experienced in motion. Don’t <br />
          forget to put on your headphones.
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
