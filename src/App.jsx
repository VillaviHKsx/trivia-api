import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import TriviaPage from './components/TriviaPage';
import ResultsPage from './components/ResultsPage';
import LeaderboardPage from './components/LeaderboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Leaderboard" element={<LeaderboardPage />} />
        <Route path="/questions" element={<TriviaPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
