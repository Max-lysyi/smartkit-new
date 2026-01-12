import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MedicinesPage.scss";
import AddByData from "../components/AddByData";
import Modal from "../components/Modal";
import OpenMedicinesCard from "../components/OpenMedicinesCard";

 

const MedicinesPage = () => {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Парацетамол 500 мг",
      type: "Таблетки",
      status: "expired",
      date: "Прострочено: 2023-10-20",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Всі");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medToDelete, setMedToDelete] = useState(null);
  
  const [isMedicinesCardModalOpen, setIsMedicinesCardModalOpen] =
    useState(false);
  const [activeMedicinesCard, setMedicinesCard] = useState(null);

 

  const categories = [
    "Всі",
    "Таблетки",
    "Сиропи",
    "Капсули",
    "Креми/Мазі",
    "Ін'єкції",
  ];

  const getDaysWord = (number) => {
    const n = Math.abs(number);

    const lastTwoDigits = n % 100;

    const lastDigit = n % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "днів";
    }

    if (lastDigit === 1) {
      return "день";
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return "дні";
    }

    return "днів";
  };
  // -----------------------------------------------------

  const calculateStatus = (expiryDateString) => {
    const today = new Date();
    const expDate = new Date(expiryDateString);

    today.setHours(0, 0, 0, 0);
    expDate.setHours(0, 0, 0, 0);

    const diffTime = expDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const daysWord = getDaysWord(diffDays);

    if (diffDays < 0) {
      return {
        status: "expired",
        text: `Прострочено: ${expiryDateString}`,
      };
    } else if (diffDays <= 15) {
      return {
        status: "warning",

        text: `Залишилось: ${diffDays} ${daysWord}`,
      };
    } else {
      return {
        status: "ok",

        text: `Залишилось: ${diffDays} ${daysWord}`,
      };
    }
  };
  // --------------------------------------

  const handleDeleteClick = (id) => {
    setMedToDelete(id);
    setIsModalOpen(true);
  };


  const confirmDelete = () => {
    setMedicines(medicines.filter((med) => med.id !== medToDelete));
    setIsModalOpen(false);
    setMedToDelete(null);
  };
    const handleCardClick = (med) => {
      setMedicinesCard(med);
      setIsMedicinesCardModalOpen(true);
    };

  
    

  const filteredMedicines =
    activeCategory === "Всі"
      ? medicines
      : medicines.filter((med) => med.type === activeCategory);

  const handleAddMedicine = (newMed) => {
    const calculatedInfo = calculateStatus(newMed.date);

    const newItem = {
      id: Date.now(),
      name: newMed.name,
      type: newMed.type,
      status: calculatedInfo.status,
      date: calculatedInfo.text,
      comment: newMed.comment,
    };

    setMedicines([newItem, ...medicines]);
  };

  return (
    <div className="medicines-page">
      <div className="wrapper">
        <div className="medicines-container">
          <h1 className="medicines-title">Мої ліки</h1>
          <Link to="/" className="medicines-container__button">
            На головну
          </Link>
        </div>

        <div className="controls-container">
          <div className="filters-bar">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${
                  cat === activeCategory ? "active" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="action-buttons">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="add-btn data-btn"
            >
              Додати через дані
            </button>
            {/* <button className="add-btn qr-btn">Відсканувати QR-код</button> */}
          </div>
        </div>

        <div className="medicines-grid">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className={`medicine-card ${med.status}`}
              onClick={() => handleCardClick(med)}
            >
              <div className="card-header">
                <div className="card-info">
                  <h3>{med.name}</h3>
                  <p>{med.type}</p>
                </div>
                <div className="card-actions">
                  <button
                    className="delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(med.id);
                    }}
                  >
                    ×
                  </button>
                  
                </div>
              </div>
              <div className="card-footer">
                <span>{med.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="delete-confirmation">
          <h2>Видалити цей засіб?</h2>
          <p>Ви впевнені, що хочете прибрати ці ліки з аптечки?</p>
          <div className="modal-actions">
            {/* <button
              className="btn-cancel"
              onClick={() => setIsModalOpen(false)}
            >
              Скасувати
            </button> */}
            <button className="btn-confirm" onClick={confirmDelete}>
              Видалити
            </button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <AddByData
          onAdd={handleAddMedicine}
          onClose={() => setIsAddModalOpen(false)}
        />
      </Modal>
      <Modal
        isOpen={isMedicinesCardModalOpen}
        onClose={() => setIsMedicinesCardModalOpen(false)}
      >
        <OpenMedicinesCard medicine={activeMedicinesCard} />
      </Modal>
    </div>
  );
};

export default MedicinesPage;
