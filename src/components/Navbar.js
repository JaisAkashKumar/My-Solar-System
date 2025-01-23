import React from "react";

const Navbar = ({ navbar, onNavigate }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={navbar.logo} alt="Logo" />
        <div className="logo-text">
          <p id="p1">
            <button onClick={() => onNavigate("home")}>{navbar.text[0]}</button>
          </p>
          <p id="p2">{navbar.text[1]}</p>
        </div>
      </div>
      <ul>
        {navbar.menu.map((item, index) =>
          item.subMenu ? (
            <li key={index} className="list-item">
              {item.name} ▼
              <ul>
                {item.subMenu.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={() => onNavigate(subItem.link, subItem.background)}
                  >
                    <button>{subItem.name}</button>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              key={index}
              className="list-item"
              onClick={() => onNavigate(item.link, item.background)}
            >
              <button>{item.name}</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
