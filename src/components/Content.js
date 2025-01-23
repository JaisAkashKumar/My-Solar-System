import React, { useEffect, useState } from "react";

const Content = ({ pageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = pageData.slides;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-rotate every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 36}rem)` }}
      >
        {slides.map((slide, index) => (
          <div className="box" key={index}>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="indicator-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
      <div className="radio-input">
        <div>
          {slides.map((_, index) => {
            return (
              <label htmlFor={`circrad${index + 1}`}>
                <input
                  value={`circvalue-${index + 1}`}
                  id={`circrad${index + 1}`}
                  name="namcircle"
                  type="radio"
                  onClick={() => setCurrentIndex(index)}
                  checked={currentIndex === index}
                />
              </label>
            );
          })}
        </div>
        <div className="circ-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
