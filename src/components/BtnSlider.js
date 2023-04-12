import React from "react";
import "./Slider.css";
import leftArrow from "./icons/next.png";
import rightArrow from "./icons/back.png";

export default function BtnSlider({ direction, moveSlide, props }) {
  console.log(direction, moveSlide);
  return (
    <button {...props}
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}