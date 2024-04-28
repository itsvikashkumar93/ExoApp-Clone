import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Spread from "./components/Spread";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" w-full text-white font-['TWK']">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
      <Footer />
    </div>
  );
}

export default App;
