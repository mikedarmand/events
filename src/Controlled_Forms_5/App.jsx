import React, { useState } from 'react';
import Login from './Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (formData) => {
    
    console.log('Dati di login ricevuti:', formData);
    
    if (formData.username === 'utente' && formData.password === 'password') {
      setIsLoggedIn(true);
      setUserData(formData);
    } else {
      alert('Credenziali errate!');
    }
  };

  return (
    <div className="App">
      <h1>La mia App React</h1>
      {isLoggedIn ? (
        <div>
          <h2>Benvenuto, {userData.username}!</h2>
         
        </div>
      ) : (
        <Login handleLogin={handleLogin} /> 
      )}
    </div>
  );
}

export default App;
