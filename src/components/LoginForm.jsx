import React from "react";
import "./LoginForm.scss";

const LoginForm = ({ onSwitchToRegister }) => {
  return (
    <div className="login-form">
      <h2>Вхід</h2>
      <form>
        <input type="email" placeholder="Електронна пошта" required />
        <div className="password-wrapper">
          <input type="password" placeholder="Пароль" required />
          
        </div>
        <button type="submit" className="btn-login">
          Увійти
        </button>
      </form>
      <p className="switch-link">
        Немає акаунту? <span onClick={onSwitchToRegister}>Зареєструватися</span>
      </p>
    </div>
  );
};

export default LoginForm;
