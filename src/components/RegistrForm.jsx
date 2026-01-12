import React from "react";
import "./RegistrForm.scss";

const RegisterForm = ({ onSwitchToLogin }) => {
  return (
    <div className="register-form">
      <h2>Реєстрація</h2>
      <form>
        <input type="text" placeholder="Ім'я та Прізвище" />
        <input type="email" placeholder="Електронна пошта" />

        <div className="password-wrapper">
          <input type="password" placeholder="Пароль" />
          <i className="fa-regular fa-eye-slash"></i>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Я погоджуюся з
            <span>умовами використання</span>
          </label>
          <label>
            <input type="checkbox" /> Підписатися на новини
          </label>
        </div>

        <button type="submit" className="btn-register">
          Зареєструватися
        </button>
      </form>
      <p className="login-link">
        Вже маєте акаунт? <span onClick={onSwitchToLogin}>Увійти</span>
      </p>
    </div>
  );
};

export default RegisterForm;
