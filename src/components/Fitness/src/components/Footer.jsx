import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-[400px] bg-gradient-to-tr from-[#95C11E] to-[#3CAA3C] text-black pt-12 pb-6 px-6 mt-10 relative overflow-hidden">

      <div className="w-[85%] pt-10 h-full mx-auto flex place-content-center">
       
         <div className="space-y-15 w-[20%]">
          <div className="w-[60%]">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
              alt="logo"
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
            <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
          </div>
        </div>

        <div className="w-[60%]">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 w-full">
            <div>
              <p className="font-black text-2xl hover:text-white leading-[30px] mb-2">
                TOPTRACER RANGE
              </p>
              <p className="font-black text-2xl hover:text-white leading-[30px] mb-2">
                CRAZY GOLF
              </p>
              <p className="font-black text-2xl hover:text-white leading-[30px] mb-2">CAFÉ</p>
            </div>
            <div>
              <p className="font-black text-2xl hover:text-white leading-[30px] mb-2">EVENTS</p>
              <p className="font-black text-2xl hover:text-white leading-[30px] mb-2">
                GOLF LESSONS
              </p>
              <p className="font-black text-2xl hover:text-white leading-[30px] mb-2">
                CONTACT US
              </p>
            </div>
          </div>
        </div>

        <div className="w-[20%] ">
          <p className="font-semibold leading-[18px] mb-1 text-lg" >
            A20, SIDCUP BYPASS
          </p>
          <p className="font-semibold leading-[18px] mb-1 text-lg ">CHISLEHURST</p>
          <p className="font-semibold leading-[18px] mb-1 text-lg ">KENT</p>
          <p className="font-semibold leading-[18px] mb-1 text-lg">BR7 6RP</p>
          <p className="font-semibold leading-[18px] mt-2 text-lg">
            TEL: <span className="font-extrabold hover:text-white">0208 309 0181</span>
          </p>
          <p className=" leading-[28px] font-black hover:text-white text-lg mt-1 cursor-pointer">
            GET DIRECTIONS
          </p>
        </div>
       </div>
     
    </footer>
  );
}
