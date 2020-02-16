import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

// Example progress bar taken from https://css-tricks.com/css3-progress-bars/

import "./progressBar.css";

const ProgressBar = () => {
  return (
    <div className="App">
      <div className="button-bar">
        <button>0%</button>
        <button>25%</button>
        <button>50%</button>
        <button>75%</button>
        <button>100%</button>
      </div>
      <div className="meter">
        <span />
      </div>
    </div>
  );
};

export default ProgressBar;
