import React from "react";

export default function Plan_card({
  bg1,
  bg2,
  top,
  bg3,
  head,
  res,
  des,
  des2,
  des3,
  price,
}) {
  return (
    <>
      <div
        className={`relative shadow-lg 
          w-full sm:w-[48%] md:w-[100%] lg:w-[25%] 
          h-[270px] border-[#303030] border-2 
          rounded-xl p-5 mr-0 lg:mr-3 
          hover:scale-y-103 hover:brightness-150 transition-all duration-300`}
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${bg1}, ${bg2}, ${bg3})`,
        }}
      >
        <div className="w-[97%] h-[230px] flex flex-col justify-between">
          <div>
            {top && (
              <div className="absolute top-0 right-0 bg-gray-200/25 rounded-bl-lg rounded-tr-lg p-1 text-sm">
                {top}
              </div>
            )}
            <div className="font-bold tracking-wider text-2xl mb-2">
              <p>{head}</p>
            </div>
            <div className="font-bold tracking-wider text-lg opacity-70 m-3">
              {res}
            </div>
            <div className="text-sm opacity-70 flex flex-col gap-1">
              <div className="flex">
                <div className="sym mr-2">
                  <i className="ri-check-line"></i>
                </div>
                <div className="de">{des}</div>
              </div>

              <div className="flex">
                <div className="sym mr-2">
                  <i className="ri-check-line"></i>
                </div>
                <div className="de">{des2}</div>
              </div>

              {des3 && (
                <div className="flex">
                  <div className="sym mr-2">
                    <i className="ri-check-line"></i>
                  </div>
                  <div className="de">{des3}</div>
                </div>
              )}
            </div>
          </div>
          <div className="font-bold tracking-wider text-lg opacity-70">
            <p>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
