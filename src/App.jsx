import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  CTA,
  Footer,
} from "./components";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} {${styles.flexCenter}}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} {${styles.flexCenter}}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Pricing />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
