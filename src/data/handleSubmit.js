export const handleFormSubmit = (
  e,
  { name, type, date }, // Об'єкт з даними
  { onAdd, onClose, resetForm } // Об'єкт з функціями
) => {
  e.preventDefault();

  if (!name || !type || !date) {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  onAdd({
    name,
    type,
    date,
  });

  resetForm(); // Тут викличеться функція, яку ми створили в компоненті
  onClose();
};
