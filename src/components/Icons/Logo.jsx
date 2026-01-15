import React from "react";

const Logo = ({
  size = 60,
  className = "",
  // Додаємо пропси для кольорів (за замовчуванням - твої оригінальні кольори)
  topColor = "#E53935", // Червоний
  middleColor = "#FDD835", // Жовтий
  bottomColor = "#7CB342", // Зелений
  id = "default",
}) => {
  // Створюємо унікальні назви для градієнтів на основі пропса ID
  const gradTop = `grad-top-${id}`;
  const gradMid = `grad-mid-${id}`;
  const gradBot = `grad-bot-${id}`;
  const clipId = `pill-shape-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Визначення градієнтів та масок */}
      <defs>
        {/* Маска форми пігулки */}
        <clipPath id="pill-shape-final">
          <rect x="20" y="10" width="60" height="80" rx="30" />
        </clipPath>

        {/* Градієнт для червоної смуги */}
        <linearGradient
          id="red-grad"
          x1="50"
          y1="50"
          x2="50"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E53935" />
          <stop offset="1" stopColor="#D32F2F" />
        </linearGradient>

        {/* Градієнт для жовтої смуги */}
        <linearGradient
          id="yellow-grad"
          x1="50"
          y1="62"
          x2="50"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDD835" />
          <stop offset="1" stopColor="#FBC02D" />
        </linearGradient>

        {/* Градієнт для зеленої смуги */}
        <linearGradient
          id="green-grad"
          x1="50"
          y1="78"
          x2="50"
          y2="110"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7CB342" />
          <stop offset="1" stopColor="#689F38" />
        </linearGradient>

        {/* Градієнт для тіні на білій частині */}
        <linearGradient
          id="white-shadow"
          x1="80"
          y1="10"
          x2="60"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CFD8DC" stopOpacity="0.6" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Основна група з поворотом на 45 градусів */}
      <g transform="rotate(45 50 50)">
        {/* === ВНУТРІШНЄ НАПОВНЕННЯ (з маскою та градієнтами) === */}
        <g clipPath="url(#pill-shape-final)">
          {/* 1. Верхня половина (Біла) */}
          <rect x="20" y="10" width="60" height="40" fill="white" />

          {/* М'яка тінь всередині білої частини */}
          <path
            d="M 80 10 A 30 30 0 0 0 50 10 L 50 50 L 80 50 Z"
            fill="url(#white-shadow)"
          />

          {/* 2. Нижня половина (Кольорова з градієнтами) */}
          {/* Червона смуга */}
          <rect x="20" y="50" width="60" height="12" fill="url(#red-grad)" />

          {/* Жовта смуга */}
          <rect x="20" y="64" width="60" height="13" fill="url(#yellow-grad)" />

          {/* Зелена частина */}
          <rect x="20" y="79" width="60" height="31" fill="url(#green-grad)" />

          {/* Білі розділювачі */}
          <rect x="20" y="62" width="60" height="2" fill="white" />
          <rect x="20" y="77" width="60" height="2" fill="white" />
        </g>

        {/* === КОНТУРИ ТА АКЦЕНТИ === */}

        {/* Помаранчевий акцент (світіння) на центральній лінії */}
        <line
          x1="35"
          y1="50"
          x2="65"
          y2="50"
          stroke="#FF9800"
          strokeWidth="4"
          strokeOpacity="0.8"
        />

        {/* Чорна рамка навколо пігулки */}
        <rect
          x="20"
          y="10"
          width="60"
          height="80"
          rx="30"
          stroke="#263238"
          strokeWidth="3"
          fill="none"
        />

        {/* Чорна лінія посередині (перекриває помаранчеву, залишаючи світіння по краях) */}
        <line
          x1="20"
          y1="50"
          x2="80"
          y2="50"
          stroke="#263238"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default Logo;
