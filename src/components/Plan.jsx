import React from 'react'
import Plan_card from './Plan_card'
import { useTranslation } from "react-i18next";

export default function Plan() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-auto mb-15">
        <div className="w-[75%] h-auto cursor-pointer mx-auto text-white flex flex-col">
          
          <div className="text-2xl opacity-70 font-bold mb-5">
            {t("plan_topic")}
          </div>

          {/* Responsive layout wrapper */}
          <div className="hidden lg:flex">
            {/* Desktop: original flex row layout (unchanged) */}
            <Plan_card bg1="#193157" bg2="#0F152B" bg3="black"
              head={t("plan1_name")} res="480p"
              des={t("plan1_feature1")} des2={t("plan1_feature2")}
              price={t("plan1_price")} />
            <Plan_card top="Most Popular" bg1="#193157" bg2="#0F152B" bg3="black"
              head={t("plan2_name")} res="720p"
              des={t("plan2_feature1")} des2={t("plan2_feature2")}
              price={t("plan2_price")} />
            <Plan_card bg1="#5B1A83" bg2="#1C1132" bg3="black"
              head={t("plan3_name")} res="1080p"
              des={t("plan3_feature1")} des2={t("plan3_feature2")}
              price={t("plan3_price")} />
            <Plan_card bg1="#852354" bg2="#14081B" bg3="black"
              head={t("plan4_name")} res="4K+HDR"
              des={t("plan4_feature1")} des2={t("plan4_feature2")}
              des3={t("plan4_feature3")} price={t("plan4_price")} />
          </div>

          {/* Medium (md) and below: 2 in a row, 1 in a row on phones */}
          <div className="flex flex-wrap justify-center gap-4 lg:hidden">
            <div className="w-full sm:w-[48%]">
              <Plan_card bg1="#193157" bg2="#0F152B" bg3="black"
                head={t("plan1_name")} res="480p"
                des={t("plan1_feature1")} des2={t("plan1_feature2")}
                price={t("plan1_price")} />
            </div>
            <div className="w-full sm:w-[48%]">
              <Plan_card top="Most Popular" bg1="#193157" bg2="#0F152B" bg3="black"
                head={t("plan2_name")} res="720p"
                des={t("plan2_feature1")} des2={t("plan2_feature2")}
                price={t("plan2_price")} />
            </div>
            <div className="w-full sm:w-[48%]">
              <Plan_card bg1="#5B1A83" bg2="#1C1132" bg3="black"
                head={t("plan3_name")} res="1080p"
                des={t("plan3_feature1")} des2={t("plan3_feature2")}
                price={t("plan3_price")} />
            </div>
            <div className="w-full sm:w-[48%]">
              <Plan_card bg1="#852354" bg2="#14081B" bg3="black"
                head={t("plan4_name")} res="4K+HDR"
                des={t("plan4_feature1")} des2={t("plan4_feature2")}
                des3={t("plan4_feature3")} price={t("plan4_price")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
