import React from 'react';
import { Button } from 'primereact/button';

const QuestionForm = ({ questions, currentQuestionIndex, onAnswerSelect }) => {
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <p>No hay preguntas disponibles o ha ocurrido un error.</p>;
  }

  // Mezclar respuestas para evitar un patrón predecible
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="question-form">
      <h2>{currentQuestion.question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <Button
              label={answer}
              className="p-button-secondary"
              onClick={() => onAnswerSelect(answer, answer === currentQuestion.correct_answer)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionForm;