import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // eslint-disable-next-line
import QRCodeGenerator from "./components/QRCodeGenerator";
import PlayerInput from "./components/PlayerInput";
import Question from "./components/Question";
import Result from "./components/Result";
import { questions } from "./data";
import "./App.css"; // Ensure this file includes the updated styling

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [message, setMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleJoinGame = () => {
    setGameStarted(true);
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
      setMessage(`Wrong answer!.`);
    }
  };

  return (
    <Router>
      <div className="App">
        {!gameStarted ? (
          <div className="game-start-container">
            <h1>Welcome to the KBC-Style Game</h1>
            <div className="question-container">
              <p>{questions[currentQuestionIndex].question}</p>
              <QRCodeGenerator url={window.location.href} />
              <button className="join-game-btn" onClick={handleJoinGame}>
                Join Game
              </button>
            </div>
          </div>
        ) : !playerName ? (
          <PlayerInput onSubmit={setPlayerName} />
        ) : (
          <>
            {currentQuestionIndex < questions.length ? (
              <>
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
                {message && <Result message={message} />}
              </>
            ) : (
              <Result message="Game Over! Thank you for playing!" />
            )}
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
