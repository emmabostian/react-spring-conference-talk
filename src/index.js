import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./ProgressBar";
import Menu from "./Menu";
import "./styles.css";

const App = () => {
  return (
    <div>
      <ProgressBar />
      {/* <Menu /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
