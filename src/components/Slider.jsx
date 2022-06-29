import React from "react";
import Marquee from "react-easy-marquee";
import javaScriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg"
function Slider() {
  return (
    <div className="absolute top-0 p-12 right-10 w-1/4 flex justify-center">
      <Marquee
        duration={20000}
        className="text-light text-xl text-gray-400 text-center "
        background="transparent"
        axis="Y"
        width="100%"
        height="500px"
      >
       <p>React</p>
       <p>JavaScript</p>
   
      </Marquee>
    </div>
  );
}

export default Slider;
