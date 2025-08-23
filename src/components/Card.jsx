// import React from 'react'

// export default function Card({heading,description,pic}) {
    
//   return (
//     <>
//     <div className="card bg-[#272727] w-[25%] h-[250px] border-[#303030] border-2 rounded-xl p-3 mr-3">
//         <div className="w-full h-[220px]">
//             <div className="mb-2">
//                 <div className="font-semibold text-lg mb-3">
//                     {heading}
//                 </div>
//                 <div className="fs text-[#BABABA] leading-5 tracking-tight">
//                     {description}
//                 </div>
//             </div>
//             <div className="flex justify-end ">
//                 <img src={pic} alt=""  className="w-10 h-10 object-contain" />
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }



// Card.js
// 


import { motion } from "framer-motion";

// Variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Card({ heading, description, pic }) {
  return (
    <motion.div
      className="card p-3 bg-[#272727] rounded-lg shadow-md w-full sm:w-[48%] lg:w-[23%]"
      variants={cardVariants}
    >
      <h3 className="text-lg font-semibold mb-4">{heading}</h3>
      <p className="text-md text-gray-300 mb-2">{description}</p>
      <img src={pic} alt="icon" className="w-12 h-12 mb-2 mlp-70" />
    </motion.div>
  );
}

