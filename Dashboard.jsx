// Dashboard.js
import React from 'react';

const Dashboard = ({ userType, onLogout }) => {
  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>User Type: {userType}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
