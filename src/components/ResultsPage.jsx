import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import LeaderboardTable from './LeaderboardTable';
import { Button } from 'primereact/button';
import '../styles/ResultsPage.css';

const ResultsPage = ({ location }) => {
  const navigate = useNavigate();
  const { state } = location || {};
  const currentNickname = state?.nickname || '';
  const currentPoints = state?.points || 0;

  const handlePlayAgain = () => {
    navigate('/'); // Regresar a la página principal de trivia
  };

  return (
    <div className="results-page">
      <Header />
      <h2>¡Resultados de la Trivia!</h2>
      <p>
      s</p>
      <LeaderboardTable currentNickname={currentNickname} currentPoints={currentPoints} />
      
      {/* Botón para volver a jugar */}
      <Button
        label="Jugar de Nuevo"
        className="p-button-primary play-again-button"
        onClick={handlePlayAgain}
      />
    </div>
  );
};

export default ResultsPage;