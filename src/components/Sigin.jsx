// import React from 'react'
// import { useTranslation } from "react-i18next";

// export default function Sigin() {
//     const { t } = useTranslation();
//   return (
//     <>
//         <div className="w-full h-[730px]">
//             <div className="w-[40%] h-[730px] bg-black/80 rounded-lg mx-auto mt-10">
//                 <div className="w-[70%] h-[100%] m-auto">
//                     <div className="text-white pt-10 flex ml-1 flex-col font-bold text-3xl">
//                         <h1>Sign In</h1>
//                     </div>
//                     <div className="flex mt-7 mb-3 justify-center items-center">
//                      <label className='relative'>
//                     <input type="text" className="py-4 pr-35 pl-5 rounded-lg peer border-opacity-50 border bg-transparent border-gray-600" 
//                     />
//                     <span className='absolute left-0 top-4 px-1 mx-4 text-white peer-focus:-translate-y-5 peer-focus:text-sm'>Email or phone number</span>
//                     </label>
//                 </div>

//                 <div className="flex justify-center items-center">
//                      <label className='relative'>
//                     <input type="text" className="py-4 pr-35 pl-5 rounded-lg peer border-opacity-50 border bg-transparent border-gray-600" 
//                     />
//                     <span className='absolute left-0 top-4 px-1 mx-4 text-white peer-focus:-translate-y-5 peer-focus:text-sm'>Password</span>
//                     </label>
//                 </div>

//                 <div className=" text-white font-bold mt-3 ">
//                     <button className='bg-red-600 rounded-lg py-2.5 w-full'>Sign In</button>
//                 </div>
//                 <div className="text-gray-300 mt-5 w-full px-40">
//                     <p className='text-lg'>OR</p>
//                 </div>
//                 <div className=" text-white font-bold mt-3 ">
//                     <button className='bg-[rgba(73,69,69,0.9)] rounded-lg py-2.5 w-full'>Use a sign-in code</button>
//                 </div>
//                 <div className="text-white mt-5 underline font-medium px-25">
//                     <a href="#">Forgot Password?</a>
//                 </div>
//                 <div className="text-white text-lg mt-5 flex">
//                     <div><input type="checkbox" className='mr-3' /></div>
//                     <div><p>Remember me</p></div>
                    
//                 </div>
//                 <div className=" mt-3">
//                     <p className='text-gray-300'>New to Netflix?<span className='font-bold text-white'>Sign up now.</span></p>
//                 </div>
//                 <div className="text-gray-500 mt-5 text-sm">
//                     <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
//                 </div>
//                 <div className="text-blue-500 mt-2 underline">
//                     <a href="#">Learn more.</a>
//                 </div>


//                 </div>
//             </div>

//         </div>
//     </>
//   )
// }


import React from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

// Children animation
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Sigin() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[730px]">
      <motion.div
        className="lg:w-[40%] sm:w-[80%] h-[730px] bg-black/80 rounded-lg mx-auto mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-[70%] h-full m-auto">
          <motion.div
            variants={childVariants}
            className="text-white pt-10 flex ml-1 flex-col font-bold text-3xl"
          >
            <h1>Sign In</h1>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex mt-7 mb-3 justify-center items-center"
          >
            <label className="relative w-full">
              <input
                type="text"
                className="py-4 w-full pr-35 pl-5 rounded-lg peer border-opacity-50 border bg-transparent border-gray-600"
              />
              <span className="absolute left-0 top-4 px-1 mx-4 text-white peer-focus:-translate-y-5 peer-focus:text-sm">
                Email or phone number
              </span>
            </label>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="flex justify-center items-center"
          >
            <label className="relative w-full">
              <input
                type="password"
                className="py-4 w-full pr-35 pl-5 rounded-lg peer border-opacity-50 border bg-transparent border-gray-600"
              />
              <span className="absolute left-0 top-4 px-1 mx-4 text-white peer-focus:-translate-y-5 peer-focus:text-sm">
                Password
              </span>
            </label>
          </motion.div>

          <motion.div variants={childVariants} className="text-white font-bold mt-3">
            <button className="bg-red-600 rounded-lg py-2.5 w-full hover:bg-red-700 cursor-pointer">Sign In</button>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="text-gray-300 mt-5 w-full text-center"
          >
            <p className="text-lg">OR</p>
          </motion.div>

          <motion.div variants={childVariants} className="text-white font-bold mt-3">
            <button className="bg-[rgba(73,69,69,0.9)] rounded-lg py-2.5 w-full cursor-pointer hover:bg-[rgba(61,57,57,0.9)] ">
              Use a sign-in code
            </button>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="text-white mt-5 underline font-medium text-center"
          >
            <a href="#">Forgot Password?</a>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="text-white text-lg mt-5 flex items-center"
          >
            <input type="checkbox" className="mr-3" />
            <p>Remember me</p>
          </motion.div>

          <motion.div variants={childVariants} className="mt-3 text-gray-300">
            <p>
              New to Netflix? <span className="font-bold text-white cursor-pointer">Sign up now.</span>
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="text-gray-500 mt-5 text-sm">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="text-blue-500 mt-2 underline cursor-pointer">
            <a href="#">Learn more.</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
