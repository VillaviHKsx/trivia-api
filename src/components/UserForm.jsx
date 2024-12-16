import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../styles/UserForm.css';

const UserForm = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    // Recuperar el usuario logeado desde sessionStorage
    const user = sessionStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleStartTrivia = () => {
    navigate('/questions');
  };

  return (
    <div className="form-container">
      <div className="input-group">
        <label htmlFor="nickname">Usuario Logeado:</label>
        <InputText id="nickname" value={loggedInUser} readOnly className="input" />
      </div>
      <Button
        label="Jugar"
        onClick={handleStartTrivia}
        className="p-button-rounded p-button-success"
      />
    </div>
  );
};

export default UserForm;