import React from "react";
import "./Functional.scss";
import QRCodImg from "../assets/img/QR-cod.png";
import MapImg from "../assets/img/Map.png";
import BellImg from "../assets/img/Bell.png";
const Functional = () => {
  return (
    <div className="nonbg">
      <div className="wrapper">
        <section id="mexanizm">
          <h2 className="functional__section__title">Як це працює</h2>
          <div className="functional__section">
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
    </div>
  );
};

export default Functional;
