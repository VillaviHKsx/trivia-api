import React, { createContext, useState } from 'react';

export const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);

  const handleLoseLife = () => setLives((prevLives) => prevLives - 1);
  const resetTimer = () => setTimeLeft(60);

  return (
    <TriviaContext.Provider
      value={{ lives, timeLeft, setTimeLeft, handleLoseLife, resetTimer }}
    >
      {children}
    </TriviaContext.Provider>
  );
};