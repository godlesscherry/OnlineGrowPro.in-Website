import React, { useEffect } from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const openCalendlyPopup = () => {
    const calendlyScript = document.createElement("script");
    calendlyScript.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    document.body.appendChild(calendlyScript);

    calendlyScript.onload = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/ogpro/30min",
          parentElement: document.body,
        });
      }
    };
  };

  useEffect(() => {
    const handleCalendlyEventScheduled = () => {
      if (window.Calendly) {
        window.Calendly.closePopupWidget();
      }
    };

    window.addEventListener(
      "calendly.eventScheduled",
      handleCalendlyEventScheduled
    );

    return () => {
      window.removeEventListener(
        "calendly.eventScheduled",
        handleCalendlyEventScheduled
      );
    };
  }, []);

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      onClick={openCalendlyPopup}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
