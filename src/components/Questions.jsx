import React, { useState } from "react";
import "./Questions.scss";

const data = [
    {
        question: 'Як працює ваша аптечка під контролем ?',
        answer: 'Ви додаєте ліки у додаток, вказуєте термін придатності, і ми надсилаємо вам сповіщення, коли він спливає.'
    },
    {
        question: 'Як додати нові ліки до моєї аптечки?',
        answer: 'Натисніть кнопку "Додати" на головній панелі. У формі, що з’явиться, введіть назву препарату та вручну вкажіть дату, зазначену на упаковці. Це займає всього кілька секунд і гарантує точність даних.'
    },
    {
        question: 'Чи можу я редагувати дані після додавання?',
        answer: 'Так, звичайно. Якщо ви помилилися при введенні назви або дати, просто натисніть на картку ліків у вашому списку та оберіть опцію редагування, щоб внести корективи.'
    }
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
        <section className="ques__section">
            <h2 className="ques__title">Часті питання</h2>

        <div className="ques__list">
            {data.map((item, i) => (
            <div className="ques__item" key={i}>
                <div className="ques__item__header" onClick={() => toggle(i)}>
                    <h3>{item.question}</h3>
                    <span className={`arrow ${selected === i ? 'open' : ''}`}>
                    ⏺
                    </span>
                </div>

                <div className={`ques__item__content ${selected === i ? 'show' : ''}`}>
                    <p>{item.answer}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
    );
};

export default QUESTIONS;