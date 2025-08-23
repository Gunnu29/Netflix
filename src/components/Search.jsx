import React from 'react';
import { useTranslation } from "react-i18next";

export default function Search() {
  const { t } = useTranslation();

  return (
    <>
      <div className="para text-center">
        <p className="text-md">{t("Ready")}</p>
      </div>
      <br />

      <div className="search flex flex-col md:flex-row items-center justify-center gap-3 w-full px-4">
        <div className="w-full md:w-auto">
          <label className="relative w-full block">
            <input
              type="text"
              className="w-full md:w-[350px] py-4 pr-5 pl-5 rounded-full peer border-opacity-50 border bg-[rgba(73,69,69,0.9)] border-gray-600"
            />
            <span className="absolute left-0 top-4 px-1 mx-4 text-gray-400 peer-focus:-translate-y-5 peer-focus:text-sm peer-focus:text-white transition-all duration-200">
              {t("emailPlaceholder")}
            </span>
          </label>
        </div>

        <div className="w-full md:w-auto">
  <button
    className="bg-red-600 w-[180px] mx-auto px-6 py-3 rounded-full font-bold text-white text-lg hover:bg-[#C11119] block"
  >
    {t("getStarted")} <i className="ri-arrow-right-s-line"></i>
  </button>
</div>

      </div>
    </>
  );
}


// import React from 'react'
// import { useTranslation } from "react-i18next";

// export default function Search() {
//   const { t } = useTranslation();

//   return (
//     <>
//       <div className="para text-center">
//         <p className="text-md sm:text-lg">{t("Ready")}</p>
//       </div>

//       <br />

//       <div className="search flex flex-col sm:flex-row justify-center items-center gap-4">
//         <div className="w-full sm:w-auto flex justify-center items-center">
//           <label className="relative w-full sm:w-auto">
//             <input
//               type="text"
//               className="w-full sm:w-[300px] py-3 sm:py-4 pr-28 pl-5 rounded-full peer border border-gray-600 bg-[rgba(73,69,69,0.9)] border-opacity-50 placeholder-white text-white"
//             />
//             <span className="absolute left-0 top-3 sm:top-4 px-1 mx-4 text-sm text-white peer-focus:-translate-y-5 peer-focus:text-xs transition-all">
//               {t("emailPlaceholder")}
//             </span>
//           </label>
//         </div>

//         <div>
//           <button className="bg-red-600 w-full sm:w-auto px-6 sm:px-12 py-2 sm:py-3 rounded-full font-bold cursor-pointer text-lg sm:text-2xl hover:bg-[#C11119]">
//             {t("getStarted")}
//             <i className="ri-arrow-right-s-line"></i>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

