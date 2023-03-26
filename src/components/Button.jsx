import React from "react";

const Button = ({ styles }) => {
  const openCalendlyPopup = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = "about:blank";
    document.body.appendChild(iframe);

    const iframeDocument = iframe.contentWindow.document;
    const calendlyScript = iframeDocument.createElement("script");
    calendlyScript.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    iframeDocument.head.appendChild(calendlyScript);

    calendlyScript.onload = () => {
      window.Calendly.showPopupWidget("https://calendly.com/ogpro/30min");
      document.body.removeChild(iframe);
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
