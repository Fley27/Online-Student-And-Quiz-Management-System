import React, {useState} from "react"
import styles from "../../../../styles/quiz/preview/category.module.css"

export const QuestionWithMultipleChoice = (props) =>{
    const [select, setSelect] = useState(null);

    const handleSelect = (item) => {
        setSelect(item)
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.question}>{props.state.question}</div>
            <div className = {styles.answers}>
                {
                    props.state.answers.map(item => (
                        <div  key = {item.id} className = {`${styles.answer} ${select === item.id ? styles.selectAnswer : ""}`}>
                            <div className = {styles.overlay}></div>
                            <div onClick = {() => handleSelect(item.id)} className = {styles.circle}>
                                <div className = {styles.check}></div>
                            </div>
                            <span>{item.answer}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const answers = [
    { id: 1, answer: "A place where people don't question my authority."},
    { id: 2, answer: "Wherever my best friends are, that's where I want to be."},
    { id: 3, answer: "One where everyone pushes themselves to do their best every single day."},
    { id: 4, answer: "One that's organized, structured and has workplace policies set."},
    { id: 5, answer: "A place where everyone knows that I am the boss."},
    { id: 6, answer: "A place where I'm the CEO."}
]