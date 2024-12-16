import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import FormLogin from './FormLogin';
import '../styles/StartPage.css';


const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/Leaderboard'); // Redirigir a la página de leaderboard
  };

  return (
    <div className="container">
      <HeaderLogin />
      <FormLogin onStart={handleStart} />
    </div>
  );
};

export default StartPage;