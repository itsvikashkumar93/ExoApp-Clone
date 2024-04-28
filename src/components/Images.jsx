import React, { useEffect, useRef } from "react";
import video7 from "../assets/home-news-diesel-be-a-follower.mp4";
import video8 from "../assets/news-rino-pelle.mp4";
import gsap, { ScrollTrigger } from "gsap/all";
function Images() {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        // top: "0 0",
        start: "0 90%",
        // end: "top 10%",
        // markers: true,
        scrub: 1,
      },
    });

    tl.to(
      first.current,
      {
        x: "20%",
      },
      "a"
    )
      .to(
        second.current,
        {
          x: "-20%",
        },
        "a"
      )
      .to(
        third.current,
        {
          x: "-20%",
        },
        "a"
      )
      .to(
        fourth.current,
        {
          x: "30%",
        },
        "a"
      );
  });

  return (
    <div className="images-container h-[70vh] sm:h-[130vh] w-full flex items-center justify-center">
      <div
        ref={parent}
        className="images h-[50%]  w-[37%] sm:h-[70%] sm:w-[26%] relative"
      >
        <div
          ref={first}
          className="absolute h-24 w-16 left-32 top-6 sm:h-64 sm:w-44 sm:left-[100%] sm:top-16"
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute h-[33%] aspect-video -left-28 top-20 sm:-left-[92%] sm:top-52"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src={video7}
          ></video>
        </div>
        <div
          ref={third}
          className="absolute h-24 w-32 -left-[80%] -bottom-20 sm:h-[40%] sm:w-[100%] sm:-left-[100%] sm:-bottom-52 "
        >
          <img
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute h-[60%] w-36 -right-28 -bottom-28 sm:w-[100%] sm:-right-[100%] sm:-bottom-[50%]"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            src={video8}
          ></video>
        </div>

        <img
          className="h-full w-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
