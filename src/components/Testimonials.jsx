import React from "react";
import "./Testimonials.scss";

import lizaImg from "../assets/img/liza.png";
import nazarImg from "../assets/img/nazar.jpg";
import pavloImg from "../assets/img/pavlo.png";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Єлизавета",
      role: "Студентка",
      text: "Нарешті викинула цілий пакет простроченого мотлоху. Тепер в аптечці тільки придатне. Дякую розробникам!",
      img: lizaImg,
    },
    {
      id: 2,
      name: "Назарій",
      role: "Студент",
      text: "Геніально і просто. Тепер не треба перебирати упаковки вручну, щоб знайти таблетку від голови. SmartKit економить купу часу.",
      img: nazarImg,
    },
    {
      id: 3,
      name: "Павло",
      role: "Викладач",
      text: "Справжній мастхев! Навіть не уявляв, скільки в мене було ліків, які давно час викинути. Дуже корисна штука.",
      img: pavloImg,
    },
  ];

  return (
    <section className="comments__section" id="comment">
      <h2 className="comments__section__title">Відгуки користувачів</h2>
      <div className="comments__section__box">
        {reviews.map((review) => (
          <div key={review.id} className="comments__section__box__item">
            <div className="comments__section__box__item__coment">
              <p className="comments__section__box__item__coment__par">
                "{review.text}"
              </p>
            </div>
            <div className="comments__section__box__item__content">
              <img
                src={review.img}
                alt={review.name}
                className="comments__section__box__item__content__img"
              />
              <div className="comments__section__box__item__content__info">
                <p className="comments__section__box__item__content__info__par">
                  {review.name}
                </p>
                <p className="comments__section__box__item__content__info__par">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
