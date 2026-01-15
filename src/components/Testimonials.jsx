import React from "react";
import "./Testimonials.scss";
import { motion } from "framer-motion";
import lizaImg from "../assets/img/liza.png";
import nazarImg from "../assets/img/nazar.jpg";
import pavloImg from "../assets/img/pavlo.png";

import vladImg from "../assets/img/6296aeaa-41ee-4495-86a3-11cf9b522592.jpg"
import dashaImg from "../assets/img/e0fbcefa-e64a-411a-a4c6-7fd85ea5ee2d.jpg";
import maxImg from "../assets/img/7bd2ecac-1390-4f11-85c4-026a88c6035a.jpg";
import DimaImg from "../assets/img/Screenshot_2.jpg";

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
    {
      id: 4,
      name: "Даша",
      role: "Студентка",
      text: "Раніше я постійно купувала дублікати ліків, бо просто не знала, що вже є вдома. Тепер перевіряю SmartKit прямо в аптеці. Це реальна економія грошей!",
      img: dashaImg,
    },
    {
      id: 5,
      name: "Макс",
      role: "Студент",
      text: "Навів лад в аптечці батьків за допомогою SmartKit. Тепер я спокійний, що у них під рукою тільки свіжі препарати, а пошук потрібного займає секунди.",
      img: maxImg,
    },
    {
      id: 6,
      name: "Діма",
      role: "Студент",
      text: "Дуже зручний та інтуїтивний інтерфейс. Навіть не очікував, що інвентаризація домашньої аптечки може бути такою швидкою і навіть приємною справою!",
      img: DimaImg,
    },
    {
      id: 7,
      name: "Влад",
      role: "Студент",
      text: "Сповіщення про термін придатності — це любов. Більше ніякого ризику випити прострочену таблетку. Нарешті в моїх ліках повний порядок.",
      img: vladImg,
    },
  ];

  return (
    <motion.div
      id="comment"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
      className="feature-card"
    >
      <section className="comments__section padings" id="comment">
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
    </motion.div>
  );
};

export default Testimonials;
