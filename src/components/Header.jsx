

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Subtract.svg";


import Modal from "./Modal";
import RegisterForm from "./RegistrForm";
import LoginForm from "./LoginForm";
import "./Header.scss";
const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("register"); 
  return (
    <div className="light__bg">
      <div className="wrapper">
        <header className="header">
          <section className="header__section">
            <div className="header__section__first">
              <Link to="/">
                {" "}
                <img
                  className="header__section__first__logo"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <p className="header__section__first__par">M. E. D. I. C.</p>
            </div>

            <div className="header__section__second">
              <nav className="header__section__second__nav">
                <a
                  href="#mexanizm"
                  className="header__section__second__nav__item"
                >
                  Принцип роботи
                </a>
                <a
                  href="#comment"
                  className="header__section__second__nav__item"
                >
                  Відгуки
                </a>
                <a
                  href="#footer"
                  className="header__section__second__nav__item"
                >
                  Контакти
                </a>
              </nav>
            </div>

            <div className="header__section__third">
              <button
                className="header__section__third__btn "
                onClick={() => {
                  setModalType("register");
                  setModalOpen(true);
                }}
              >
                Log in / Sign up
              </button>
              <Link to="/medicines" className="header__section__third__btn">
                Додати ліки
              </Link>
            </div>
          </section>
        </header>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {modalType === "register" ? (
          <RegisterForm onSwitchToLogin={() => setModalType("login")} />
        ) : (
          <LoginForm onSwitchToRegister={() => setModalType("register")} />
        )}
      </Modal>
    </div>
  );
};

export default Header;
