import React from "react";
import Quiz from "../cards/quiz/index";
import styles from "../../styles/quiz-card.module.css"

const QuizPage = () => (
    <div className = {styles.container}>
        <Quiz  
            grade = "A"
            title = "Basic Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/basic"
        />
        <Quiz  
            grade = "B"
            title = "Intermediate Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/intermediate"
        />
        <Quiz  
            grade = "C"
            title = "Advanced Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/advanced"
        />
        <Quiz  
            grade = "D"
            title = "Business Spanish Level"
            description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
            link = "course/business"
        />
    </div>
)

export default QuizPage;