import React from "react";
import "./Functional.scss";
import { motion } from "framer-motion";
import QRCodImg from "../assets/img/QR-cod.png";
import MapImg from "../assets/img/Map.png";
import SecLogo from "../assets/img/processed_image (14).png";
import BellImg from "../assets/img/Bell.png";
import Logo from "./Icons/Logo";
const Functional = () => {
  return (
    <motion.div
      id="mexanizm"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="feature-card"
    >
      <div className="wrapper">
        <section className="functional padings">
          <h2 className="functional__section__title">Як це працює</h2>
          <div className="functional__section">
            <div className="functional__section__component">
              <div className="functional__section__component__item">
                <img
                  className="functional__section__component__item__img"
                  src={SecLogo}
                  alt=""
                />
              </div>
              <div className="functional__section__component__text">
                <h3 className="functional__section__component__title">
                  Керуйте домашньою аптечкою
                </h3>
                <p className="functional__section__component__deskription">
                  Відстежуйте терміни придатності та записуйте реакції на
                  препарати в кілька кліків
                </p>
              </div>
            </div>
            <div className="functional__section__component">
              <div className="functional__section__component__item">
                <img src={QRCodImg} alt="" />
              </div>
              <div className="functional__section__component__text">
                <h3 className="functional__section__component__title">
                  Сканер штрих-кодів
                </h3>
                <p className="functional__section__component__deskription">
                  Сканер без перешкод відсканує та додасть ваші ліки
                </p>
              </div>
            </div>

            <div className="functional__section__component">
              <div className="functional__section__component__item">
                <img src={BellImg} alt="" />
              </div>
              <div className="functional__section__component__text">
                <h3 className="functional__section__component__title">
                  Система оповіщень
                </h3>
                <p className="functional__section__component__deskription">
                  Ми повідомимо вам коли у ліків закінчується термін дії
                </p>
              </div>
            </div>

            <div className="functional__section__component">
              <div className="functional__section__component__item">
                <img src={MapImg} alt="" />
              </div>
              <div className="functional__section__component__text">
                <h3 className="functional__section__component__title">
                  Карта утилізації
                </h3>
                <p className="functional__section__component__deskription">
                  Ви можете легко відстежувати ваш асортимент ліків
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Functional;
