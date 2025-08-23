import React from 'react'
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Translate() {
  const { i18n } = useTranslation();
   const location = useLocation();

  const handleLangChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };


   if (location.pathname === "/help" || location.pathname==="/login") {
    return null;
  }

 return (
  <div className="mx-2 sm:mx-3 md:mx-4 flex items-center border border-gray-500 bg-black rounded-full px-3 py-1.5 
                  w-[60%] sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[17%]">
    <div className="symbol text-white mr-2">
      <i className="ri-translate-2 text-lg"></i>
    </div>
    <div className="sel flex-1">
      <select
        id="language"
        name="language"
        defaultValue={i18n.language}
        onChange={handleLangChange}
        className="bg-black text-white w-full outline-none"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  </div>
);

}