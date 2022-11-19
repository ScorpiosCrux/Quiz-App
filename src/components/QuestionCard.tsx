import React from "react";
//Types
import { AnswerObject } from "../App";

//Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

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
    <Wrapper>
        <p className="number">
            Question: {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer) => (
                /* Optional Chaining */
                <ButtonWrapper 
                    key={answer} 
                    correct={userAnswer?.correctAnswer === answer} 
                    userClicked={userAnswer?.answer === answer}
                >
                    <button value={answer} disabled={userAnswer ? true : false} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;
