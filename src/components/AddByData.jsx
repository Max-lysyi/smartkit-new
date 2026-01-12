import React, { useState, useEffect } from "react"; 
import "./AddByData.scss";

import { searchMedicinesOnServer } from "../services/api";

const AddByData = ({ onAdd, onClose }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [extraInfo, setExtraInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 


  useEffect(() => {
    
    if (name.length < 2) {
      setSuggestions([]);
      return;
    }

   
    const timerId = setTimeout(async () => {
      setIsLoading(true); 

      try {
       
        const results = await searchMedicinesOnServer(name);
        setSuggestions(results);
      } catch (error) {
        console.error("Помилка пошуку:", error);
      } finally {
        setIsLoading(false); 
      }
    }, 500);

   
    return () => clearTimeout(timerId);
  }, [name]); 
  const handleNameChange = (e) => {
    setName(e.target.value);
   
    if (extraInfo) {
      setType("");
      setExtraInfo(null);
    }
  };

  const selectMedicine = (med) => {
    setName(med.name);
    setType(med.type);
    setExtraInfo(med.details); 
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !date) {
      alert("Будь ласка, заповніть віжливі поля");
      return;
    }

    onAdd({
      name,
      type,
      date,
      comment,
      details: extraInfo,
    });


    setName("");
    setType("");
    setDate("");
    setComment("");
    setExtraInfo(null);
    onClose();
  };

  return (
    <div className="add-form">
      <h2>Додати ліки через дані</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Назва ліків "
            value={name}
            onChange={handleNameChange}
            name="medicineName"
            autoComplete="off"
          />

         
          {isLoading && (
            <div className="loading-indicator">Пошук у реєстрі...</div>
          )}

          {suggestions.length > 0 && !isLoading && (
            <ul className="suggestions-list">
              {suggestions.map((med) => (
                <li key={med.id} onClick={() => selectMedicine(med)}>
                  {med.name}{" "}
                  <span className="suggestion-type">({med.type})</span>
                </li>
              ))}
            </ul>
          )}
        </div>

     

        <input
          type="text"
          placeholder="Тип"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="date-input"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-textarea"
          placeholder="Коментар"
        />

        <div className="form-btn">
          <button type="submit">Додати</button>
        </div>
      </form>
    </div>
  );
};

export default AddByData;
