import React from 'react';

const HeaderTriviaPage = ({ user, score }) => {
  return (
    <header className="header-trivia-page">
      <h1>Trivia</h1>
      {user ? (
        <div>
          <p>Usuario: {user}</p>
          <p>Puntos acumulados: {score}</p>
        </div>
      ) : (
        <p>No se encontró usuario en el registro</p>
      )}
    </header>
  );
};

export default HeaderTriviaPage;