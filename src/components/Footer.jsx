import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__bg">
      <div className="wrapper">
        <footer className="footer" id="footer">
          <section className="footer__section">
            
            <div className="footer__section__items">
              <h3 className="footer__section__items__title">Новини</h3>
              <Link to="/about" className="footer__section__items__description">
                Про нас
              </Link>
              <Link
                to="/projects"
                className="footer__section__items__description"
              >
                Проєкти
              </Link>
              <Link to="/info" className="footer__section__items__description">
                Інформація
              </Link>
            </div>

            <div className="footer__section__items">
              <h3 className="footer__section__items__title">Використання</h3>
              <Link to="/guide" className="footer__section__items__description">
                Як почати
              </Link>
              <Link to="/faq" className="footer__section__items__description">
                Питання
              </Link>
              <Link
                to="/support"
                className="footer__section__items__description"
              >
                Допомога
              </Link>
            </div>

   
            <div className="footer__section__items">
              <h3 className="footer__section__items__title">Контакти</h3>
              <Link
                to="/contacts"
                className="footer__section__items__description"
              >
                Наші офіси
              </Link>
              <Link
                to="/careers"
                className="footer__section__items__description"
              >
                Кар'єра
              </Link>
              <Link
                to="/partnership"
                className="footer__section__items__description"
              >
                Партнерство
              </Link>
            </div>

          </section>

          <div className="footer__bottom">
            <div className="line"></div>
            <div className="line__items">
              <p>©Fitherin</p>
              <p>M. E. D. I. C.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
