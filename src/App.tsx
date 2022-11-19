import React from "react";
import { useState } from "react";
import { fetchQuizQuestions, Question } from "./API";

// Components
import QuestionCard from "./components/QuestionCard";

// Types
import { QuestionState, Difficulty } from "./API";

export type AnswerObject = {
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

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

        console.log(newQuestions);

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);

        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // Get answer
            const answer = e.currentTarget.value;

            // Check answer
            const correct = questions[number].correct_answer === answer;

            // Add score if answer is correct
            if (correct) setScore((prev) => prev + 1);

            //Save answer in array for user answers
            const answerObject = {
                question: questions[number].question,
                answer, //basically doing questions[number].answer
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
            console.log("answer");
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <div className="App">
            <h1> React & TS Trivia Game</h1>

            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className="start" onClick={startTrivia}>
                    Start
                </button>
            ) : null}

            {/* These will hide if the conditions are true */}
            {!gameOver ? <p className="score">Score: {score} </p> : null}
            {loading && <p>Loading Questions ...</p>}

            {!loading && !gameOver && (
                <QuestionCard
                    questionNum={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}

            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                <button className="next" onClick={nextQuestion}>
                    Next Question
                </button>
            ) : null}
        </div>
    );
};

export default App;
