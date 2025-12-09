import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Login.css';

function App() {
  const {currentPage, setCurrentPage} = useState('login');
  
  return (
    <div className="App">
      <div style={{textAlign: 'center', marginBottom: '20px'}}>
        <button
          onClick={() => setCurrentPage('login')}
          style={{ 
            marginRight: '10px', width: '100px', backgroundColor: currentPage === 'login' ? '#007bff' : '#6c757d'
          }}
        >
          Login
        </button>
        <button 
          onClick={() => setCurrentPage('register')}
          style={{ 
            width: '100px',
            backgroundColor: currentPage === 'register' ? '#007bff' : '#ccc'
          }}       
        >
          Register
        </button>
      </div>

      {/* Conditional Rendering: Show Login or Register based on state */}
      {currentPage === 'login' ? <Login /> : <Register />}
      
    </div>
  );
}

export default App;