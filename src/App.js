import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodeGenerator from "./components/QRCodeGenerator";
import PlayerInput from "./components/PlayerInput";
import Question from "./components/Question";
import Result from "./components/Result";
import { questions } from "./data";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [message, setMessage] = useState("");

  const handleJoinGame = (name) => {
    setPlayerName(name);
  };

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      setMessage(`Congratulations ${playerName}, you got it right!`);
      setTimeout(() => {
        setMessage("");
        setCurrentQuestionIndex((prev) =>
          Math.min(prev + 1, questions.length - 1)
        );
      }, 2000);
    } else {
      setMessage(`Wrong answer! The correct answer was ${correctAnswer}.`);
    }
  };

  return (
    <Router>
      <div className="App">
        {!playerName ? (
          <PlayerInput onSubmit={handleJoinGame} />
        ) : (
          <>
            <QRCodeGenerator url={window.location.href} />
            {currentQuestionIndex < questions.length ? (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <Result message="Game Over! Thank you for playing!" />
            )}
            {message && <Result message={message} />}
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
