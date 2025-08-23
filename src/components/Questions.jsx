import React from "react";
import Search from "./Search";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

   const { t } = useTranslation();

  return (
    <>
      <div className="outer w-full h-[1100px] mt-10 flex flex-col">
        <div className="text-white w-[75%] mx-auto cursor-pointer" id="faq">
          <div className="font-bold text-4xl my-5">
            <h1>{t("faq")}</h1>
          </div>
          <div className="que text-white text-lg flex flex-col" >
            <div className="first bg-[#272727] hover:bg-[#3F3F3F]  rounded-xl flex py-5 px-7 place-content-between border-2 border-[#303030] mb-2" onClick={() => setShow1(!show1)}>
              <div className="text-white font-bold">
                <p>{t("faq1")}</p>
                
              </div>
              
              <div>
                <i className={`ri-${show1 ? "close" : "add"}-line text-3xl`}></i>
              </div>
            </div>
             {show1 && (
              <p className="font-bold text-white w-full rounded-xl py-5 px-7 mb-2 bg-[#272727]">
                {t("ans1")}
              </p>
            )}
            {/* second */}
            <div className="first bg-[#272727] hover:bg-[#3F3F3F] rounded-xl mb-2 flex py-5 px-7 place-content-between border-2 border-[#303030]" onClick={() => setShow2(!show2)}>
              <div className="text-white font-bold">
                <p>{t("faq2")}</p>
              </div>
              <div>
                <i className={`ri-${show2 ? "close" : "add"}-line text-3xl`}></i>
              </div>
            </div>
             {show2 && (
              <p className="mt-3 font-bold text-white w-full rounded-xl py-5 px-7 mb-2 bg-[#272727]">
                  {t("ans2")}
              </p>
            )}
            {/* third */}
            <div className="first bg-[#272727] hover:bg-[#3F3F3F] rounded-xl mb-2 flex py-5 px-7 place-content-between border-2 border-[#303030]" onClick={() => setShow3(!show3)}>
              <div className="text-white font-bold">
                <p>{t("faq3")}</p>
              </div>
             
              <div>
                <i className={`ri-${show3 ? "close" : "add"}-line text-3xl`}></i>
              </div>
            </div>
             {show3 && (
              <p className="mt-3 font-bold text-white w-full rounded-xl py-5 px-7 mb-2 bg-[#272727]">

               {t("ans3")}
              </p>
            )}
            {/* fourth */}
            <div className="first bg-[#272727] hover:bg-[#3F3F3F] rounded-xl mb-2 flex py-5 px-7 place-content-between border-2 border-[#303030]" onClick={() => setShow4(!show4)}>
              <div className="text-white font-bold">
                <p>{t("faq4")}</p>
              </div>
              
              <div>
                <i className={`ri-${show4 ? "close" : "add"}-line text-3xl`}></i>
              </div>
            </div>
            {show4 && (
              <p className="mt-3 font-bold text-white w-full rounded-xl py-5 px-7 mb-2 bg-[#272727]">
                {t("ans4")}
              </p>
            )}
            {/* fifth */}
            <div className="first bg-[#272727] hover:bg-[#3F3F3F] rounded-xl mb-2 flex py-5 px-7 place-content-between border-2 border-[#303030]" onClick={() => setShow5(!show5)}>
              <div className="text-white font-bold">
                <p>{t("faq5")}</p>
              </div>
              
              <div>
                <i className={`ri-${show5 ? "close" : "add"}-line text-3xl`}></i>
              </div>
            </div>
            {show5 && (
              <p className="mt-3 font-bold text-white w-full rounded-xl py-5 px-7 mb-2 bg-[#272727]">
                {t("ans5")}
              </p>
            )}
            {/* sixth */}
            <div className="first bg-[#272727] hover:bg-[#3F3F3F] rounded-xl mb-2 flex py-5 px-7 place-content-between border-2 border-[#303030]" onClick={() => setShow6(!show6)}>
              <div className="text-white font-bold">
                <p>{t("faq6")}</p>
              </div>
              
              <div>
                <i className={`ri-${show6 ? "close" : "add"}-line text-3xl`}></i>
              </div>
            </div>
                {show6 && (
              <p className="mt-3 font-bold text-white w-full rounded-xl py-5 px-7 mb-2 bg-[#272727]">
               {t("ans6")}
              </p>
            )}
          </div>

          <div className="mt-15">
            <Search/>
          </div>
        </div>
      </div>
    </>
  );
}
