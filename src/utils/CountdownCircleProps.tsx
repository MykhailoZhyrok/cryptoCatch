import React, { useEffect, useState } from 'react';

interface CountdownCircleProps {
  duration: number;  // Загальний час відліку в секундах
  timeLeft: number;  // Час, що залишився в секундах
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({ duration, timeLeft }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((timeLeft / duration) * 100);
  }, [timeLeft, duration]);

  const radius = 50; 
  const circumference = 2 * Math.PI * radius; 

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ width: '30px', height: '30px' }}>
      <svg width="30" height="30" viewBox="0 0 120 120">

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="10"
        />
        {/* Прогрес кола (зелена лінія) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="green"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 1s linear',  // Плавна анімація
          }}
        />
        {/* Текст для відображення часу */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="20"
          fill="black"
        >
          {Math.ceil(timeLeft)}s
        </text>
      </svg>
    </div>
  );
};

export default CountdownCircle;
