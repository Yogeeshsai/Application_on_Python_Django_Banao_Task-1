// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setUserType(type);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/login">
            <LoginForm onLogin={handleLogin} />
          </Route>
          <Route path="/dashboard">
            {isLoggedIn ? <Dashboard userType={userType} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
