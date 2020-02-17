import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./ProgressBar";
import Menu from "./Menu";
import "./styles.css";

const App = () => {
  return (
    <div>
      <ProgressBar />
      {/* <button className="menu-button">Menu</button>
      <Menu /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
