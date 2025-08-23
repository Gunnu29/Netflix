import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About"; // adjust path if needed

export default function HeroSection() {
  const sectionRef = useRef(null);

  // Scroll progress only for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // From top to bottom of section
  });

  // Fade from 0.4 to 1 as we scroll within the section
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full z-0"
      style={{ height: "180vh" }} // Enough for Main + About
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        src="/hero.mp4"
      />

      {/* Black Overlay with gradual opacity */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Main content */}
      <div className="absolute top-[20%] left-[5%] z-20 flex flex-col items-center text-white font-black text-8xl cursor-default w-[90%]">
        <h1 className="stroke relative tracking-wide text-white">
          EAT. DRINK. PLAY
        </h1>
        <p className="mt-7 text-2xl font-bold">WELCOME TO SIDCUP FAMILY GOLF!</p>
        <p className="mt-3 text-lg font-normal text-center w-[50%] leading-6">
          Sidcup Family Golf is a Toptracer driving range and crazy golf venue in Sidcup,
          South East London. Passionate about technology, player development and making
          golf fun and accessible to everyone.
        </p>
      </div>

      {/* About Section directly inside here */}
      <div className="relative z-30 pt-[90vh]">
        <About />
      </div>
    </section>
  );
}
