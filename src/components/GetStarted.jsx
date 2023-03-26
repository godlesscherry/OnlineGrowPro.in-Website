import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const openCalendlyPopup = () => {
  const head = document.querySelector("head");
  const body = document.querySelector("body");

  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://assets.calendly.com/assets/external/widget.js"
  );

  // Attach the script to head or body based on their existence
  if (head !== null) {
    head.appendChild(script);
  } else if (body !== null) {
    body.appendChild(script);
  }

  // Add a listener to check when script is loaded and then show the popup
  script.addEventListener("load", () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/ogpro/30min",
    });
  });
};

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient 
  p-[2px] cursor-pointer`}
    onClick={openCalendlyPopup}
  >
    <div
      className={`${styles.flexCenter} flex-col
    bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p
          className="font-poppins font-medium text-[18px]
        leading-[23px] mr-2"
        >
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p
        className="font-poppins font-medium text-[18px]
        leading-[23px]"
      >
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
