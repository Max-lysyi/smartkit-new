import React from "react";
import "./DounloadApp.scss";

import appStoreBtn from "../assets/img/App Store.png";
import googlePlayBtn from "../assets/img/Google Play.png";
import phoneMockup from "../assets/img/processed_image (10).png";

const DounloadApp = () => {
  return (
    <section className="download-container">
      <div className="download-card">
        <div className="download-content">
          <h2 className="download-title">Завантажте додаток</h2>
          <p className="download-description">
            Додавайте ліки, стежте за аптечкою та
            <br />
            завантажуйте наш новий додаток
          </p>

          <div className="download-buttons">
            <a href="#" target="_blank" rel="noreferrer">
              <img src={appStoreBtn} alt="Download on App Store" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={googlePlayBtn} alt="Get it on Google Play" />
            </a>
          </div>
        </div>

        <div className="download-mockup">
          <img src={phoneMockup} alt="App Dashboard Mockup" />
        </div>

        <div className="star star-1">✦</div>
        <div className="star star-2">✦</div>
      </div>
    </section>
  );
};

export default DounloadApp;
