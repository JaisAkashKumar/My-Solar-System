import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import data from "./data.json";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [backgroundImage, setBackgroundImage] = useState(
    "images/solar-system-3.jpg"
  );

  // const defaultPageData = {
  //   title: "Learn about Our Solar System",
  //   description:
  //     "Explore the wonders of our Solar System on this website. From the scorching heat of Mercury to the icy expanse of Neptune, it is a celestial tapestry of wonder.",
  //   image: "images/solar-system.jpg",
  //   background: "images/solar-system-3.jpg",
  // };

  let pageData = data.content[currentPage];
  console.log("pageData Outer", pageData);
  // const pageData = data.content[currentPage] || defaultPageData;
  const onNavigate = (page, background) => {
    pageData = data.content[page];
    console.log("pageData", pageData);
    console.log("page", page);
    setCurrentPage(page);
    setBackgroundImage(pageData.background);
  };

  // Dynamically update the body background when the page changes
  useEffect(() => {
    document.body.style.background = `url(${backgroundImage}) no-repeat `;
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Helvetica, sans-serif";
  }, [pageData, backgroundImage]);

  return (
    <div
    // style={{
    //   background: `url(${backgroundImage}) no-repeat `,
    //   backgroundSize: "cover",
    // }}
    >
      <Navbar navbar={data.navbar} onNavigate={onNavigate} />
      <Content pageData={data.content[currentPage]} />
      <Footer footer={data.footer} />
    </div>
  );
};

export default App;
