import React from "react";
//Types
import { AnswerObject } from "../App";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined ;
    questionNum: number;
    totalQuestions: number;
};

// React.FC = Functional Component
const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => (
    <div>
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer) => (
                <div key={answer}>
                    <button value={answer} disabled={userAnswer ? true : false} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;
