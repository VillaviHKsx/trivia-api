import React from 'react';
import { Button } from 'primereact/button';

const ResultsButton = ({ navigate }) => {
  const handleResults = () => {
    navigate('/results');
  };

  return (
    <div className="results-button">
      <Button label="Ver Resultados" onClick={handleResults} className="p-button-rounded p-button-primary" />
    </div>
  );
};

export default ResultsButton;