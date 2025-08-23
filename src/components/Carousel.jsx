import React from "react";
import { useTranslation } from "react-i18next";

export default function Carousel() {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-24  relative z-10">
      <div className="w-[75%] mx-auto text-white mb-40">
        <h2 className="text-4xl font-bold opacity-70">{t("trending")}</h2>

        <div className="container">
          <div className="carousel ">
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 1</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 2</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 3</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 4</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 5</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 6</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 7</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 8</span>
            </div>
            <div className="carousel__face">
              <span className="text-xl m-auto">Movie 9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
