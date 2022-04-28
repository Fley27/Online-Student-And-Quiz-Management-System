import React, {useState, useRef, useEffect} from "react";
import autosize from "autosize";
import styles from "../../../../../styles/quiz/question/question.module.css"

const ListeningQuestion = ({state, handleChange}) => {
    useEffect(() => {
        autosize(question.current);
        autosize(audioUrl.current);
    })

    const question = useRef();
    const audioUrl = useRef();

    const [error, setError] = useState({
        question: "", 
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
            question,
            audioUrl
        })

        const question = inputValidation("question", state.question.question);
        const audioUrl = inputValidation("audioUrl", state.question.audioUrl) 

        if(question || audioUrl)
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
                        placeholder = "Ex: Write what you heard. " 
                        className = {`${styles.input} ${styles.textarea} ${error.question ? styles.error_input : ""}`} 
                        name = "question"
                        ref = {question}
                        rows = {1}
                        onChange = {handleChange}
                        value = {state.question.question}
                    />
                </>
            </div>
            <div className = {styles.column}>
                <>
                    <div className = {styles.label}>Link of the Audio</div>
                    {
                        error.question ? (
                            <div className = {styles.error}>{error.audioUrl}</div>
                        ):null
                    }
                    <textarea 
                        placeholder = "Ex: https://vocaroo.com/embed/1l8y8WMfbHYy?autoplay=0" 
                        className = {`${styles.input} ${styles.textarea} ${error.audioUrl ? styles.error_input : ""}`} 
                        name = "audioUrl"
                        ref = {audioUrl}
                        rows = {1}
                        onChange = {handleChange}
                        value = {state.question.audioUrl}
                    />
                </>
            </div>
        </div>
    )
}

export default ListeningQuestion;