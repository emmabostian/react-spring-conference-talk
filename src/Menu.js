import React, { useState, useRef } from "react";
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

const MenuWrapper = () => {
  return (
    <>
      <button className="menu-button">Menu</button>
      <Menu />
    </>
  );
};

export default MenuWrapper;
