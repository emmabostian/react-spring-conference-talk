import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState("0%");
  return (
    <div className="progress-bar">
      <div className="button-bar">
        <button onClick={() => setProgress("0%")}>0%</button>
        <button onClick={() => setProgress("25%")}>25%</button>
        <button onClick={() => setProgress("50%")}>50%</button>
        <button onClick={() => setProgress("75%")}>75%</button>
        <button onClick={() => setProgress("100%")}>100%</button>
      </div>
      <div className="meter">
        <span />
      </div>
    </div>
  );
};
export default ProgressBar;
