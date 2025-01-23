import React from "react";

const Navbar = ({ navbar, onNavigate }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={navbar.logo} alt="Logo" />
        <div className="logo-text">
          <p id="p1">
            <a href="#" onClick={() => onNavigate("home")}>
              {navbar.text[0]}
            </a>
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
                  <li key={subIndex}>
                    <a
                      href="#"
                      onClick={() =>
                        onNavigate(subItem.link, subItem.background)
                      }
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={index} className="list-item">
              <a
                href="#"
                onClick={() => onNavigate(item.link, item.background)}
              >
                {item.name}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
