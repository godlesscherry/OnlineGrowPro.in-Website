import React from "react";
import { InlineWidget } from "react-calendly";

const Button = ({ styles }) => {
  const openCalendlyPopup = () => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);

    script.onload = () => {
      document.cookie =
        "calendly_sso_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ogpro/30min",
        prefill: {},
        pageSettings: {
          hideEventTypeDetails: true,
          hideLandingPageDetails: false,
          primaryColor: "#00a2ff",
          textColor: "#ffffff",
          backgroundColor: "#1f1f1f",
        },
        utm: {},
      });
    };
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-18px text-primary outline-none rounded-full ${styles}`}
      onClick={openCalendlyPopup}
    >
      Get Started
    </button>
  );
};

export default Button;
