import "../App.css";
import React from "react";
import Search from "./Search";
import { useTranslation } from "react-i18next";

function Box() {
  const { t, i18n } = useTranslation();

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="bottom-inward-curve" clipPathUnits="objectBoundingBox">
            <path
              d="
                M0,0 
                H1 
                V1 
                C0.85,0.9 0.15,0.9 0,1 
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <div className="w-full h-[600px] sm:h-[500px] xs:h-[450px]">
        <div
          className="w-[92%] h-full m-auto relative"
          style={{ clipPath: "url(#bottom-inward-curve)" }}
        >
          <img
            src="net_bg.png"
            className="h-full w-full object-cover rounded-4xl"
            alt=""
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-95 rounded-4xl h-full"></div>

          <div className="absolute inset-0 m-auto text-white w-[90%] sm:w-[80%] lg:w-[70%] px-4 sm:px-8 text-center flex flex-col items-center justify-center 
            h-[50px] sm:h-[200px] lg:h-[305px]"
          >
            <div className="head w-full">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <b>{t("headline")}</b>
              </h1>
            </div>

            <div className="start font-semibold text-sm sm:text-xl md:text-2xl mt-2">
              <p>{t("subtext")}</p>
            </div>

            <div className="mt-3">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
