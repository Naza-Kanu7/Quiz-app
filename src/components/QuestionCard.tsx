import React from 'react'
import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

// SETTING THE TYPES FRO THE PROPS NEEDED IN THE QUESTION CARD
type Props = {
    question: string;
    // string[] - array of strings
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number
}

// TYPING THE COMPONENT AS A FUNCTIONAL COMPONENT - FC
const QuestionCard: React.FC<Props> = ({
    // DESTRUCTURING THE PROPS
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className='number'> {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper
                        key={answer}  
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                        </button>
                    </ButtonWrapper>

                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard
