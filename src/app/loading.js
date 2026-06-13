import React from "react";
import  './loading_css.css'
const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
        <div className="loader">
      <div className="loading-text">
        Loading
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>

      <div className="loading-bar-background">
        <div className="loading-bar">
          <div className="white-bars-container">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="white-bar"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default loading;
