import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Login.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  
  return (
    <div className="App">
      {currentPage === 'login' ? (
        <Login onSwitch={() => setCurrentPage('register')} />
      ) : (
        <Register onSwitch={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;