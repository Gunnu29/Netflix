import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50); 
  });

  return (
    <motion.div
      className={`w-full flex items-center gap-5 px-24 fixed top-0 left-0 z-[99] text-white transition-colors duration-300 ${
        scrolled ? 'bg-black h-[100px]' : 'bg-transparent h-[110px]'
      }`}
    >
      <div className='cursor-pointer'>
        <img
          src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          className="h-[75px]"
          alt=""
        />
      </div>

      <div className='cursor-pointer hover:text-[#95C11E]'><h2>TOPTRACER RANGE</h2></div>
      <div className='cursor-pointer hover:text-[#95C11E]'><h2>GOLF LESSONS</h2></div>
      <div className='cursor-pointer hover:text-[#95C11E]'><h2>ADVENTURE GOLF</h2></div>
      <div className='cursor-pointer hover:text-[#95C11E]'><h2>CAFE</h2></div>
      <div className='cursor-pointer hover:text-[#95C11E]'><h2>EVENTS</h2></div>
    </motion.div>
  );
}
