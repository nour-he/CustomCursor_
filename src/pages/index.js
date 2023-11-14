import gsap from "gsap";
import React from "react";
import { useEffect, useState } from "react";

export default function Home({}) {
  // let cursor;
  // if (typeof document !== "undefined") {
  //   cursor = document.getElementsByClassName(".customCursor");
  // }
  // function Animation() {
  //   gsap.to(cursor, {
  //     backgroundColor: "red",
  //     ease: "Power4.easeOut",
  //     css: {},
  //   });
  // }
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="h-screen">
      <div
        className="  customCursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div id="text" onMouseEnter={Animation()}>
        <p className="mx-auto bg-text  w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          eiusmod tempor magna
        </p>
      </div>
    </div>
  );
}
