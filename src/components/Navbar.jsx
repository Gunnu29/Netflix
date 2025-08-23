import React from "react";
import "../App.css";
import Translate from "./Translate";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-transparent h-[80px]">
      <div className="w-[92%] bg-transparent mx-auto flex flex-wrap items-center justify-between h-[80px]">
        {/* Logo Section */}
        <div className="w-[50%] sm:w-[40%] xs:w-[60%]">
          <div className="flex items-center h-full">
            <img
              src="Netflix_Logo_PMS.png"
              className="w-[120px] sm:w-[100px] xs:w-[80px]"
              alt="Netflix Logo"
            />
          </div>
        </div>

        {/* Right Side (Translate + Signin) */}
        <div className="w-[50%] sm:w-[60%] xs:w-full flex justify-end items-center space-x-4 xs:justify-center mt-2 sm:mt-0">
          <Translate />

          <button className="bg-white text-black font-medium rounded-full px-4 py-1.5 text-sm">
            <a href="/login">{t("signin")}</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
