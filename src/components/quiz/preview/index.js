import React from "react";
import { QuestionWithMultipleChoice } from "./category/multiple-choice";
import { QuestionWithDirectAnswer } from "./category/direct-answer";
import { CompleteWithMultipleChoice } from "./category/complete-multiple-choice";
import styles from "../../../styles/quiz/preview/quiz.module.css"

const QuizPreview = ({selectQuestionID, setSelectQuestionID, questions}) => {

    const CurrentQuestion = ({item}) => {
        return(
            !item.answers.length ? (
                <QuestionWithDirectAnswer
                    state = {item}
                />
            ): <QuestionWithMultipleChoice
                state = {item}
            />
        )
    }

    const handlePrevious = (index) => {
        const question = questions[index - 1];
        setSelectQuestionID(question.id)
    }

    const handleNext = (index) => {
        const question = questions[index + 1];
        setSelectQuestionID(question.id)
    }


    return(    
        questions.map((item, index) => (
            selectQuestionID === item.id && item.category !== "" ? 
            <div className = {styles.container}>
                <div className = {styles.overlay}></div>
                <div className = {styles.progressBar}>
                    <div style = { { width : `${(index + 1)/questions.length * 100}%`}} className = {styles.insideBar}></div>
                </div>
                <div className = {styles.pages}>
                    <div className = {styles.btn}>
                        {
                            index !== 0 ?(
                                <div onClick = {() => handlePrevious(index)} >
                                    <span><i className="fas fa-long-arrow-left"></i></span>
                                    Previous
                                </div>
                            ): <></>
                        }
                    </div>

                    <div className = {styles.btn}>
                        {
                            (index + 1) < questions.length ?(
                                <div onClick = {() => handleNext(index)} >
                                    Next
                                    <span><i className="fas fa-long-arrow-right"></i></span>
                                </div>
                            ): <></>
                        }
                    </div>
                </div>
                <div className = {styles.quiz}>
                    <div className = {styles.currentQuestion}>
                        Question {index + 1} / {questions.length}
                    </div>
                    <CurrentQuestion
                        item = {item}
                    />
                    {
                        (index + 1) < questions.length ? (
                            <div onClick = {() => handleNext(index)} className = {styles.nextQuestion}>
                                Next Question
                            </div>
                        ): <></>
                    }
                </div>
            </div> :<></>
        ))
    )
}

export default QuizPreview;