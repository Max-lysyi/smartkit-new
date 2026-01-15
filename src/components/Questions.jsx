import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Questions.scss";

const data = [
  {
    question: "Що таке інформаційна система обліку ліків?",
    answer:
      "Це цифровий реєстр ваших ліків. Сервіс допомагає відстежувати наявність препаратів, переглядати інструкції та контролювати терміни придатності в одному місці.",
  },
  {
    question: "Як додати ліки до системи?",
    answer:
      "Введіть назву препарату вручну. Вкажіть термін придатності, і система автоматично додасть засіб до вашого списку.",
  },
  {
    question: "Звідки береться інформація про препарати?",
    answer:
      "Ми використовуємо офіційні дані з Державного реєстру лікарських засобів. Інформація є верифікованою, проте завжди звіряйте її з паперовою інструкцією в упаковці.",
  },
  {
    question: "Навіщо потрібні коментарі до ліків?",
    answer:
      "Тут ви можете фіксувати реакцію організму та своє самопочуття після прийому. Це допоможе вам і вашому лікарю оцінити ефективність конкретного препарату.",
  },
  {
    question: "Чи захищена інформація про мої ліки?",
    answer:
      "Так, ми використовуємо шифрування високого рівня. Ваша інформація про здоров'я є конфіденційною, доступною лише вам і не передається третім особам.",
  },
  {
    question: "Чи замінює сервіс консультацію лікаря?",
    answer:
      "Ні. Це інструмент для організації та обліку ваших медичних препаратів. Сервіс не ставить діагнозів і не призначає лікування — з цими питаннями завжди звертайтеся до фахівця.",
  },
];

const QUESTIONS = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {

    if (selected === i) {
        return setSelected(null);
    }
    setSelected(i);
    };

    return (
      <motion.div
        id="comment"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        viewport={{ once: true }}
        className="feature-card"
      >
        <section className="ques__section padings">
          <h2 className="ques__title">Часті питання</h2>

          <div className="ques__list">
            {data.map((item, i) => (
              <div className="ques__item" key={i}>
                <div className="ques__item__header" onClick={() => toggle(i)}>
                  <h3>{item.question}</h3>
                  <span className={`arrow ${selected === i ? "open" : ""}`}>
                    ⏺
                  </span>
                </div>

                <div
                  className={`ques__item__content ${
                    selected === i ? "show" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    );
};

export default QUESTIONS;