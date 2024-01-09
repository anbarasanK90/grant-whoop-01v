import './App.css';
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComponent from "./components/slider";
import Copyright from "./components/copyright";
import WhoopconnectSection from "./components/whoopconnectSection";
import DisclaimerSection from "./components/disclaimerSection";
import LetsconnectSection from "./components/letsconnectSection";
import Coveragereport from "./components/coverageReport";
import { Grid } from '@mui/material';

function App() {

  return (
    <div className="App">
      {/* <section className='carousalSection'>
        <SliderComponent />
      </section> */}
      <section className='CoverageReportSection'>
        <Coveragereport/>
      </section>
      {/* <LetsconnectSection />
      <WhoopconnectSection />
      <DisclaimerSection />
 */}
      <footer className='customFooter_section'>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
