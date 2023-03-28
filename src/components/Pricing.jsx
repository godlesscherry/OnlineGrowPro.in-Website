import React from "react";
import { pricingOptions } from "../constants";
import styles, { layout } from "../style";
import Subscribe from "./Subscribe";

const Pricing = () => (
  <section id="pricing" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Choose the right plan{" "}
        <br
          className="sm:block
          hidden"
        />
        for your business.
      </h2>
      <p
        className={`${styles.paragraph}
        max-w-[800px] mt-5 mb-10`}
      >
        Our plans are designed to fit the needs of individuals, small
        businesses, and large organizations.
      </p>
    </div>

    <div
      className={`${layout.sectionReverse} mt-5 mb-10 rounded-[20px] flex-1 flex flex-row flex-col-reverse sm:flex-row
      justify-center items-center bg-dimBlack ml-20 mr-20`}
    >
      {pricingOptions.map((pricingOptions, index) => (
        <PricingCard
          key={pricingOptions.id}
          {...pricingOptions}
          index={index}
        />
      ))}
    </div>
  </section>
);

const PricingCard = ({ title, price, services, index }) => (
  <div
    className={`flex flex-row flex-col flex-1 p-6 rounded-[20px] feature-card`}
  >
    <div className="flex-1 flex flex-col ml-10 ">
      <h3
        className="font-poppins font-semibold text-white text-[28px]
          leading-[23px] mb-1"
      >
        {title}
      </h3>
      <div className={`flex flex-row rounded-[20px]`}>
        <ul className={`${layout.sectionInfo} w-[250px]`}>
          {services.map((service) => (
            <li
              className={`${styles.paragraph} ${styles.flexCenter} mt-5 mb-5  justify-center items-center`}
              key={service}
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
      <p
        className="font-poppins font-semibold text-white text-[18px]
        leading-[23px] mb-10"
      >
        {price}
      </p>
    </div>
    <Subscribe />
  </div>
);

export default Pricing;
