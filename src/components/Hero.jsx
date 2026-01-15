import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import shelfImg from "../assets/img/shelf.png";
import bgBlob from "../assets/img/bg.png";

const Hero = () => {
  return (
    <section className="main__section padings">
      <div className="main__section__item">
        <h1 className="main__section__item__title">
          Medicine Expiry & Distribution Inventory Control
        </h1>
        <p className="main__section__item__par">
          Контроль інвентаризації, розподілу та термінів придатності ліків.
        </p>
        <Link to="/medicines" className="main__section__item__btn">
          Додати ліки
        </Link>
      </div>

      <div className="main__section__item__img">
        <img
          className="main__section__item__img__shelf"
          src={shelfImg}
          alt="Shelf"
        />
        <img
          className="main__section__item__img__blob"
          src={bgBlob}
          alt="Background decoration"
        />
      </div>
    </section>
  );
};

export default Hero;
