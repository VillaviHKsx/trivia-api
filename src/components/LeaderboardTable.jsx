import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import '../styles/LeaderboardTable.css';

const LeaderboardTable = ({ currentNickname, currentPoints }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Recuperar los resultados de trivia desde localStorage
    const storedResults = localStorage.getItem('triviaResults');
    if (storedResults) {
      try {
        const resultsObj = JSON.parse(storedResults);
        const resultsArray = Object.entries(resultsObj).map(([nickname, points]) => ({
          nickname,
          points,
        }));
        resultsArray.sort((a, b) => b.points - a.points); // Ordenar de mayor a menor
        setPlayers(resultsArray);
      } catch (error) {
        console.error('Error al parsear los datos de triviaResults desde localStorage:', error);
      }
    }
  }, []);

  // Función para agregar clase de resaltado al usuario actual
  const rowClass = (data) => {
    return data.nickname === currentNickname && data.points === currentPoints ? 'highlight-row' : '';
  };

  return (
    <div className="table-container">
      <DataTable value={players} responsiveLayout="scroll" rowClassName={rowClass}>
        <Column field="nickname" header="Nickname" sortable={false}></Column>
        <Column field="points" header="Puntos" sortable={false}></Column>
      </DataTable>
    </div>
  );
};

export default LeaderboardTable;