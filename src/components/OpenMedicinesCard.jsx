import React, { useState } from "react";
import "./OpenMedicinesCard.scss";
import infoIcon from "../assets/img/info.png";
import CardFullInfo from "./CardFullInfo";
import Modal from "./Modal"; 

const OpenMedicinesCard = ({ medicine }) => {
  if (!medicine) return null;

 
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleInfoClick = () => {
    setIsInfoModalOpen(true);
  };

  return (
    <div className={`open-card-content ${medicine.status}`}>
      <h2 className="med-title">{medicine.name}</h2>

      <button
        className="info-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleInfoClick();
        }}
        title="Детальна інформація"
      >
        <img src={infoIcon} alt="Info" />
      </button>

      <div className="info-grid">
        <div className="info-row">
          <span className="label">Тип:</span>
          <span className="value">{medicine.type}</span>
        </div>

        <div className="info-row">
          <span className="label">Термін:</span>
          <span className="value">{medicine.date}</span>
        </div>
      </div>

      {medicine.comment && (
        <div className="comment-block">
          <span className="label">Ваш коментар:</span>
          <p className="comment-text">{medicine.comment}</p>
        </div>
      )}

      {isInfoModalOpen && (
        <Modal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          transparentOverlay={true} 
        >
          <CardFullInfo
            medicine={medicine}
            onClose={() => setIsInfoModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default OpenMedicinesCard;
