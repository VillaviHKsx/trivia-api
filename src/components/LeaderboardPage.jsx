import React from 'react';
import Header from './Header';
import LeaderboardTable from './LeaderboardTable';
import UserForm from './UserForm';
import '../styles/LeaderboardPage.css';

const LeaderboardPage = () => {
  return (
    <div className="leaderboard-page">
      <Header />
      <LeaderboardTable />
      <UserForm />
    </div>
  );
};

export default LeaderboardPage;