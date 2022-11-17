import React from "react";
// Components
import QuestionCard from "./components/QuestionCard";
import { useState } from "react";

const App = () => {
    // Set states
    const [loading, setLoading] = useState(false); // set default to false
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {};

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    return (
        <div className="App">
            <h1> React & TS Trivia Game</h1>
            <button className="start" onClick={startTrivia}>
                Start
            </button>
            <p className="score">Score: </p>
            <p>Loading Questions ...</p>
            <QuestionCard />
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
};

export default App;
