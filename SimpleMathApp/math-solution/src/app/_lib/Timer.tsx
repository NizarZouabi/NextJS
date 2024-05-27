'use client'
import React, { useState, useEffect } from 'react';

interface TimerProps {
  seconds: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ seconds, onTimeUp }) => {
  const [time, setTime] = useState(seconds * 60);

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

  const formatTime = (seconds: number) => {
    const secs = seconds % 60;
    return `${secs < 10 ? '0' : ''}${secs}`;
  };

  return <div className='border-2 rounded border-cyan-500 text-yellow-500 px-4 py-1 text-xl'>{formatTime(time)}</div>;
};

export default Timer;