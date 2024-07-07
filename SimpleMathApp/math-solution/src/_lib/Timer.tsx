'use client'
import React, { useState, useEffect } from 'react';

interface TimerProps {
  minutes: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ minutes, onTimeUp }) => {
  const [time, setTime] = useState(minutes * 60);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, onTimeUp]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const container = `bg-cyan-600 border px-4 py-1 text-xl ${time <= 30 ? 'text-red-500' : ''}`

  return (
    <div className={container} style={{width:'85px'}}>
      {formatTime(time)}
    </div>
  );
};

export default Timer;