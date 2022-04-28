import React from "react";
import styles from "../../../styles/quiz-card.module.css"

const Quiz = ({title, description, grade, link}) => (
    <div className = {styles.card}>
        <div className = {styles.header}>
            {grade}
        </div>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.description}>{description}</div>
        <div className = {styles.label}>
            N. Of Students: 32
        </div>
        <div className = {styles.date}>
            02/05/2022
        </div>
        <div onClick = {() => window.location.href = `/${link}`} className = {styles.link}>
            View More
        </div>
    </div>
)

export default Quiz;