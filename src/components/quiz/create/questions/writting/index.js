import React, {useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../../../styles/quiz/question/question.module.css"

const WrittingQuestion = ({state, index, handleChange, error, setError}) => {
    useEffect(() => {
        autosize(question.current);
    })

    const question = useRef();

    return(
        <div className = {`${styles.container} ${styles.hidden}`}>
            <div className = {styles.column}>
                <>
                    <div className = {styles.label}>Describe the following task.</div>
                    {
                        error.question ? (
                            <div className = {styles.error}>{error.question}</div>
                        ):null
                    }
                    <textarea 
                        placeholder = "Ex: What is a cupcake?" 
                        className = {`${styles.input} ${styles.textarea} ${error.question ? styles.error_input : ""}`} 
                        name = "question"
                        ref = {question}
                        rows = {1}
                        onChange = {e => handleChange(index, e)}
                        value = {state.question}
                    />
                </>
            </div>
        </div>
    )
}

export default WrittingQuestion;