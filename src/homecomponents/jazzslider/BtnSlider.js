import React from "react";
import secret from "./jazz.module.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `${secret.btn_slide} ${secret.next}` : `${secret.btn_slide} ${secret.prev}`}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  );
}
