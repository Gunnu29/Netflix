import React from 'react';
import Translate from './Translate';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>

    <footer className='w-full h-[570px]'>
        <div className="main w-[75%] h-[570px] m-auto bg-black text-gray-300 flex flex-col">
            <div className="call mb-11">
             <p>{t("call")} <span className='underline'>000-800-919-1743</span> {t("call2")}</p>
            
              
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-17 cursor-pointer">
            <div className="flex flex-col gap-2">
              <HashLink smooth to="/#faq" className="underline hover:text-white">FAQ</HashLink>
              <a href="#" className="underline hover:text-white">{t("other21")}</a>
              <a href="#" className="underline hover:text-white">{t("other31")}</a>
              <a href="#" className="underline hover:text-white">{t("other41")}</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="underline hover:text-white">{t("other12")}</a>
              <a href="#" className="underline hover:text-white">{t("other22")}</a>
              <a href="#" className="underline hover:text-white">{t("other32")}</a>
              <a href="#" className="underline hover:text-white">{t("other42")}</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/login" className="underline hover:text-white">{t("other13")}</a>
              <a href="#"className="underline hover:text-white">{t("other23")}</a>
              <a href="#" className="underline hover:text-white">{t("other33")}</a>
              <a href="#" className="underline hover:text-white">{t("other43")}</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="underline hover:text-white">{t("other14")}</a>
              <a href="#" className="underline hover:text-white">{t("other24")}</a>
              <a href="/help" className="underline hover:text-white">{t("other34")}</a>
            </div>
          </div>
            <div className='mb-10'>
                <Translate/>
            </div>
            <div className="mb-10 text-base">Netflix {t("India")}</div>

            <div className="text-base flex text-gray-500">
            {t("extra")}
            <p className=" ml-2 underline text-blue-400 hover:text-blue-600"> {t("extra_new")}</p>
          </div>
        </div>
    </footer>

    </div>
  );
}
