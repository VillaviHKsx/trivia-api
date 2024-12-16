import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import '../styles/UserForm.css'; // Estilos específicos del formulario

const UserFormComponent = ({ onStart }) => {
  const [nickname, setNickname] = useState('');

  const handleStart = () => {
    if (nickname.trim()) {
      // Guardar el nickname en el localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (!users.includes(nickname)) {
        users.push(nickname);
        localStorage.setItem('users', JSON.stringify(users));
      }

      // Guardar el usuario logeado en sessionStorage
      sessionStorage.setItem('loggedInUser', nickname);

      // Llamar a la función onStart para redirigir
      onStart();
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Por favor, ingresa un nickname.',
      });
    }
  };

  return (
    <div className="input-container">
      <InputText
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Ingresa tu nickname"
        className="input"
      />
      <Button
        label="Iniciar"
        onClick={handleStart}
        className="p-button-rounded p-button-success button"
      />
    </div>
  );
};

export default UserFormComponent;