import React, { useState, useRef } from "react";
import { animated, useSpring, useTransition, useChain } from "react-spring";
import "./menu.css";

const Menu = ({ menuVisible }) => {
  const menuItems = ["Home", "About", "Work", "Contact"];
  const springRef = useRef();

  const menuBarAnimation = useSpring({
    ref: springRef,
    from: { opacity: 0, transform: `translateY(-100%)` },
    to: {
      opacity: menuVisible ? 1 : 0,
      transform: menuVisible ? `translateY(0)` : `translateY(-100%)`
    }
  });

  const transRef = useRef();
  const transitions = useTransition(menuVisible ? menuItems : [], null, {
    ref: transRef,
    unique: true,
    trail: 500 / menuItems.length,
    from: { opacity: 0, transform: `translateY(-20%)` },
    enter: { opacity: 1, transform: `translateY(0)` },
    leave: { opacity: 0, transform: `translateY(-20%)` }
  });

  useChain(menuVisible ? [springRef, transRef] : [transRef, springRef], [
    0,
    menuVisible ? 0.3 : 0.5
  ]);

  return (
    <animated.div style={menuBarAnimation} className="menu menu--full">
      <nav>
        <ul className="menu-list menu-list--full">
          {transitions.map(({ item, props }) => (
            <animated.li
              className="menu-list-item menu-list-item--full"
              key={item}
              style={props}
            >
              {item}
            </animated.li>
          ))}
        </ul>
      </nav>
    </animated.div>
  );
};

const MenuWrapper = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="menu-button"
      >
        {menuVisible ? "Close" : "Menu"}
      </button>
      <Menu menuVisible={menuVisible} />
    </div>
  );
};

export default MenuWrapper;
