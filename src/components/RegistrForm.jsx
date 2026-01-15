import React, { useState } from "react";
import "./RegistrForm.scss";
import Modal from "./Modal"; 
import ForgotPassword from "./ForgotPassword";

const RegisterForm = ({ onSwitchToLogin }) => {

  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  return (
    <div className="register-form">
      <h2>Реєстрація</h2>
      <form>
        <input type="email" placeholder="Електронна пошта" />

        <div className="password-wrapper">
          <input type="password" placeholder="Пароль" />
          <i className="fa-regular fa-eye-slash"></i>
        </div>

   
        <span
          className="lost-password-link"
          onClick={() => setIsForgotModalOpen(true)}
        >
          Забули пароль?
        </span>

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


      {isForgotModalOpen && (
        <Modal
          isOpen={isForgotModalOpen}
          onClose={() => setIsForgotModalOpen(false)}
          transparentOverlay={true} 
        >
          <ForgotPassword onClose={() => setIsForgotModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default RegisterForm;
