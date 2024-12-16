import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>¡Bienvenido a la Trivia!</h1>
      <nav>
        {/* Opcional: Aquí puedes agregar enlaces o botones de navegación si es necesario */}
      </nav>
    </header>
  );
};

export default HeaderComponent;