import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import "./styles.css";

const App = () => (
  <div>
    <Menu />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
