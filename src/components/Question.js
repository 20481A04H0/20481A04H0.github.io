import React from "react";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div>
      <h3>{question}</h3>
      <div>
        {Object.keys(options).map((key) => (
          <button key={key} onClick={() => onAnswer(key)}>
            {key}: {options[key]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
