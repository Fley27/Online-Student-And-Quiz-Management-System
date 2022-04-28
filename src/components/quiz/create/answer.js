import React, {useState, useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../styles/quiz/question/question.module.css"


const Answers = ({state, changeAnswerStatus, ...props}) => {
    useEffect(() => {
        autosize(answer.current);
    })

    const answer = useRef();
    const audioUrl = useRef();

    const [error, setError] = useState({
        answer: "", 
        audioUrl: ""
    })

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

        const question = inputValidation("question", state.question);

        if(question)
            return false;
    
        return true;
    }

    if(state.question.answers.length){
        return(
            <>
                <div className = {styles.title}>Answers</div>
                {
                    state.question.answers.map(item => (
                        <div key = {item.id} className = {`${styles.container} ${props.selectAnswerID !== item.id ? styles.collapsed : "" }`}>
                            <div onClick = {() => props.setSelectAnswerID(item.id)} className = {styles.header}>
                                <div className = {styles.title}>
                                    {!item.answer ? "Not specified": item.answer}
                                </div>
                                <div className = {styles.category}>
                                    {!item.status  ? "Wrong": "Good"}
                                </div>
                            </div>
                            <div className = {styles.column}>
                                <>
                                    <div className = {styles.label}>Answer</div>
                                    {
                                        error.question ? (
                                            <div className = {styles.error}>{error.answer}</div>
                                        ):null
                                    }
                                    <textarea 
                                        placeholder = "Ex: Is a little cake." 
                                        className = {`${styles.input} ${styles.textarea} ${error.answer ? styles.error_input : ""}`} 
                                        name = "answer"
                                        ref = {answer}
                                        rows = {1}
                                        onChange = {props.handleAnswerChange}
                                    />
                                </>
                            </div>
                            <div className = {styles.column}>
                                <>
                                    <div className = {styles.label}>Is a Good Answer?</div>
                                    <div onClick = {()=> changeAnswerStatus(item.id)} className = {`${styles.radioButton} ${item.status ? styles.green : null}`}>
                                        <div className = {styles.status}></div>
                                    </div>
                                </>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }else
        return<></>
}

export default Answers;