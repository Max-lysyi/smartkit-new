import React from "react";
import "./CardFullInfo.scss";

const CardFullInfo = ({ medicine, onClose }) => {
  if (!medicine) return null;

  return (
    <div className="card-inf">
      <div className="card-inf__section">
        <h2 className="card-inf__section__title">{medicine.name}</h2>
        <span className="card-inf__section__type">Тип: {medicine.type}</span>

        <p>Термін придатності: {medicine.date}</p>
        {medicine.comment && <p>Коментар: {medicine.comment}</p>}
      </div>
    </div>
  );
};

export default CardFullInfo;
