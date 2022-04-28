import React, {useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../../../styles/quiz/question/question.module.css"

const WrittingQuestion = ({state, handleChange, error, setError}) => {
    useEffect(() => {
        autosize(question.current);
    })

    const question = useRef();

    const inputValidation = (name, item) => {
        let value = "";
        if(!item)
            value = `Your ${name} is required.`;
        setError(prevState=>({...prevState, [name]: value}))

        if(value)
            return true;
        return false
    }

    const formValidation = () =>{
        setError({
            question
        })

        const question = inputValidation("question", state.question.question);

        if(question)
            return false;
    
        return true;
    }

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
                        onChange = {handleChange}
                        value = {state.question.question}
                    />
                </>
            </div>
        </div>
    )
}

export default WrittingQuestion;