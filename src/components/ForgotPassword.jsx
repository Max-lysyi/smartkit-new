import React from "react";
import "./ForgotPassword.scss"; 
const ForgotPassword = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Інструкції відправлено на пошту!");
    onClose();
  };

  return (
    <div className="forgot-password-form">
      <h2>Відновлення паролю</h2>
      <p className="description">
        Введіть свою електронну пошту, і ми надішлемо вам інструкції для зміни
        паролю.
      </p>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Електронна пошта" required />

        <button type="submit" className="btn-send">
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
