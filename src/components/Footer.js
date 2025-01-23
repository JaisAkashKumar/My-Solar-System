import React from "react";

const Footer = ({ footer }) => (
  <>
    <footer>
      {footer.map((item, index) => (
        <a key={index} href={item.url} target="_blank" rel="noreferrer">
          <img src={item.icon} alt={`${item.platform} logo`} />
        </a>
      ))}
    </footer>
    <div className="right">
      <br />
      {footer[0].right}
    </div>
  </>
);

export default Footer;
