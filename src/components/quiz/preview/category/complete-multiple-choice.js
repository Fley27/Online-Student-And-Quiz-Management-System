import React, {useState} from "react"
import styles from "../../../../styles/quiz/preview/category.module.css"

export const CompleteWithMultipleChoice = () =>{
    const [select, setSelect] = useState(null);

    const handleSelect = (item) => {
        setSelect(item)
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.question}>Choose the best answer that can complete the below sentence.</div>
            <div className = {styles.sentence}>{`__________`} a man working in the street.</div>
            <div className = {styles.answers}>
                {
                    answers.map(item => (
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
    { id: 1, answer: "There were"},
    { id: 2, answer: "There are"},
    { id: 3, answer: "There is"},
    { id: 4, answer: "They are"},
    { id: 5, answer: "It has"},
]