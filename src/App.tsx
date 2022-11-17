import React from "react";
import { useState } from "react";
import { fetchQuizQuestions, Question } from "./API";

// Components
import QuestionCard from "./components/QuestionCard";

// Types
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10; //set from API

const App = () => {
    // Set states
    const [loading, setLoading] = useState(false); // set default to false
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

    const startTrivia = async () => {
		
	};

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
            {/* <QuestionCard 
				questionNum={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number]}
				answers={questions[number].answer}
				userAnswer={userAnswers ? userAnswers[number]: undefined}
				callback={checkAnswer}
			/> */}
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
};

export default App;
