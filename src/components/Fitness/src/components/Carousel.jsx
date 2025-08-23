// import React, { useState } from "react";

// const slides = [
//   {
//     image: "cafe-about-1.jpg",
//   },
//   {
//     image: "cafe-menu-e1702553754869.jpg",
//   },
//   {
//     image: "cafe-about-1.jpg",
//   },
// ];

// export default function Carousel() {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   const { image } = slides[current];

//   return (
//     <>
//       <div className="w-full h-[400px] mt-20">
//         <div className="w-[85%] h-full mx-auto flex justify-between">
//           <div className="carousel relative w-[50%]">
//             <div className="w-full h-[400px] rounded-xl overflow-hidden">
//               <img
//                 src={image}
//                 alt=""
//                 className="w-full h-full object-cover transition-all duration-700 rounded-xl"
//               />
//                <div className="absolute inset-0 bg-black/25 z-10"></div>

//             </div>

//              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 mt-6">
//           {slides.map((_, index) => (
//             <span
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full cursor-pointer border ${
//                 current === index ? "bg-[#95C11E] border-[#95C11E]" : "bg-white border-white"
//               }`}
//             ></span>
//           ))}
//         </div>
//           </div>

//           <div className="text w-[40%] ">
//             <h3 className="text-white text-4xl font-extrabold mb-10">
//               FOOD AND DRINK
//             </h3>

//             <p className="text-white text-xl/8 ">
//               Whether you’re getting ready to play, just finishing your practice
//               session or feeling peckish on the range, we have a variety of food
//               and drink options bought directly to your table or bay.
//             </p>
//             <p className="text-white text-xl/8 mt-5">
//               We make sure that we cater for everyone, offering a range of vegan
//               and gluten free options.
//             </p>

//             <button className="text-white border-3 mt-10 rounded-full px-8 py-2 border-[#95C11E]">COFFEE SHOP</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

const slides = [
  {
    image: "cafe-about-1.jpg",
  },
  {
    image: "cafe-menu-e1702553754869.jpg",
  },
  {
    image: "cafe-about-1.jpg",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { image } = slides[current];

  return (
    <div className="w-full h-[400px] mt-20">
      <div className="w-[85%] h-full mx-auto flex justify-between">
        {/* Image & Overlay */}
        <div className="relative w-[50%]">
          <div className="w-full h-[400px] rounded-xl overflow-hidden relative">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover transition-all duration-700 rounded-xl"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer border ${
                  current === index
                    ? "bg-[#95C11E] border-[#95C11E]"
                    : "bg-white border-white"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-[40%]">
          <h3 className="text-white text-4xl font-extrabold mb-10">
            FOOD AND DRINK
          </h3>
          <p className="text-white text-xl/8">
            Whether you’re getting ready to play, just finishing your practice
            session or feeling peckish on the range, we have a variety of food
            and drink options brought directly to your table or bay.
          </p>
          <p className="text-white text-xl/8 mt-5">
            We make sure that we cater for everyone, offering a range of vegan
            and gluten-free options.
          </p>
          <button className="text-white border-3 mt-10 rounded-full px-8 py-2 border-[#95C11E]">
            COFFEE SHOP
          </button>
        </div>
      </div>
    </div>
  );
}
