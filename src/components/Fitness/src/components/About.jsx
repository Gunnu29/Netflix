import React from 'react';

export default function About() {
  return (
    <>
      {/* Scrolling Marquee Section */}
      <div className="w-full relative z-50 mt-20 h-[200px] text-8xl text-black bg-transparent font-black white-outline">
        <div className="marquee-container">
          <div className="marquee-track">
            <span className="mr-7 hover:text-[#95C11E]">TOPTRACER RANGE</span>
            <span className="mr-7 hover:text-[#95C11E]">GOLF LESSONS</span>
            <span className="mr-7 hover:text-[#95C11E]">ADVENTURE GOLF</span>
            <span className="mr-7 hover:text-[#95C11E]">CAFE</span>
            <span className="mr-7 hover:text-[#95C11E]">EVENTS</span>

            <span className="mr-7 hover:text-[#95C11E]">TOPTRACER RANGE</span>
            <span className="mr-7 hover:text-[#95C11E]">GOLF LESSONS</span>
            <span className="mr-7 hover:text-[#95C11E]">ADVENTURE GOLF</span>
            <span className="mr-7 hover:text-[#95C11E]">CAFE</span>
            <span className="mr-7 hover:text-[#95C11E]">EVENTS</span>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative z-50  w-full">
        <div className="relative z-50 w-[85%] text-white justify-between items-center flex mx-auto">
          
          {/* Left Image */}
          <div className="w-[12%] relative">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
              className="w-full h-[140px] rounded-xl object-cover"
            />
            <div className="bg-black/30 w-full h-full absolute top-0 left-0"></div>
          </div>

          {/* Text Content */}
          <div className="w-[55%]">
            <h1 className="text-4xl font-black text-center">ABOUT US</h1>
            <p className="mt-8 text-center leading-8 text-xl">
              Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.
            </p>
            <p className="mt-8 text-center leading-8 text-xl relative z-50">
              Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-[11%] relative">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
              className="w-full h-[170px] rounded-xl object-cover"
            />
            <div className="bg-black/30 top-0 left-0 w-full h-full absolute"></div>
          </div>

        </div>
      </div>
    </>
  );
}
