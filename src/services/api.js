

// Тимчасова база 
const MOCK_DB = [
  {
    id: 1,
    name: "Парацетамол",
    type: "Таблетки",
    details: {
      description: "Жарознижувальний засіб.",
      contraindications: "Хвора печінка.",
    },
  },
  {
    id: 2,
    name: "Нурофєн",
    type: "Сиропи",
    details: {
      description: "Знеболювальне для дітей.",
      contraindications: "Астма, виразка.",
    },
  },
  {
    id: 3,
    name: "Парацетамол",
    type: "Таблетки",
    details: {
      description: "Жарознижувальний засіб.",
      contraindications: "Хвора печінка.",
    },
  },
  {
    id: 4,
    name: "Нурофєн",
    type: "Сиропи",
    details: {
      description: "Знеболювальне для дітей.",
      contraindications: "Астма, виразка.",
    },
  },
  {
    id: 5,
    name: "Парацетамол",
    type: "Таблетки",
    details: {
      description: "Жарознижувальний засіб.",
      contraindications: "Хвора печінка.",
    },
  },
  {
    id: 6,
    name: "Нурофєн",
    type: "Сиропи",
    details: {
      description: "Знеболювальне для дітей.",
      contraindications: "Астма, виразка.",
    },
  },
  {
    id: 7,
    name: "Нурофєн",
    type: "Сиропи",
    details: {
      description: "Знеболювальне для дітей.",
      contraindications: "Астма, виразка.",
    },
  },
];


export const searchMedicinesOnServer = async (query) => {
  console.log(`Searching for: ${query}...`);

 
  // try {
  //   const response = await fetch(`https://api.your-backend.com/medicines/search?q=${query}`);
  //   if (!response.ok) throw new Error('Error fetching data');
  //   const data = await response.json();
  //   return data; // Повертаємо масив ліків
  // } catch (error) {
  //   console.error(error);
  //   return [];
  // }


  return new Promise((resolve) => {
    setTimeout(() => {
     
      const results = MOCK_DB.filter((med) =>
        med.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 500); 
  });
};
