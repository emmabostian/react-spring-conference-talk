import React, { useRef } from "react";
import { animated, useSpring, useTransition, useChain } from "react-spring";

import "./menu.css";

const Menu = () => {
  const menuItems = ["Home", "About", "Work", "Contact"];

  return (
    <div className="menu menu--full">
      <nav>
        <ul className="menu-list menu-list--full">
          {menuItems.map(item => (
            <li className="menu-list-item menu-list-item--full">{item}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
