// import React from 'react'

// export default function Cards() {
//   return (
//     <>
//     <div className="w-full flex gap-15 place-content-center text-[#95C11E] bg-black h-[500px] mt-40 z-10 relative">
      

//       <div className="relative w-[25%] h-auto rounded-xl ">
//       <img src="home-toptracer.jpg" alt="" className='rounded-xl h-[500px] object-cover' />
      
//       <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6">
//         TOPTRACER RANGE
//       </div>
      
//       </div>

//       <div className="relative w-[25%] h-auto rounded-xl">
//         <img src="hero-4.jpg" alt="" className='rounded-xl h-[500px] object-cover'/>
//         <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6">
//        <span className='text-lg'>MR MULLIGAN'S</span> ADVENTURE <br /> GOLF
//       </div>
//       </div>

//       <div className="relative w-[25%] h-auto rounded-xl">
//         <img src="home-lessons.jpg" alt="" className='rounded-xl h-[500px] object-cover'/>
//         <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6">
//         GOLF LESSONS
//       </div>
//       </div>
      
//     </div> 
//     </>
//   )
// }


import React from 'react'

export default function Cards() {
  return (
    <>
      <div className="w-full flex gap-8 place-content-center bg-black h-[500px] mt-40 z-10 relative">
        
        {/* Card 1 */}
        <div className="relative w-[25%] rounded-xl overflow-hidden group">
          {/* Image */}
          <img src="home-toptracer.jpg" alt="" className="h-[500px] w-full object-cover rounded-xl" />
          
          {/* Always visible text */}
          <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6 ">
            TOPTRACER RANGE
          </div>

          {/* Hover overlay with lorem text */}
          <div className="absolute inset-0 bg-[#95C11E] bg-opacity-90  px-6 pt-35  text-black opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-10">
            <p className='font-extrabold text-3xl'>
              TOPTRACER RANGE
            </p>
            <p>Our range delivers the same ball-tracking technology that traces the shots of the game's best players on TV.
              <br />
              <p className='pt-5'>Toptracer Range technology offers a fun engaging, tech-driven experience that appeals to seasoned players, range rivals, 
              friends, family members, and even first-time golfers.</p>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[25%] rounded-xl overflow-hidden group">
          <img src="hero-4.jpg" alt="" className="h-[500px] w-full object-cover rounded-xl" />
          <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6 ">
            <span className='text-lg'>MR MULLIGAN'S</span> ADVENTURE <br /> GOLF
          </div>
          <div className="absolute inset-0 bg-[#95C11E] bg-opacity-90 flex items-center justify-center px-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-[25%] rounded-xl overflow-hidden group">
          <img src="home-lessons.jpg" alt="" className="h-[500px] w-full object-cover rounded-xl" />
          <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6 ">
            GOLF LESSONS
          </div>
          <div className="absolute inset-0 bg-[#95C11E] bg-opacity-90 flex items-center justify-center px-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
