import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTriviaPage from './HeaderTriviaPage';
import QuestionForm from './QuestionForm';
import '../styles/TriviaPage.css';

const TriviaPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(() => {
    const storedResults = localStorage.getItem('triviaResults');
    return storedResults ? JSON.parse(storedResults) : {};
  });
  const [isTriviaCompleted, setIsTriviaCompleted] = useState(false);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser);

      // Inicializar puntaje del usuario si no existe
      const storedResults = localStorage.getItem('triviaResults');
      const parsedResults = storedResults ? JSON.parse(storedResults) : {};
      if (!parsedResults[loggedInUser]) {
        parsedResults[loggedInUser] = 0;
        localStorage.setItem('triviaResults', JSON.stringify(parsedResults));
      }
      setScore(parsedResults[loggedInUser]);
    }

    // Cargar preguntas desde la API
    fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error en la API: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setQuestions(data.results);
        } else {
          throw new Error('No se encontraron preguntas en la API.');
        }
      })
      .catch((err) => {
        console.error('Error al cargar las preguntas:', err);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Guardar puntaje final al terminar la trivia
    if (questions.length > 0 && currentQuestionIndex >= questions.length && !isTriviaCompleted) {
      const storedResults = localStorage.getItem('triviaResults');
      const parsedResults = storedResults ? JSON.parse(storedResults) : {};

      parsedResults[user] = score;
      localStorage.setItem('triviaResults', JSON.stringify(parsedResults));
      setResults(parsedResults);
      setIsTriviaCompleted(true);

      // Redirigir a la página de resultados
      navigate('/results', { state: { nickname: user, points: score } });
    }
  }, [currentQuestionIndex, questions, isTriviaCompleted, score, user, navigate]);

  const handleAnswerSelect = (answer, correct) => {
    if (correct) {
      const newScore = score + 1;
      setScore(newScore);

      // Actualizar puntaje en localStorage
      const storedResults = localStorage.getItem('triviaResults');
      const parsedResults = storedResults ? JSON.parse(storedResults) : {};
      parsedResults[user] = newScore;
      localStorage.setItem('triviaResults', JSON.stringify(parsedResults));
      setResults(parsedResults);
    }

    // Avanzar al siguiente índice de pregunta
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (isLoading) {
    return <p>Cargando preguntas...</p>;
  }

  if (error) {
    return <p>Error al cargar preguntas: {error}</p>;
  }

  return (
    <div className="trivia-page">
      <HeaderTriviaPage user={user} score={score} />
      <QuestionForm
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
};

export default TriviaPage;